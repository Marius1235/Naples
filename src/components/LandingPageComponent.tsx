// Imports:
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/LandingPage.css';
import { Link } from 'react-router-dom';

// Component for LandingPage, links to PicturePage
const LandingPageComponent = () => {

    return(
        <div className="container mt-5">
            <div className="row mt-5">
                <div className="col-sm" id='text-wrapper'>
                    <Link to="/picturePage" className="text-center"><h1>ENTER THE MUNCHIVERSE</h1>
                    <p className='text-center'>Unleash your inner artist with our AI-powered Munchifier to transform a picture of yourself 
                        into a personalized Munch painting.</p> </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPageComponent;