import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CameraComponent from "../components/CameraComponent";


 
const TakePicturePage = () => {
    return (
        <div>
            <CameraComponent />
            <Link to="pictureChoice">Test</Link>
        </div>
    )
};
export default TakePicturePage;