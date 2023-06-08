// Imports:
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChangeEvent, useContext } from "react";
import { CapturedImageContext } from "../contexts/CapturedImageContext";
import * as tf from '@tensorflow/tfjs';
import React, { useEffect, useState } from 'react';
import { loadGraphModel } from '@tensorflow/tfjs-converter';
import axios from 'axios';

const MunchifyPicturePageComponent = () => {
  const [image, setImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      if(event.target.files && event.target.files[0]) {
          setSelectedFile(event.target.files[0]);
      }
  };

  const onFileUpload = async () => {
      if(selectedFile) {
          const formData = new FormData();
          formData.append(
              'file',
              selectedFile,
              selectedFile.name
          );

          const response = await fetch('http://localhost:5000/predict', {
              method: 'POST',
              body: formData
          });

          if(response.ok) {
              const result = await response.json();
              console.log(result);
              setImage("data:image/png;base64," + result.result);
          } else {
              console.log('An error occurred');
          }
      }
  };


  return (
      <div>
          <input type="file" onChange={onFileChange} />
          <button onClick={onFileUpload}>
              Upload!
          </button>

          {image && (
            <div>
              <img src={image} alt="Processed"/>
            </div>
          )}
      </div>
  );
};

  export default MunchifyPicturePageComponent;