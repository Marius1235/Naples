import LandingPageComponent from "../components/LandingPageComponent";
import "../css/LandingPage.css";

const LandingPage = () => {
  return (
    <div id="overflow">
      <LandingPageComponent />
      <svg
        id="animated-bg"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <defs>
          <style>.cls-1 {}</style>
        </defs>
        <path
          className="out-top"
          fill="#e15315"
          d="m60.5-18.5c-8.7,14.64-8.79,32.59,0,46,12.13,18.51,37.49,22.79,55,14,16.41-8.23,21.06-25.5,22-29,1.04-3.86,5.96-22.12-5-37-12.16-16.51-36.95-19.42-54-11-9.78,4.83-15.33,12.56-18,17Z"
        />
        <path
          className="in-top"
          fill="#e15315"
          d="m73.5,22.5c-9.67-11.61-8.89-28.62-1-40,1.04-1.5,9.21-12.88,24-14,13.25-1,26.29,6.64,32,19,5.22,11.31,3.41,24.64-4,34-7.95,10.04-19.31,11.69-22,12-1.44.17-18.31,1.83-29-11Z"
        />
        <path
          className="out-bottom"
          fill="#00635D"
          d="m-12.5,57.5c15.23-4.06,43.14-4.12,57,17,8.51,12.96,9.65,30.72,2,45-10.32,19.27-33.67,26.63-53,22-20.97-5.03-33.77-23.07-37-39-.88-4.35-2.7-13.99,2-24,7.12-15.17,23.78-19.61,29-21Z"
        />
        <path
          className="in-bottom"
          fill="#00635D"
          d="m-18.5,67.5c17.62-9.42,44.89-3.3,55,16,5.06,9.65,6.57,24.02-1,35-10.4,15.09-32.94,16.48-48,9-14.59-7.24-26.32-24.84-22-41,3.05-11.4,12.82-17.3,16-19Z"
        />
        <path
          className="in-bottom"
          fill="#00635D"
          d="m-18.5,67.5c17.62-9.42,44.89-3.3,55,16,5.06,9.65,6.57,24.02-1,35-10.4,15.09-32.94,16.48-48,9-14.59-7.24-26.32-24.84-22-41,3.05-11.4,12.82-17.3,16-19Z"
        />
      </svg>
      <div className="hexaTiles">
        <img
          id="tile-1"
          className="hexaTiles"
          src={require(`../assets/images/1.jpg`)}
          alt="1"
        />
        <img
          id="tile-2"
          className="hexaTiles"
          src={require(`../assets/images/download-2.jpg`)}
          alt="2"
        />
        <img
          id="tile-3"
          className="hexaTiles"
          src={require(`../assets/images/3.jpg`)}
          alt="3"
        />
        <img
          id="tile-4"
          className="hexaTiles"
          src={require(`../assets/images/4.jpg`)}
          alt="4"
        />
        <img
          id="tile-5"
          className="hexaTiles"
          src={require(`../assets/images/5.jpg`)}
          alt="5"
        />
        <img
          id="tile-6"
          className="hexaTiles"
          src={require(`../assets/images/6.jpg`)}
          alt="6"
        />
        <img
          id="tile-7"
          className="hexaTiles"
          src={require(`../assets/images/7.jpg`)}
          alt="7"
        />
        <img
          id="tile-8"
          className="hexaTiles"
          src={require(`../assets/images/8.jpg`)}
          alt="8"
        />
        <img
          id="tile-9"
          className="hexaTiles"
          src={require(`../assets/images/9.jpg`)}
          alt="9"
        />
      </div>
      <p className='text-center' id="under-text">
        Unleash your inner artist with our AI-powered Munchifier<br></br> 
        to transform a picture of yourself into a personalized Munch painting.</p> 
    </div>
  );
};

export default LandingPage;
