// Imports:
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

// Component for LandingPage, links to PicturePage
const LandingPageComponent = () => {

    return(
        <div className="container mt-5">
            <div className="row mt-5">
                <div className="col-sm mt-">
                    <Link to="/picturePage" className="text-center"><h1>ENTER THE MUNCHIVERSE
                    <p>Unleash your inner artist with our AI-powered Munchifier to transform a picture of yourself 
                        into a personalized Munch painting.</p></h1>
                    </Link>                    
                </div>
            </div>
        </div>
    );
};

export default LandingPageComponent;