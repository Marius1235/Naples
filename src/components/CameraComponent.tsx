const cameraComponent = () => {
  navigator.mediaDevices.getUserMedia({ video: true })
  .then((stream: MediaStream) => {
  })
  .catch((error: Error) => {
    console.error('Error accessing camera:', error);
  });
}

export default cameraComponent;