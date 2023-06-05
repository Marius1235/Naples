import { useState } from "react";
import IImage from "../interfaces/IImages";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/BackgroundChoiceComponent.css'

const BackgroundChoiceComponent: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(require("../assets/images/Background4.png"));

  const changeBackground = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const backgroundOptions: IImage[] = [
    { imageUrl: require("../assets/images/Background4.png"), alt: "Background 1" },
    { imageUrl: require("../assets/images/Background5.png"), alt: "Background 2" },
    { imageUrl: require("../assets/images/Background3.png"), alt: "Background 3" },
  ];

  
  return (
    <div className="container">
      <div className="selected-image-container">
        <img className="selected-image" src={selectedImage} alt="Selected Image" />
      </div>
      <div className="background-bar">
        {backgroundOptions.map((option: IImage) => (
          <img
            key={option.imageUrl}
            className={`background-option ${option.imageUrl === selectedImage ? "selected" : ""}`}
            src={option.imageUrl}
            alt={option.alt}
            onClick={() => changeBackground(option.imageUrl)}
          />
        ))}
      </div>
    </div>
  );
};

  
  export default BackgroundChoiceComponent;