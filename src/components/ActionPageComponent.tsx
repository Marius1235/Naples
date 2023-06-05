// Imports:
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import { CapturedImageContext } from "../contexts/CapturedImageContext";


// Component for ActionPage with the name of the art and the image 
// object
const ActionPageComponent = () => {
	// Image from context, after it is munchified
	const capturedImage = useContext(CapturedImageContext);
	
	const handleClick = async () => {
		// Send data to the backend via fetch
		fetch('http://127.0.0.1:3002/MunchifiedPicture')   // Enter your IP address here
		.then(response => response.json())
		.then(data => console.log(data))
		.catch(error => console.error(error));
	};
    return (
        // Grid layout for the page
		<div>
			<div className="container mt-5">
				<div className="row">
					<div className="col-sm">
					</div>
					<div className="col-sm mt-5">
						
						<h1>NAME YOUR ART</h1>
						<div className="form-group">
							<input type="text" id="artNameText"/>
							{capturedImage?.capturedImage && (
								<img src={capturedImage.capturedImage} alt="Munchified Image" />
							)}
						</div>
						<h1>UPLOAD YOUR ART</h1>
						{/* // POST to sql database goes here? */}
						
						<div onClick={handleClick} style={{
							textAlign: 'center',
							width: '100px',
							border: '1px solid gray', 
							borderRadius: '5px' 
							}}>
							{/* Send data to backend */}
						</div>
						<h5>And upload your masterpiece to the virutal Munch art gallery</h5>
					</div>
					<div className="col-sm">
					</div>
				</div>
			</div>

			{/* Divs for the munch pictures */}
			<div className="container mt-5">
            <div className="row">
                <div className="col-sm">
					{/* Remember to animate to hidden/visible in css. */}
                    <img src={require(`../assets/images/skriket.jpg`)} alt="Skrik by Edvard Munch" />
                </div>
                <div className="col-sm">
					<img src={require(`../assets/images/vampyren.jpg`)} alt="Vampyr av Edvard Munch"/>
                </div>
                <div className="col-sm">
					<img src={require(`../assets/images/museet.jpg`)} alt="Munchmuseet"/>

                </div>
            </div>
        </div>
	</div>
    );
};

export default ActionPageComponent;