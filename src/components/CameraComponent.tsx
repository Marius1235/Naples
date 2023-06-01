import { useRef, useEffect, useState, useContext } from "react";
import { CapturedImageContext } from "../contexts/CapturedImageContext";
import { useNavigate } from "react-router-dom";

const CameraComponent: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const capturedImageContext = useContext(CapturedImageContext);

  const [countdown, setCountdown] = useState(5);
  const [isCounting, setIsCounting] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isCounting) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isCounting]);

  useEffect(() => {
    if (countdown === 0 && isCounting) {
      takePicture();
      setShowImage(true);
      setTimeout(() => {
        navigate("pictureChoice")
      }, 50); 
    }
  }, [countdown, isCounting, capturedImageContext]);

  const startCountdown = () => {
    setCountdown(5);
    setIsCounting(true);
  };

  useEffect(() => {
    const findCamera = async (): Promise<MediaDeviceInfo | null> => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const camera = devices.find(
          (device) =>
            device.kind === "videoinput" && device.label.includes("C920")
        );
        return camera || null;
      } catch (error) {
        console.error("Error enumerating devices:", error);
        return null;
      }
    };

    const startCamera = async (): Promise<void> => {
      const camera = await findCamera();
      if (camera) {
        const constraints: MediaStreamConstraints = {
          video: { deviceId: camera.deviceId },
        };

        navigator.mediaDevices
          .getUserMedia(constraints)
          .then((stream) => {
            if (videoRef.current) {
              videoRef.current.srcObject = stream;
            }
          })
          .catch((error) => {
            console.error("Error accessing camera:", error);
          });
      } else {
        console.error("Camera not found.");
      }
    };

    startCamera();
  }, []);

  const takePicture = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const context = canvas.getContext("2d");
      context?.drawImage(video, 0, 0, canvas.width, canvas.height);

      const dataUrl = canvas.toDataURL("image/png");

      if (capturedImageContext) {
        capturedImageContext.setCapturedImage(dataUrl);
      }
    }
  };

  return (
    <div>
      <video ref={videoRef} autoPlay muted />
      <canvas ref={canvasRef} style={{ display: "none" }} />
      {isCounting ? (
        <p>Countdown: {countdown}</p>
      ) : (
        <button onClick={startCountdown}>Start Countdown</button>
      )}
    </div>
  );
};

export default CameraComponent;
