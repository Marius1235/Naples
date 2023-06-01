import { useRef, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CapturedImageContext } from "../contexts/CapturedImageContext";
import BackgroundRemoverService from "../services/BackgroundRemoverSerive";

// Fetches the image in the useState and displays it in a canvasRef.

const ImageChoiceComponent: React.FC = () => {
  const capturedImageContext = useContext(CapturedImageContext);
  const canvasRef = useRef<HTMLCanvasElement>(null);


  return (
    <div>
      {capturedImageContext?.capturedImage && (
        <img src={capturedImageContext.capturedImage} alt="Captured" />
      )}
      <canvas ref={canvasRef} style={{ display: "none" }} />  
      <Link to="/">Retake</Link>
    </div>
  );
};

export default ImageChoiceComponent;
