import { useRef, useEffect, useState, useContext } from "react";
import { CapturedImageContext } from "../contexts/CapturedImageContext";

const CameraComponent: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const capturedImageContext = useContext(CapturedImageContext);

  const [countdown, setCountdown] = useState(5);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      takePicture();
    }
  }, [countdown]);

  const startCountdown = () => {
    setCountdown(5); // Set initial countdown value
    setIsCounting(true); // Start the countdown
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
        console.error("Logitech camera not found.");
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
      setCapturedImage(dataUrl);
    }
  };

  return (
    <div>
      <video ref={videoRef} autoPlay muted />
      <canvas ref={canvasRef} style={{ display: "none" }} />
      {!isCounting && <button onClick={startCountdown}>Start Countdown</button>}
      {countdown > 0 ? (
        <p>Countdown: {countdown}</p>
      ) : (
        <p>
          {isCounting
            ? "Countdown finished!"
            : "Click the button to start the countdown."}
        </p>
      )}
    </div>
  );
};

export default CameraComponent;
