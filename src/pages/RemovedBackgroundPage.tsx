import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { CapturedImageContext } from "../contexts/CapturedImageContext";
import TakePicturePage from "./TakePicturePage";
import { useContext } from "react";

const RemovedBackgroundPage = () => {
	const image = useContext(CapturedImageContext);

	return (
	<div className="container mt-5">
		<div className="row">
			<div className="col-sm"></div>
				<div className="col-sm mt-5">
					{image?.capturedImage && (
					<img src={image.capturedImage} alt="Background removed" />
					)}
					<Link to="">Restart</Link>
				</div>
			<div className="col-sm"></div>
		</div>
	</div>
	);
};

export default RemovedBackgroundPage;
