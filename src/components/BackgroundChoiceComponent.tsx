import { useState, useRef, useContext } from "react";
import IImage from "../interfaces/IImages";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/BackgroundChoiceComponent.css'
import { CapturedImageContext } from "../contexts/CapturedImageContext";


const BackgroundChoiceComponent: React.FC = () => {
    const [selectedBackground, setSelectedBackground] = useState<string>(require("../assets/images/Background4.png"));
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const capturedImageContext = useContext(CapturedImageContext);
    const testImage = require("../assets/images/josef.png")

    const changeBackground = (imageUrl: string) => {
        setSelectedBackground(imageUrl);
  };

    const backgroundOptions: IImage[] = [
        { imageUrl: require("../assets/images/Background4.png"), alt: "Background 1" },
        { imageUrl: require("../assets/images/Background5.png"), alt: "Background 2" },
        { imageUrl: require("../assets/images/Background6.jpg"), alt: "Background 3" },
        { imageUrl: require("../assets/images/Background7.jpg"), alt: "Background 4" },
        { imageUrl: require("../assets/images/Background8.jpg"), alt: "Background 5" },
        { imageUrl: require("../assets/images/Background9.jpg"), alt: "Background 6" },
        { imageUrl: require("../assets/images/Background10.jpg"), alt: "Background 7" },
        { imageUrl: require("../assets/images/Background11.jpg"), alt: "Background 8" },
    ];

    const createCombinedImage = () => {
        if (canvasRef.current && testImage) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Load the background image
        const background = new Image();
        background.src = selectedBackground;
        background.onload = () => {
            // Set canvas dimensions to match the background image
            canvas.width = background.width;
            canvas.height = background.height;

            // Draw the background image onto the canvas
            ctx?.drawImage(background, 0, 0);

            // Load the selected image
            const image = new Image();
            image.src = testImage;
            image.onload = () => {
            // Calculate the position to center the selected image on the canvas
            const x = (canvas.width - image.width) / 2;
            const y = (canvas.height - image.height) / 2;

            // Draw the selected image onto the canvas
            ctx?.drawImage(image, x, y);

            // Create a new image with the combined images
            const combinedImageData = canvas.toDataURL("image/png");
            capturedImageContext?.setCapturedImage(combinedImageData);
            };
        };
        }else{
        console.log("There is no image to combine with");
        }
    };

    return (
        <div className="container">
        <div className="selected-image-container">
            <div className="image-wrapper">
            <img className="selected-background" src={selectedBackground} alt="Selected Background" />
            <img className="selected-image" src={testImage} alt="Captured" />
            </div>
            <div className="combine-btn" onClick={createCombinedImage}>Combine Images</div>
        </div>
        <div className="background-bar">
            {backgroundOptions.map((option: IImage) => (
            <img
                key={option.imageUrl}
                className={`background-option ${option.imageUrl === selectedBackground ? "selected" : ""}`}
                src={option.imageUrl}
                alt={option.alt}
                onClick={() => changeBackground(option.imageUrl)}
            />
            ))}
        </div>
        {capturedImageContext?.capturedImage && (
            <img src={capturedImageContext.capturedImage} alt="Captured" />
        )}
        <canvas ref={canvasRef} style={{ display: "none" }} />
        </div>
    );
};

export default BackgroundChoiceComponent;