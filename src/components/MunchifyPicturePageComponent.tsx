// Imports:
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import { CapturedImageContext } from "../contexts/CapturedImageContext";
import * as tf from '@tensorflow/tfjs';
import React, { useEffect, useState } from 'react';
import { loadGraphModel } from '@tensorflow/tfjs-converter';



const MunchifyPicturePageComponent: React.FC = () => {
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  
    useEffect(() => {
        const loadModel = async () => {
            try {
              const model = await tf.loadLayersModel('/models/model.json');
            } catch (error) {
              console.error(error);
            }
          };
  
      loadModel();
    }, []);
  
    
  
    return (
      <div>
        {/* {generatedImage && <img src={generatedImage} alt="Generated Image" />} */}
      </div>
    );
  };
  
  export default MunchifyPicturePageComponent;
