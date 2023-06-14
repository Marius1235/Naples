function EndingPageComponent() {
    return (
        <div>
            <h1 className='text-center' id="ending-title">Thank you for using The Munchifier!</h1>
            <img id="qr-code-image" src={require('../assets/images/qrCode.png')} alt="User feedback qr code"></img>
			<p id="qr-text">Scan the QR code to give feedback</p>   
        </div>
    );
}

export default EndingPageComponent;