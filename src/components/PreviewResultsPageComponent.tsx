// Imports:
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import { CapturedImageContext } from "../contexts/CapturedImageContext";


// Component for ActionPage with the name of the art and the image 
// object
const PreviewResultsPageComponent = () => {

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm">
                        {/* Result 1 */}
                        
                    </div>
                    <div className="col-sm">
                        {/* Result 2 */}
                        
                    </div>
                    <div className="col-sm">
                        {/* Result 3 */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreviewResultsPageComponent;