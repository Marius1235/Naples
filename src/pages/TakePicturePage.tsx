import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CameraComponent from "../components/CameraComponent";


 
const TakePicturePage = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm">
                    
                </div>
                <div className="col-sm mt-5">
                    <CameraComponent />  
                </div>
                <div className="col-sm">
                    
                </div>
            </div>
        </div>
    )
};
export default TakePicturePage;