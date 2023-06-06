// Imports of necessary libraries and files 
import { useRef, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CapturedImageContext } from "../contexts/CapturedImageContext";
import { faDeleteLeft, faSquareCheck, fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../src/css/RemoveBackgroundPage.css";

// Fetches the image in the useState and displays it in a canvasRef.
const ImageChoiceComponent: React.FC = () => {
  const capturedImageContext = useContext(CapturedImageContext);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Html elements with img output and Link(button) to the previous page
  return (
    <div>
      {capturedImageContext?.capturedImage && (
        <img className="img-canvas" src={capturedImageContext.capturedImage} alt="Captured" />
      )}
      <canvas ref={canvasRef} style={{ display: "none" }} />  
      <div>
        <Link to="/picturePage">
          <FontAwesomeIcon className={"retake-btn"} icon={faDeleteLeft} />
        </Link>
      </div>
    </div>
  );
};

// Export for use in pages
export default ImageChoiceComponent;