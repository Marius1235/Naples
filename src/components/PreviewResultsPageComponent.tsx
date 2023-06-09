// Imports:
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useRef, useState } from "react";
import { CapturedImageContext } from "../contexts/CapturedImageContext";
import { Link } from "react-router-dom";
import '../css/PreviewResultsPageComponent.css';

// Component for ActionPage with the name of the art and the image 
// object
const PreviewResultsPageComponent = () => {
    let testImage = require("../assets/images/Background1.jpg");
	let imgRef = useRef<HTMLImageElement>(null);
	const [imgIsResized, setImgIsResized] = useState(false);
	// Image from context, after it is munchified
	const capturedImage = useContext(CapturedImageContext);
	
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
   
    return (
		<div className="container">
			<div className="row text-center">
				<div className="col" id="image-wrapper-2">
					{/* Result 1 */}
					<div className="image-wrapper-2 mx-auto">
						{capturedImage?.capturedImage && (
							<img id="result-img-1" src={capturedImage.capturedImage} ref={imgRef} onClick={enlargePicture} alt="Munchified Image" />
						)}
						{testImage && (
							<img src={testImage} ref={imgRef} onClick={enlargePicture} alt="Munchified Image" />
						)}
					</div>
					{/* Renders the button if the image has been */}
					{imgIsResized && (
						<Link to="/ActionPage">
						<button>Go to ActionPage</button>
					</Link>
				)}
				</div>
			</div>
		</div>
    );
};

export default PreviewResultsPageComponent;