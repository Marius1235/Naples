import React, { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { CapturedImageContext } from "../contexts/CapturedImageContext";
import "../css/PreviewResultsPageComponent.css";

const PreviewResultsPageComponent = () => {
  let testImage = require("../assets/images/Background1.jpg");
  let imgRef = useRef<HTMLImageElement>(null);
  const [imgIsResized, setImgIsResized] = useState(false);
  // Image from context, after it is munchified
  const capturedImage = useContext(CapturedImageContext);
  const test = capturedImage?.munchifiedImages;
  console.log(test);

  let imgRef1 = useRef(null);
  let imgRef2 = useRef(null);
  let imgRef3 = useRef(null);
  let imgRef4 = useRef(null);
  let imgRef5 = useRef(null);
  // Function to enlarge image
  const enlargePicture = (
    imgRef: React.RefObject<HTMLImageElement>,
    src: string
  ) => {
    let img = imgRef.current;
    if (!imgIsResized) {
      // If image is not enlarged already scale it up.
      // scale image up
      img!.style.height = "65vh";
      img!.style.width = "65vh";
      // Animation effect
      img!.style.transition = "transform 0.25s ease";
      // Set z-index to 1
      img!.style.zIndex = "1";
      // Center image
      img!.style.position = "absolute";
      img!.style.transform = "translate(-50%, -50%)";
      img!.style.top = "50%";
      img!.style.left = "50%";

      // set border to 5px and solid
      img!.style.border = "5px solid white";
      capturedImage?.setCapturedImage(src);
      setImgIsResized(true);
    } // Reset image size to original
    else {
      img!.style.transition = "transform 0.25s ease";
      setImgIsResized(false);
      // Reset position
      img!.style.position = "static";
      // Reset size
      img!.style.height = "39vh";
      img!.style.width = "39vh";
      // Reset border
      img!.style.border = "none";
      // Reset z-index
      img!.style.zIndex = "0";
      // Reset transform translate
      img!.style.transform = "translate(0%, 0%)";
    }
  };

  return (
    <div className="container">
      <div className="row text-center">
        <div className="col" id="results-wrapper">
          <div id="choose-your-masterpiece">
            <h1>CHOOSE YOUR MASTERPIECE</h1>
          </div>

          {capturedImage?.munchifiedImages[0] && (
            <img
              src={capturedImage.munchifiedImages[0]}
              ref={imgRef1}
              onClick={() =>
                enlargePicture(imgRef1, capturedImage.munchifiedImages[0])
              }
              alt="Munchified Image 1"
            />
          )}

          {/* Result 2 */}
          {capturedImage?.munchifiedImages[1] && (
            <img
              src={capturedImage.munchifiedImages[1]}
              ref={imgRef2}
              onClick={() =>
                enlargePicture(imgRef2, capturedImage.munchifiedImages[1])
              }
              alt="Munchified Image 2"
            />
          )}

          {/* Result 3 */}
          {capturedImage?.munchifiedImages[2] && (
            <img
              src={capturedImage.munchifiedImages[2]}
              ref={imgRef3}
              onClick={() =>
                enlargePicture(imgRef3, capturedImage.munchifiedImages[2])
              }
              alt="Munchified Image 3"
            />
          )}

          {/* Result 4 */}
          {capturedImage?.munchifiedImages[3] && (
            <img
              src={capturedImage.munchifiedImages[3]}
              ref={imgRef4}
              onClick={() =>
                enlargePicture(imgRef4, capturedImage.munchifiedImages[3])
              }
              alt="Munchified Image 4"
            />
          )}

          {/* Result 5 */}
          {capturedImage?.munchifiedImages[4] && (
            <img
              src={capturedImage.munchifiedImages[4]}
              ref={imgRef5}
              onClick={() =>
                enlargePicture(imgRef5, capturedImage.munchifiedImages[4])
              }
              alt="Munchified Image 1"
            />
          )}
        </div>
      </div>
      {imgIsResized && (
        <Link to="/actionPage">
          <FontAwesomeIcon icon={faSquareCheck} id="next-icon" />
        </Link>
      )}
    </div>
  );
};

export default PreviewResultsPageComponent;
