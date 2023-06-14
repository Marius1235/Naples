import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function EndingPageComponent() {
    return (
        <div id="parent-div">
            <h1 className='text-center' id="ending-title">Thank you for using The Munchifier!</h1>
            <img id="qr-code-image" src={require('../assets/images/qrCode.png')} alt="User feedback qr code"></img>
			<p id="qr-text">Scan the QR code to give feedback</p>   
            <Link to="/" className="text-center">
                <FontAwesomeIcon id="house-icon" icon={faHouse} />
            </Link>
        </div>
    );
}

export default EndingPageComponent;