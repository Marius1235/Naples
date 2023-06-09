// Imports:
import { useContext, useState } from "react";
import { CapturedImageContext } from "../contexts/CapturedImageContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'



// Component for ActionPage with the name of the art and the image 
// object
const ActionPageComponent = () => {
	// Image from context, after it is munchified
	const image = useContext(CapturedImageContext);
	
	console.log(image);
	var base64String = image?.capturedImage;

	base64String = base64String?.replace("data:image/png;base64,", "");
	

	const handleClick = async () => {
		// Get the image from the context
		

		// Send data to the backend via fetch

		const formData = new FormData();
		const imageBlob = await fetch(image?.capturedImage!).then(r => r.blob());
		const pictureName = (document.querySelector('#artNameText') as HTMLInputElement).value;
		formData.append('picture', imageBlob);
		formData.append('pictureName',pictureName);

		fetch('http://localhost:3001/MunchifiedPicture', {
			method: 'POST',
			body: formData
		})
		.then(response => response.json())
		.then(data => {
			console.log(data);
		})
		.catch(error => {
			console.error(error);
		});
		
		
		// fetch("http://localhost:3001/MunchifiedPicture", {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify({
		// 		"picture": base64String,
		// 	}),
		// })
		// .then((response) => response.json())
		// .then((data) => {
		// 	console.log(data);
		// })
		// .catch((error) => {
		// 	console.error(error);
		// });
		// Send data to the backend via fetch
		
	};
	
    return (
        // Grid layout for the page
		<div>
			<div className="container">
				<div className="row">
					<div className="col-sm-2">
					</div>
					<div className="col-sm-8 text-center">
						
						<h1>NAME YOUR ART</h1>
						<div className="form-group">
							<input type="text" id="artNameText"/>
							
						</div>
						{image?.capturedImage && (
								<img src={image.capturedImage} alt="Munchified Image" id="munchified-picture"/>
							)}
						{!image?.capturedImage && (
							<img id="upload-art-image" src={require(`../assets/images/placeholder.jpg`)} alt="Placeholder image"/>
						)}
						
						<h1 id="upload-btn" onClick={handleClick}>UPLOAD YOUR ART<FontAwesomeIcon icon={faCloudArrowUp}/></h1>
						{/* // POST to sql database goes here? */}
						<h5>And become a part of the virtual Munch art gallery</h5>
					</div>
					<div className="col-sm-2">
					</div>
				</div>
			</div>

			{/* Divs for the munch pictures */}
			<div className="container">
            <div className="row">
                <div className="col-sm-1 text-center">
					{/* Remember to animate to hidden/visible in css. */}
                    
                </div>

                <div className="col-sm-10 text-center">
					<img id="painting-1" className="munch-paintings" src={require(`../assets/images/skriket.jpg`)} alt="Skrik by Edvard Munch"  />
					<img id="painting-2" className="munch-paintings" src={require(`../assets/images/vampyren.jpg`)} alt="Vampyr av Edvard Munch" />
					<img id="painting-3" className="munch-paintings" src={require(`../assets/images/museet.jpg`)} alt="Munchmuseet" />
                </div>
                <div className="col-sm-1 text-center">
				<div>

        </div>

                </div>
            </div>
        </div>
	</div>
    );
};

export default ActionPageComponent;