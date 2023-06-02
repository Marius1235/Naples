import { useContext } from "react";
import { CapturedImageContext } from "../contexts/CapturedImageContext";
import { useNavigate } from "react-router-dom";


const RemoveImageComponent = () => {
    const image = useContext(CapturedImageContext);
    const navigate = useNavigate();

    const startRemoveBackground = () => {
        if (image?.capturedImage && image.removeBackground) {
            image.removeBackground();
            navigate("noBackground")
        }
    }

    return(
        <div>
            <button onClick={startRemoveBackground}>Remove that background!</button>
        </div>
    )
}

export default RemoveImageComponent