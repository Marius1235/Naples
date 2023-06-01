// Importing necessary libraries and files // [CODEREVIEW] 
import { useRef, useEffect, useState, useContext } from "react";
import { CapturedImageContext } from "../contexts/CapturedImageContext";
import { useNavigate } from "react-router-dom";

// CameraComponent function that returns the video input from the camera and a button that starts a countdown. // [CODEREVIEW] 
const CameraComponent: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);                // Kanskje  inline comments her? // [CODEREVIEW] 
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const capturedImageContext = useContext(CapturedImageContext);

  const [countdown, setCountdown] = useState(5);
  const [isCounting, setIsCounting] = useState(false);
  const [showImage, setShowImage] = useState(false);            // Skal dette brukes? // [CODEREVIEW]
  const navigate = useNavigate();

  // Starts a timer that counts down from 5 to 0. // [CODEREVIEW] 
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isCounting) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isCounting]);

  // When the countdown reaches 0, the takePicture function is called and the image is stored in a useState. // [CODEREVIEW]
  useEffect(() => {
    if (countdown === 0 && isCounting) {
      takePicture();
      setShowImage(true);
      setTimeout(() => {
        navigate("pictureChoice")
      }, 50); 
    }
  }, [countdown, isCounting, capturedImageContext]);

  // Runs when the button is clicked. Starts the timer which then initilizes the takePhoto function.
  // After the takePhoto function is called, you then get redirected to the next page.
  const startCountdown = () => {
    setCountdown(5);
    setIsCounting(true);
  };

  // Function that runs in the background on startup. Finds the selected external device on the computer.
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

    // If the camera is found the current media device will stream the video input onto the website.
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

  // Takes a picture of the input and stores the image in a background running useState.
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

  // Returns the video input from the camera and a button that starts a countdown. // [CODEREVIEW] 
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

// Exports // [CODEREVIEW]
export default CameraComponent;
