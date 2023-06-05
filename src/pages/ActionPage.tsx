const ActionPage = () => {


    function handleClick() {
    
        // Send data to the backend via fetch
        fetch('http://127.0.0.1:3002/MunchifiedPicture')   // Enter your IP address here
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
      }

    return (
        <div onClick={handleClick} style={{
            textAlign: 'center',
            width: '100px',
            border: '1px solid gray',
            borderRadius: '5px' 
          }}>
            Send data to backend
        </div>
    );
};
export default ActionPage;