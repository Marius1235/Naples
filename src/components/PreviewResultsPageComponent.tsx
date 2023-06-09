// Imports:
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useRef, useState } from "react";
import { CapturedImageContext } from "../contexts/CapturedImageContext";
import { Link } from "react-router-dom";
import '../css/PreviewResultsPageComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faSquareCheck, fas } from '@fortawesome/free-solid-svg-icons';


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
			// scale image up
			img.style.height = "65vh";
			img.style.width = "65vh";
			// Animation effect
			img.style.transition = "transform 0.25s ease";
			// Set z-index to 1
			img.style.zIndex = "1";
			// Center image
			img.style.position = "absolute";
			img.style.transform = "translate(-50%, -50%)";
			img.style.top = "50%";
			img.style.left = "50%";
			
			// set border to 5px and solid
			img.style.border = "5px solid white";

			setImgIsResized(true);
		}
		else // Reset image size to original
		{
			img.style.transition = "transform 0.25s ease";
			setImgIsResized(false);
			// Reset position
			img.style.position = "static";
			// Reset size
			img.style.height = "39vh";
			img.style.width = "39vh";
			// Reset border
			img.style.border = "none";
			// Reset z-index
			img.style.zIndex = "0";
			// Reset transform translate
			img.style.transform = "translate(0%, 0%)";
		}
	};
   
    return (
		<div className="container">
			<div className="row text-center">
				<div className="col" id="results-wrapper">
		
					<div id='choose-your-masterpiece' ><h1>CHOOSE YOUR MASTERPIECE</h1></div>
			
					{/* Result 1 */}
					{capturedImage?.capturedImage && (
						<img src={capturedImage.capturedImage} ref={imgRef} onClick={enlargePicture} alt="Munchified Image" />
					)}

					{/* Result 1 */}
					{testImage && (
						<img src={testImage} ref={imgRef} onClick={enlargePicture} alt="Munchified Image" />
					)}

						{/* Result 1 */}
						{testImage && (
						<img src={testImage} ref={imgRef} onClick={enlargePicture} alt="Munchified Image" />
					)}
						{/* Result 1 */}
						{testImage && (
						<img src={testImage} ref={imgRef} onClick={enlargePicture} alt="Munchified Image" />
					)}
						{/* Result 1 */}
						{testImage && (
						<img src={testImage} ref={imgRef} onClick={enlargePicture} alt="Munchified Image" />
					)}
						{/* Result 1 */}
						{testImage && (
						<img src={testImage} ref={imgRef} onClick={enlargePicture} alt="Munchified Image" />
					)}
					
				
					{/* Result 1 */}
					{capturedImage?.capturedImage && (
						<img src={capturedImage.capturedImage} ref={imgRef} onClick={enlargePicture} alt="Munchified Image" />
					)}
				
					{/* Result 1 */}
					{capturedImage?.capturedImage && (
						<img src={capturedImage.capturedImage} ref={imgRef} onClick={enlargePicture} alt="Munchified Image" />
					)}
				
				
					{/* Result 1 */}
					{capturedImage?.capturedImage && (
						<img src={capturedImage.capturedImage} ref={imgRef} onClick={enlargePicture} alt="Munchified Image" />
					)}
				
					{/* Renders the button if the image has been */}
				</div>
			</div>
			{imgIsResized && (
				<Link to="/actionPage">
					<FontAwesomeIcon icon={faSquareCheck} id='next-icon'/>
				</Link>
			)}
		</div>
    );
};

export default PreviewResultsPageComponent;