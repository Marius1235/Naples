import { useState, useRef, useContext, useEffect } from "react";
import IImage from "../interfaces/IImages";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/BackgroundChoiceComponent.css";
import { CapturedImageContext } from "../contexts/CapturedImageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  	faArrowAltCircleDown,
  	faArrowAltCircleLeft,
  	faArrowAltCircleRight,
  	faArrowAltCircleUp,
  	faMagnifyingGlassMinus,
  	faMagnifyingGlassPlus,
	  faImagePortrait,
	  faImage,
    faSquare
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";



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
    resetToSquare();
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
		    { imageUrl: require("../assets/images/Background1.jpg"), portraitUrl:require("../assets/images/Background1Portrait.jpg"), landscapeUrl:require("../assets/images/Background1Landscape.jpg"),  alt: "Background 1" },
        { imageUrl: require("../assets/images/Background2.jpg"), portraitUrl:require("../assets/images/Background2Portrait.jpg"), landscapeUrl:require("../assets/images/Background2Landscape.jpg"), alt: "Background 2" },
        { imageUrl: require("../assets/images/Background3.jpg"), portraitUrl:require("../assets/images/Background3Portrait.jpg"), landscapeUrl:require("../assets/images/Background3Landscape.jpg"), alt: "Background 3" },
        { imageUrl: require("../assets/images/Background4.jpg"), portraitUrl:require("../assets/images/Background4Portrait.jpg"), landscapeUrl:require("../assets/images/Background4Landscape.jpg"), alt: "Background 1" },
        { imageUrl: require("../assets/images/Background5.jpg"), portraitUrl:require("../assets/images/Background5Portrait.jpg"), landscapeUrl:require("../assets/images/Background5Landscape.jpg"), alt: "Background 2" },
        { imageUrl: require("../assets/images/Background6.jpg"), portraitUrl:require("../assets/images/Background6Portrait.jpg"), landscapeUrl:require("../assets/images/Background6Landscape.jpg"), alt: "Background 3" },
        { imageUrl: require("../assets/images/Background7.jpg"), portraitUrl:require("../assets/images/Background7Portrait.jpg"), landscapeUrl:require("../assets/images/Background7Landscape.jpg"), alt: "Background 4" },
        { imageUrl: require("../assets/images/Background8.jpg"), portraitUrl:require("../assets/images/Background8Portrait.jpg"), landscapeUrl:require("../assets/images/Background8Landscape.jpg"), alt: "Background 5" },
        { imageUrl: require("../assets/images/Background9.jpg"), portraitUrl:require("../assets/images/Background9Portrait.jpg"), landscapeUrl:require("../assets/images/Background9Landscape.jpg"), alt: "Background 6" },
        { imageUrl: require("../assets/images/Background10.jpg"), portraitUrl:require("../assets/images/Background10Portrait.jpg"), landscapeUrl:require("../assets/images/Background10Landscape.jpg"), alt: "Background 7" },
        { imageUrl: require("../assets/images/Background11.jpg"), portraitUrl:require("../assets/images/Background11Portrait.jpg"), landscapeUrl:require("../assets/images/Background11Landscape.jpg"), alt: "Background 8" },
        { imageUrl: require("../assets/images/Background12.jpg"), portraitUrl:require("../assets/images/Background12Portrait.jpg"), landscapeUrl:require("../assets/images/Background12Landscape.jpg"), alt: "Background 9" },
        { imageUrl: require("../assets/images/Background13.jpg"), portraitUrl:require("../assets/images/Background13Portrait.jpg"), landscapeUrl:require("../assets/images/Background13Landscape.jpg"), alt: "Background 10" },
        { imageUrl: require("../assets/images/Background14.jpg"), portraitUrl:require("../assets/images/Background14Portrait.jpg"), landscapeUrl:require("../assets/images/Background14Landscape.jpg"), alt: "Background 11" },
        { imageUrl: require("../assets/images/Background15.jpg"), portraitUrl:require("../assets/images/Background15Portrait.jpg"), landscapeUrl:require("../assets/images/Background15Landscape.jpg"), alt: "Background 12" },
        { imageUrl: require("../assets/images/Background16.jpg"), portraitUrl:require("../assets/images/Background16Portrait.jpg"), landscapeUrl:require("../assets/images/Background16Landscape.jpg"), alt: "Background 13" },
        { imageUrl: require("../assets/images/Background17.jpg"), portraitUrl:require("../assets/images/Background17Portrait.jpg"), landscapeUrl:require("../assets/images/Background17Landscape.jpg"), alt: "Background 14" },
        { imageUrl: require("../assets/images/Background18.jpg"), portraitUrl:require("../assets/images/Background18Portrait.jpg"), landscapeUrl:require("../assets/images/Background18Landscape.jpg"), alt: "Background 15" },
        { imageUrl: require("../assets/images/Background19.jpg"), portraitUrl:require("../assets/images/Background19Portrait.jpg"), landscapeUrl:require("../assets/images/Background19Landscape.jpg"), alt: "Background 16" },
        { imageUrl: require("../assets/images/Background20.jpg"), portraitUrl:require("../assets/images/Background20Portrait.jpg"), landscapeUrl:require("../assets/images/Background20Landscape.jpg"), alt: "Background 17" },
        { imageUrl: require("../assets/images/Background21.jpg"), portraitUrl:require("../assets/images/Background21Portrait.jpg"), landscapeUrl:require("../assets/images/Background21Landscape.jpg"), alt: "Background 18" },
        { imageUrl: require("../assets/images/Background22.jpg"), portraitUrl:require("../assets/images/Background22Portrait.jpg"), landscapeUrl:require("../assets/images/Background22Landscape.jpg"), alt: "Background 19" },
        { imageUrl: require("../assets/images/Background23.jpg"), portraitUrl:require("../assets/images/Background23Portrait.jpg"), landscapeUrl:require("../assets/images/Background23Landscape.jpg"), alt: "Background 20" },
        { imageUrl: require("../assets/images/Background24.jpg"), portraitUrl:require("../assets/images/Background24Portrait.jpg"), landscapeUrl:require("../assets/images/Background24Landscape.jpg"), alt: "Background 21" },
        { imageUrl: require("../assets/images/Background25.jpg"), portraitUrl:require("../assets/images/Background25Portrait.jpg"), landscapeUrl:require("../assets/images/Background25Landscape.jpg"), alt: "Background 22" },
        { imageUrl: require("../assets/images/Background26.jpg"), portraitUrl:require("../assets/images/Background26Portrait.jpg"), landscapeUrl:require("../assets/images/Background26Landscape.jpg"), alt: "Background 23" },
        { imageUrl: require("../assets/images/Background27.jpg"), portraitUrl:require("../assets/images/Background27Portrait.jpg"), landscapeUrl:require("../assets/images/Background27Landscape.jpg"), alt: "Background 24" },
    ];
    
	const selectedBackgroundOption = backgroundOptions.find(option => 
		[option.imageUrl, option.portraitUrl, option.landscapeUrl].includes(selectedBackground));

	    const selectPortrait = (imageUrl: string, portraitUrl: string, landscapeUrl: string) => {
        if (selectedBackground === imageUrl || selectedBackground === landscapeUrl) {
          setSelectedBackground(portraitUrl);
          let selectedBackgroundElement = document.querySelector('.selected-background');
          if (selectedBackgroundElement) {
            selectedBackgroundElement.classList.remove('landscape');
            selectedBackgroundElement.classList.remove('square');
            selectedBackgroundElement.classList.add('portrait');
          }
        }
		}
		const selectLandscape = (imageUrl: string, portraitUrl: string, landscapeUrl: string) => {
			if (selectedBackground === imageUrl || selectedBackground === portraitUrl) {
        setSelectedBackground(landscapeUrl);
        let selectedBackgroundElement = document.querySelector('.selected-background');
        if (selectedBackgroundElement) {
          selectedBackgroundElement.classList.remove('portrait');
          selectedBackgroundElement.classList.remove('square');
          selectedBackgroundElement.classList.add('landscape');
        }
      }
		}
		const selectSquare = (imageUrl: string, portraitUrl: string, landscapeUrl: string) => {
			if (selectedBackground === portraitUrl || selectedBackground === landscapeUrl) {
        setSelectedBackground(imageUrl);
        let selectedBackgroundElement = document.querySelector('.selected-background');
        if (selectedBackgroundElement) {
          selectedBackgroundElement.classList.remove('portrait');
          selectedBackgroundElement.classList.remove('landscape');
          selectedBackgroundElement.classList.add('square');
        }
      }
		}
    
    const resetToSquare = () => {
      let selectedBackgroundElement = document.querySelector('.selected-background');
      if (selectedBackgroundElement) {
        selectedBackgroundElement.classList.remove('portrait');
        selectedBackgroundElement.classList.remove('landscape');
        selectedBackgroundElement.classList.add('square');
      }
    };
 

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

        <div className="col-sm-8">
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

        <div className="col-sm-2" id="background-settings">
          <p className="text-center" id="instructional-text">Position yourself using the arrows</p>

		  <div id="icon-cropper" className="container">
					<FontAwesomeIcon className="crop arrows" id="portrait" onClick={() => selectPortrait(selectedBackgroundOption!.imageUrl,
            selectedBackgroundOption!.portraitUrl,
            selectedBackgroundOption!.landscapeUrl)} icon={faImagePortrait}
            />

					<FontAwesomeIcon className="arrows" id= "landscape" onClick={() => selectLandscape(selectedBackgroundOption!.imageUrl, selectedBackgroundOption!.portraitUrl, selectedBackgroundOption!.landscapeUrl)} icon={faImage}/>
					<FontAwesomeIcon className="arrows" id= "square" onClick={() => selectSquare(selectedBackgroundOption!.imageUrl, selectedBackgroundOption!.portraitUrl, selectedBackgroundOption!.landscapeUrl)} icon={faSquare}/>
				</div>

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

          <div id="zoom-div" className="container">
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
            <br /> Images 
          </div>
        </div>
      </div>
      <canvas ref={canvasRef} style={{ display: "none" }} />
      <div></div>
    </div>
  );
};
export default BackgroundChoiceComponent;
