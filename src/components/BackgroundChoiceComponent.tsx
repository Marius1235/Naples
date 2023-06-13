import { useState, useRef, useContext, useEffect } from "react";
import IImage from "../interfaces/IImages";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/BackgroundChoiceComponent.css";
import { CapturedImageContext } from "../contexts/CapturedImageContext";
import {
  faArrowAltCircleDown,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faArrowAltCircleUp,
  faMagnifyingGlassMinus,
  faMagnifyingGlassPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

// Component for choosing background and merging it with the user image
const BackgroundChoiceComponent: React.FC = () => {
  const [selectedBackground, setSelectedBackground] = useState<string>(
    require("../assets/images/Background4.jpg")
  );
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const capturedImageContext = useContext(CapturedImageContext);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  const previousCapturedImageRef = useRef(capturedImageContext?.capturedImage);

  const [zoomLevel, setZoomLevel] = useState(1);

  const [imageWidth, setImageWidth] = useState<number>(0);
  const [imageHeight, setImageHeight] = useState<number>(0);

  const changeBackground = (imageUrl: string) => {
    setSelectedBackground(imageUrl);
  };

  // Move image function
  const moveImage = (xOffset: number, yOffset: number) => {
    setPosition({
      x: position.x + xOffset,
      y: position.y + yOffset,
    });
  };

  const zoomIn = (xOffset: number, yOffset: number) => {
    const newZoomLevel = zoomLevel + 0.1;
    const newX = position.x + xOffset;
    const newY = position.y + yOffset;

    setZoomLevel(newZoomLevel);
    setPosition({ x: newX, y: newY });
  };

  const zoomOut = (xOffset: number, yOffset: number) => {
    const newZoomLevel = zoomLevel - 0.1;
    const newX = position.x + xOffset;
    const newY = position.y + yOffset;

    setZoomLevel(newZoomLevel);
    setPosition({ x: newX, y: newY });
  };

  // Array of background images
  const backgroundOptions: IImage[] = [
    {
      imageUrl: require("../assets/images/Background1.jpg"),
      alt: "Background 1",
    },
    {
      imageUrl: require("../assets/images/Background2.jpg"),
      alt: "Background 2",
    },
    {
      imageUrl: require("../assets/images/Background3.jpg"),
      alt: "Background 3",
    },
    {
      imageUrl: require("../assets/images/Background4.jpg"),
      alt: "Background 4",
    },
    {
      imageUrl: require("../assets/images/Background5.jpg"),
      alt: "Background 5",
    },
    {
      imageUrl: require("../assets/images/Background6.jpg"),
      alt: "Background 6",
    },
    {
      imageUrl: require("../assets/images/Background7.jpg"),
      alt: "Background 7",
    },
    {
      imageUrl: require("../assets/images/Background8.jpg"),
      alt: "Background 8",
    },
    {
      imageUrl: require("../assets/images/Background9.jpg"),
      alt: "Background 9",
    },
    {
      imageUrl: require("../assets/images/Background10.jpg"),
      alt: "Background 10",
    },
    {
      imageUrl: require("../assets/images/Background11.jpg"),
      alt: "Background 11",
    },
    {
      imageUrl: require("../assets/images/Background12.jpg"),
      alt: "Background 12",
    },
    {
      imageUrl: require("../assets/images/Background13.jpg"),
      alt: "Background 13",
    },
    {
      imageUrl: require("../assets/images/Background14.jpg"),
      alt: "Background 14",
    },
    {
      imageUrl: require("../assets/images/Background15.jpg"),
      alt: "Background 15",
    },
    {
      imageUrl: require("../assets/images/Background16.jpg"),
      alt: "Background 16",
    },
    {
      imageUrl: require("../assets/images/Background17.jpg"),
      alt: "Background 17",
    },
    {
      imageUrl: require("../assets/images/Background18.jpg"),
      alt: "Background 18",
    },
    {
      imageUrl: require("../assets/images/Background19.jpg"),
      alt: "Background 19",
    },
    {
      imageUrl: require("../assets/images/Background20.jpg"),
      alt: "Background 20",
    },
    {
      imageUrl: require("../assets/images/Background21.jpg"),
      alt: "Background 21",
    },
    {
      imageUrl: require("../assets/images/Background22.jpg"),
      alt: "Background 22",
    },
    {
      imageUrl: require("../assets/images/Background23.jpg"),
      alt: "Background 23",
    },
    {
      imageUrl: require("../assets/images/Background24.jpg"),
      alt: "Background 24",
    },
    {
      imageUrl: require("../assets/images/Background25.jpg"),
      alt: "Background 25",
    },
    {
      imageUrl: require("../assets/images/Background26.jpg"),
      alt: "Background 26",
    },
    {
      imageUrl: require("../assets/images/Background27.jpg"),
      alt: "Background 27",
    },
  ];

  // Function for merging the background and the user image
  const createCombinedImage = () => {
    if (canvasRef.current && capturedImageContext?.capturedImage) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const background = new Image();
      background.src = selectedBackground;
      background.onload = () => {
        canvas.width = background.width;
        canvas.height = background.height;

        ctx?.drawImage(background, 0, 0);

        const image = new Image();
        image.src = capturedImageContext.capturedImage!;
        image.onload = () => {
          const x = position.x;
          const y = position.y;

          const zoomedImageWidth = image.width * (zoomLevel / 1);
          const zoomedImageHeight = image.height * (zoomLevel / 1);

          ctx?.drawImage(image, x, y, zoomedImageWidth, zoomedImageHeight);

          const combinedImageData = canvas.toDataURL("image/jpeg");
          capturedImageContext?.setCapturedImage(combinedImageData);
        };
      };
    } else {
      console.log("There is no image to combine with");
    }
  };

  useEffect(() => {
    if (
      capturedImageContext?.capturedImage !== previousCapturedImageRef.current
    ) {
      navigate("/munchifiedPage");
    }
    // Update the previousCapturedImageRef with the current capturedImage state
    previousCapturedImageRef.current = capturedImageContext?.capturedImage;

    if (capturedImageContext?.capturedImage) {
      const image = new Image();
      image.onload = () => {
        // Width and height calculations
        setImageWidth(image.width);
        setImageHeight(image.height);
        // Further actions with the loaded image can be performed here
      };
      image.src = capturedImageContext.capturedImage;
    }
  }, [capturedImageContext?.capturedImage, zoomLevel, navigate]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-2" id="bg-selector">
          <div className="background-bar">
            {backgroundOptions.map((option: IImage) => (
              <img
                key={option.imageUrl}
                className={`background-option ${
                  option.imageUrl === selectedBackground ? "selected" : ""
                }`}
                src={option.imageUrl}
                alt={option.alt}
                onClick={() => changeBackground(option.imageUrl)}
              />
            ))}
          </div>
        </div>

        <div className="col-sm-8" id="background-settings">
          <div className="image-wrapper">
            <img
              className="selected-background"
              src={selectedBackground}
              alt="Selected Background"
            />

            {/* Use of inline styling, maybe change? */}
            <img
              className="selected-image"
              src={capturedImageContext?.capturedImage!}
              alt="Captured"
              style={{
                position: "absolute",
                left: `${position.x}px`,
                top: `${position.y}px`,
                width:
                  imageWidth && imageHeight
                    ? `${imageWidth * zoomLevel}px`
                    : "auto",
                height:
                  imageWidth && imageHeight
                    ? `${imageHeight * zoomLevel}px`
                    : "auto",
              }}
            />
          </div>
        </div>

        <div className="col-sm-2">
          <p className="text-center">Position yourself using the arrows</p>

          <div id="icon-mover" className="container">
            <FontAwesomeIcon
              className="arrows"
              id="arrow-left"
              onClick={() => moveImage(-10, 0)}
              icon={faArrowAltCircleLeft}
            />
            <FontAwesomeIcon
              className="arrows"
              id="arrow-right"
              onClick={() => moveImage(10, 0)}
              icon={faArrowAltCircleRight}
            />
            <FontAwesomeIcon
              className="arrows"
              id="arrow-down"
              onClick={() => moveImage(0, 10)}
              icon={faArrowAltCircleDown}
            />
            <FontAwesomeIcon
              className="arrows"
              id="arrow-up"
              onClick={() => moveImage(0, -10)}
              icon={faArrowAltCircleUp}
            />
          </div>

          <div id="zoom-btn">
            <FontAwesomeIcon
              className="zoom"
              id="zoom-in"
              onClick={() => zoomIn(-30, -30)}
              icon={faMagnifyingGlassPlus}
              style={{}}
            />
            <FontAwesomeIcon
              className="zoom"
              id="zoom-out"
              onClick={() => zoomOut(30, 30)}
              icon={faMagnifyingGlassMinus}
              style={{}}
            />
          </div>

          <div
            className="combine-btn text-center"
            onClick={createCombinedImage}
          >
            Combine
            <br /> Images {/* <FontAwesomeIcon icon={faSquareCheck} /> */}
          </div>
        </div>
      </div>
      <canvas ref={canvasRef} style={{ display: "none" }} />
      <div></div>
    </div>
  );
};

export default BackgroundChoiceComponent;
