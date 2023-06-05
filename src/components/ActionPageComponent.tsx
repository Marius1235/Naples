// Imports:
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import { CapturedImageContext } from "../contexts/CapturedImageContext";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

// Component for ActionPage with the name of the art and the image 
// object
const ActionPageComponent = () => {
	// Image from context, after it is munchified
	const capturedImage = useContext(CapturedImageContext);

    return (
        // Grid layout for the page
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
					
					
					<h5>And upload your masterpiece to the virutal Munch art gallery</h5>
					
                </div>
                <div className="col-sm">
                </div>
            </div>
        </div>
		
    );
};

// Export for use in pages

/*
// Import axios for making HTTP requests
import axios from 'axios';

// Define a function to post the art name and image to the database
const postArt = async () => {
  // Get the art name from the input element
  const artName = document.getElementById("artNameText").value;
  // Get the image data from the context
  const imageData = capturedImage?.capturedImage;
  // Check if both are valid
  if (artName && imageData) {
    // Create a form data object to send the data as multipart/form-data
    const formData = new FormData();
    // Append the art name and image data to the form data
    formData.append("artName", artName);
    formData.append("imageData", imageData);
    // Make a POST request to the database endpoint with the form data
    try {
      const response = await axios.post("/api/database", formData);
      // Handle the response
      if (response.status === 200) {
        // Success
        console.log("Art posted successfully");
      } else {
        // Error
        console.error("Art posting failed");
      }
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  } else {
    // Invalid input
    console.warn("Please enter a valid art name and image");
  }
};



*/
export default ActionPageComponent;