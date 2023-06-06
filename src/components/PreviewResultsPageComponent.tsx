// Imports:
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useRef, useState } from "react";
import { CapturedImageContext } from "../contexts/CapturedImageContext";
import { Link } from "react-router-dom";

// Component for ActionPage with the name of the art and the image 
// object
const PreviewResultsPageComponent = () => {
    
	let imgRef = useRef<HTMLImageElement>(null);
	const [imgIsResized, setImgIsResized] = useState(false);
	
	// Function to enlarge image
	const enlargePicture = () => {
		let img = imgRef.current as HTMLImageElement;
		if(!imgIsResized) { // If image is not enlarged already scale it up.
			// Set image size to 1.5 times original
			img.style.transform = "scale(1.5)";
			// Animation effect
			img.style.transition = "transform 0.25s ease";
			setImgIsResized(true);
		}
		else // Reset image size to original
		{
			img.style.transform = "scale(1)";
			img.style.transition = "transform 0.25s ease";
			setImgIsResized(false);
		}
	};

    // Image from context, after it is munchified
    const capturedImage = useContext(CapturedImageContext);
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm">
                        {/* Result 1 */}
                        {capturedImage?.capturedImage && (
								<img src={capturedImage.capturedImage} ref={imgRef} onClick={enlargePicture} alt="Munchified Image" />
						)}
						{/* Renders the button if the image has been */}
                        {imgIsResized && (
						<Link to="/ActionPage">
							<button>Go to ActionPage</button>
						</Link>
					)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreviewResultsPageComponent;