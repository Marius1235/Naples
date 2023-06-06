// Imports:
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import { CapturedImageContext } from "../contexts/CapturedImageContext";
import * as tf from '@tensorflow/tfjs';
import React, { useEffect, useState } from 'react';
import { loadGraphModel } from '@tensorflow/tfjs-converter';



const MunchifyPicturePageComponent: React.FC = () => {

const capturedImage = useContext(CapturedImageContext);
const [image, setImage] = useState<tf.Tensor3D | null>(null);

useEffect(() => {
    const processImage = async () => {
    if (capturedImage && capturedImage.capturedImage) {
       const image = await convertBase64toImageData(capturedImage.capturedImage);
       munchifyImage(image);
    }
    };
    processImage();
}, [capturedImage]);

const munchifyImage = async (imageData: ImageData): Promise<tf.Tensor> => {
    //Wait for loadModel function to finish
    const model = await loadModel();
    //send the image to preprocess function for resizing
    const preprocessedImage = preprocessImage(imageData);
    //Apply model prediction to the image
    const munchifiedImage = model.predict(preprocessedImage) as tf.Tensor3D;
    
    //Convert tensor to data URL
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
        const pixels = await tf.browser.toPixels(munchifiedImage);
        const imageData = new ImageData(pixels, munchifiedImage.shape[1], munchifiedImage.shape[0]);
        ctx.putImageData(imageData, 0, 0);
        const dataUrl = canvas.toDataURL();
        
        //Set captured image and state
        capturedImage?.setCapturedImage(dataUrl);
        setImage(munchifiedImage);
        console.log(munchifiedImage)
    }
    
    return munchifiedImage;
    
}

const loadModel = async (): Promise<tf.LayersModel> => {
    //load the model from the path
    const model = await tf.loadLayersModel(require('../assets/models/model.json'));
    return model
}

// Convert base64 to ImageData
const convertBase64toImageData = async (base64: string): Promise<ImageData> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";  // Add this if images are cross-origin
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                reject(new Error('Could not create canvas context'));
                return;
            }
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            resolve(imageData);
        };
        img.onerror = reject;
        img.src = base64;
    });
}

// Resize the image to the size expected by the model(256x256)
const preprocessImage = (image:ImageData): tf.Tensor3D => {
    let tensorImage = tf.browser.fromPixels(image);
    tensorImage = tf.image.resizeBilinear(tensorImage, [256, 256]);
    //Normalize pixel values to [-1,1]
    tensorImage = tensorImage.div(127.5).sub(1);
    //Insert a batch dimension
    return tensorImage.expandDims(0) as tf.Tensor3D
}

    return (
        <div>
            // Display the image
        </div>
    )
}
export default MunchifyPicturePageComponent;
