import { useContext } from "react";
import { CapturedImageContext } from "../contexts/CapturedImageContext";
import { useNavigate } from "react-router-dom";


const RemoveImageComponent = () => {
    const image = useContext(CapturedImageContext);
    const navigate = useNavigate();

    const startRemoveBackground = () => {
        if (image?.capturedImage && image.removeBackground) {
            image.removeBackground();
            setTimeout(() => {
                navigate("/backgroundPage");
              }, 200);     
        }
    }

    return(
        <div>
            <button onClick={startRemoveBackground}>Remove background</button>
        </div>
    )
}

export default RemoveImageComponent