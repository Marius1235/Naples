// Imports:
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChangeEvent, useContext } from "react";
import { CapturedImageContext } from "../contexts/CapturedImageContext";
import * as tf from '@tensorflow/tfjs';
import React, { useEffect, useState } from 'react';
import { loadGraphModel } from '@tensorflow/tfjs-converter';

const MunchifyPicturePageComponent = () => {
  const [image, setImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const capturedImage = useContext(CapturedImageContext)

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.files && event.target.files[0]) {
        setSelectedFile(event.target.files[0]);
    }
};

  const convertToImageFile = () => {
    fetch(capturedImage?.capturedImage!)
      .then((response) => response.blob())
      .then((blob) => {
        const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });
        setSelectedFile(file);
      })
      .catch((error) => {
        console.log('An error occurred:', error);
      });
  };

  const onFileUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile, selectedFile.name);

      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        capturedImage?.setCapturedImage("data:image/png;base64," + result.result);
      } else {
        console.log('An error occurred');
      }
    }
  };

  useEffect(() => {
    convertToImageFile();
    
  }, []); // Run this effect only once, when the component mounts

  return (
    <div>
      <button onClick={onFileUpload}>the fuck????</button>
      <input type="file" onChange={onFileChange}/>
      {capturedImage?.capturedImage && (
        <div>
          <img src={capturedImage.capturedImage} alt="Processed" />
        </div>
      )}
    </div>
  );
};
  
export default MunchifyPicturePageComponent;


