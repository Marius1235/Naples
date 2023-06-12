// Imports of necessary libraries and files
import { useRef, useEffect, useState, useContext } from "react";
import { CapturedImageContext } from "../contexts/CapturedImageContext";
import { useNavigate } from "react-router-dom";
import { faCamera, faDeleteLeft, faSquareCheck, fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../src/css/TakePicturePage.css";

// Camera component for video streaming, picture taking and countdown.
const CameraComponent: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null); // useRef can be used to store a mutable value that does not cause a re-render when updated.
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const capturedImageContext = useContext(CapturedImageContext);
  const [countdown, setCountdown] = useState(5);
  const [isCounting, setIsCounting] = useState(false);
  const navigate = useNavigate();

  // Starts a timer that counts down from 5 to 0.
    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (isCounting) {
        timer = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);
        }

        return () => clearInterval(timer);
    }, [isCounting]);

  // When the countdown reaches 0, the takePicture function is called and the image is stored in a useState.
  useEffect(() => {
    if (countdown === 0 && isCounting) {
      takePicture();
      setTimeout(() => {
        navigate("/choicePage");
      }, 5);
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
        let camera: MediaDeviceInfo | null = null;

        // Find the webcam based on label
        camera = devices.find(
          (device) =>
            device.kind === "videoinput" && device.label.includes('HD')
        ) || null;

        return camera;
      } catch (error) {
        console.error("Error enumerating devices:", error);
        return null;
      }
    };

    // If the camera is found, the current media device will stream the video input onto the website.
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

        const dataUrl = canvas.toDataURL("image/JPEG");

        if (capturedImageContext) {
            capturedImageContext.setCapturedImage(dataUrl);
        }
        }
    };

  // Returns the video input from the camera and a button that starts a countdown for the picture to be taken.
  return (
    <div className="container" id="customized-container">
      <video className={`video-ref ${isCounting ? "blinking" : ""}`} ref={videoRef} autoPlay muted />
      <canvas className={`canvas-ref ${isCounting ? 'hidden' : ''}`} ref={canvasRef} style={{ display: "none" }} />
      {isCounting ? (
        <p className="countdown">{countdown}</p>
      ) : (
        <FontAwesomeIcon onClick={startCountdown} className={`picture-btn ${isCounting ? 'hidden' : ''}`} icon={faCamera} />
      )}
    </div>
  );
};

// Export for use in pages
export default CameraComponent;
