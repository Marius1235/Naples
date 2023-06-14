// Imports:
import { useContext, useState } from "react";
import { CapturedImageContext } from "../contexts/CapturedImageContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { BlobServiceClient } from "@azure/storage-blob";
import "../css/ActionPage.css";


// Component for ActionPage with the name of the art and the image 
// object
const ActionPageComponent = () => {
	// Image from context, after it is munchified
	const image = useContext(CapturedImageContext);
	
	console.log(image);
	var base64String = image?.capturedImage;

	base64String = base64String?.replace("data:image/png;base64,", "");
	
	const sendToDb = async (url:string, pictureName: string) => {
		const PictureURL = url;
		
		fetch("http://localhost:3001/MunchifiedPicture", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				"PictureURL": PictureURL,
				"PictureName": pictureName,
			}),
		})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.error(error);
		});
	};
		
		
	const handleClick = async () => {
		// Get the image from the context
		
		// Convert base64 string to Uint8Array
		let bytes;
		if (base64String) {
		bytes = new Uint8Array(
			atob(base64String)
			.split("")
			.map((char) => char.charCodeAt(0))
			);
		// rest of your code
		} else {
		// handle the case where base64String is undefined
			return;
		}
		// Create a blob service client
		const sasToken = process.env.storagesastoken || "sp=racw&st=2023-06-12T11:25:03Z&se=2023-07-31T19:25:03Z&sv=2022-11-02&sr=c&sig=jKQWgqZHYiXqzcDRqXegyDBVZckjrsGoQMG48UCxKxU%3D";
		const containerName = "fileuploads";
		const storageAccountName = process.env.storageresourcename || "munchimagesblob";
		const blobUrl = `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
		const blobService = new BlobServiceClient(blobUrl)
		// strip everything ecxept letters and numbers from pictureName to prevent sql injection
		let pictureName = (document.querySelector('#artNameText') as HTMLInputElement).value.replace(/[^a-zA-Z0-9]/g, "");
		if(pictureName === "") {
			pictureName = "unnamed" + Math.floor(Math.random() * 1000000);
		}
		
		// Get a reference to a container
		const containerClient = blobService.getContainerClient(containerName);
		
		// Get a block blob client
		const blockBlobClient = containerClient.getBlockBlobClient(pictureName);
		let urlName = `https://munchimagesblob.blob.core.windows.net/fileuploads/${pictureName}`
		if (bytes) {
			// Upload data to the blob
			await blockBlobClient.uploadData(bytes);
			// Send the url and name to the database
			sendToDb(urlName, pictureName);
		} else {
			// handle the case where bytes is undefined
			return;
		}
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
						
						<img id="qr-code-image" src={require('../assets/images/qrCode.png')} alt="User feedback qr code"></img>
						<p id="qr-text">Scan the QR code to give feedback</p>
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