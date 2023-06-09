import React, { useState, useEffect, useContext, useRef, useCallback } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { CapturedImageContext } from '../contexts/CapturedImageContext';
import '../css/MunchifiedPage.css'

const MunchifyPicturePageComponent = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const capturedImage = useContext(CapturedImageContext);
  const [loading, setLoading] = useState(true);
  const isConvertedRef = useRef(false);
  const navigate = useNavigate();
  const previousCapturedImageRef = useRef(capturedImage?.capturedImage);

  const convertToImageFile = useCallback(() => {
    fetch(capturedImage?.capturedImage!)
      .then((response) => response.blob())
      .then((blob) => {
        const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });
        setSelectedFile(file);
      })
      .catch((error) => {
        console.log('An error occurred:', error);
      });
    isConvertedRef.current = true;
  }, [capturedImage]);

  const onFileUpload = useCallback(async () => {
    if (selectedFile) {
      setLoading(true);

      const formData = new FormData();
      formData.append('file', selectedFile, selectedFile.name);

      try {
        const response = await fetch('http://localhost:5000/predict', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          console.log(result);
          capturedImage?.setCapturedImage("data:image/png;base64," + result.result);
          setLoading(false);
          navigate('/new-page'); // Replace '/new-page' with your desired route
        } else {
          console.log('An error occurred');
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, [capturedImage, selectedFile, navigate]);

  useEffect(() => {
    if (!isConvertedRef.current) {
      convertToImageFile();
    }
  }, [convertToImageFile]);

  useEffect(() => {
    if (selectedFile) {
      onFileUpload();
    }
  }, [selectedFile, onFileUpload]);

  useEffect(() => {
    if (capturedImage?.capturedImage !== previousCapturedImageRef.current) {
      navigate("/actionPage");
    }

    // Update the previousCapturedImageRef with the current capturedImage state
    previousCapturedImageRef.current = capturedImage?.capturedImage;
  }, [capturedImage?.capturedImage]);

  return (
    <div id="container">
      {loading ? (
        <div className="loading-spinner"></div>
      ) : (
        <div>
          {capturedImage?.capturedImage && (
            <div>
              <img src={capturedImage.capturedImage} alt="Processed" />
            </div>
          )}
        </div>
      )}
    </div>
  );
  
};

export default MunchifyPicturePageComponent;








