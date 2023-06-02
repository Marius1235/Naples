import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { CapturedImageContext } from "../contexts/CapturedImageContext";
import TakePicturePage from "./TakePicturePage";
import { useContext } from "react";

const RemovedBackgroundPage = () => {
    const image = useContext(CapturedImageContext);

    return (
        <div>
            {image?.capturedImage && (
                <img src={image.capturedImage} alt="Background removed" />
            )}
            <Link to="/">Restart</Link>
        </div>
    )
}

export default RemovedBackgroundPage;