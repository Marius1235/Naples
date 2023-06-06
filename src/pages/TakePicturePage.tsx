import "bootstrap/dist/css/bootstrap.min.css";
import CameraComponent from "../components/CameraComponent";
import BackgroundChoiceComponent from "../components/BackgroundChoiceComponent";
 
// Displays the CameraComponent in a container and grid system.
// Add more comments here as more components are added // [CODEREVIEW]
const TakePicturePage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    
                </div>
                <div className="col-sm">
                    <CameraComponent/>
                </div>
                <div className="col-sm">
                </div>
            </div>
        </div>
    )
};

export default TakePicturePage;