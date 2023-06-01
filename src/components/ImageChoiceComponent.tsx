import { useRef, useEffect, useState, useContext } from "react";
import { CapturedImageContext } from "../contexts/CapturedImageContext";


const ImageChoiceComponent: React.FC = () => { 
    const capturedImageContext = useContext(CapturedImageContext);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    return(
        <div>
            {capturedImageContext?.capturedImage && <img src={capturedImageContext.capturedImage} alt="Captured" />}
            <canvas ref={canvasRef} style={{ display: "none" }} />
        </div>
    )
};

export default ImageChoiceComponent
