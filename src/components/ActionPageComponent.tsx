// Imports:
import { useContext } from "react";
import { CapturedImageContext } from "../contexts/CapturedImageContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'

// Component for ActionPage with the name of the art and the image 
// object
const ActionPageComponent = () => {
	// Image from context, after it is munchified
	var image = useContext(CapturedImageContext);
	let base64String = image;
	let base64Data = base64String.split(",")[1];
	

	const handleClick = async () => {
		// Get the image from the context
		

		// Send data to the backend via fetch
		
		
		fetch("http://localhost:3001/MunchifiedPicture", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				"picture": base64Data,
			}),
		})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.error(error);
		});
		// Send data to the backend via fetch
		
	};
	/*fetch("http://localhost:3001/MunchifiedPicture", {

	headers: {
		"Content-Type": "application/json",
		
	},
	})
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.error(error);
	});*/
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
							{image?.capturedImage && (
								<img src={image.capturedImage} alt="Munchified Image" />
							)}
						</div>
						<img id="upload-art-image" src={require(`../assets/images/placeholder.jpg`)} alt="Placeholder image"/>
						<h1 id="upload-btn" onClick={handleClick}>UPLOAD YOUR ART<FontAwesomeIcon icon={faCloudArrowUp}/></h1>
						{/* // POST to sql database goes here? */}
						
						{/* <button onClick={handleClick} style={{

							textAlign: 'center',
							width: '100px',
							border: '1px solid gray', 
							borderRadius: '5px' 
							}}>
							{ "Send data to backend"}
						</button> */}
						<h5>And upload your masterpiece to the virutal Munch art gallery</h5>
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
					

                </div>
            </div>
        </div>
	</div>
    );
};

export default ActionPageComponent;