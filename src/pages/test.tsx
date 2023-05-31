import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useRef } from 'react';

function CameraFunction(): JSX.Element {
    const videoRef = useRef<HTMLVideoElement>(null);
  
    useEffect(() => {
      navigator.mediaDevices.getUserMedia({ video: false })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((error) => {
          console.error('Error accessing camera:', error);
        });
    }, []);
  
    return <video ref={videoRef} autoPlay muted />;
  }


const Test = () => {
    return (
        <div>
        <Link className="btn btn-secondary mt-5 m-5" to="Next">Yo</Link>
        <CameraFunction/>
        </div>
    )
};
export default Test;