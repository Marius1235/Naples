import { useContext, useRef, useEffect } from "react";
import { CapturedImageContext } from "../contexts/CapturedImageContext";
import { useNavigate } from "react-router-dom";
import {
  faCaretSquareLeft,
  faDeleteLeft,
  faSquareCaretLeft,
  faSquareCheck,
  faSquareUpRight,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../src/css/RemoveBackgroundPage.css";

const RemoveImageComponent = () => {
  const image = useContext(CapturedImageContext);
  const navigate = useNavigate();
  const previousCapturedImageRef = useRef(image?.capturedImage);

  const startRemoveBackground = () => {
    if (image?.capturedImage && image.removeBackground) {
      image.removeBackground();
    }
  };

  useEffect(() => {
    if (image?.capturedImage !== previousCapturedImageRef.current) {
      navigate("/backgroundPage");
    }

    // Update the previousCapturedImageRef with the current capturedImage state
    previousCapturedImageRef.current = image?.capturedImage;
  }, [image?.capturedImage]);

  return (
    <div>
      <FontAwesomeIcon
        onClick={startRemoveBackground}
        className="remover-btn"
        icon={faSquareCheck}
      />
    </div>
  );
};

export default RemoveImageComponent;
