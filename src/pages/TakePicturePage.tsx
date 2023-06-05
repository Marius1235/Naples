import "bootstrap/dist/css/bootstrap.min.css";
import CameraComponent from "../components/CameraComponent";
import BackgroundChoiceComponent from "../components/BackgorundChoiceComponent";
 
// Displays the CameraComponent in a container and grid system.
// Add more comments here as more components are added // [CODEREVIEW]
const TakePicturePage = () => {
    return (
        <div className="container mt-5">
            <BackgroundChoiceComponent/>
        </div>
    )
};

export default TakePicturePage;