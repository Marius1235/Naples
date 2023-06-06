// Imports:
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import { CapturedImageContext } from "../contexts/CapturedImageContext";



// Component for ActionPage with the name of the art and the image 
// object
const PreviewResultsPageComponent = () => {

    const enlargePicture = () => {
        // Enlarge picture

    };
    // Image from context, after it is munchified
    const capturedImage = useContext(CapturedImageContext);
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm">
                        {/* Result 1 */}
                        {/* {capturedImage?.capturedImage && (
								<img src={capturedImage.capturedImage} alt="Munchified Image" />
						)} */}
                        <img src={require(`../assets/images/skriket.jpg`)} alt="Skrik by Edvard Munch" />
                        Results 1
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreviewResultsPageComponent;