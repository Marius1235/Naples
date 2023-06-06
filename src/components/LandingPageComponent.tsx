// Imports:
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const LandingPageComponent = () => {

    return(
        <div className="container mt-5">
            <div className="row mt-5">
                <div className="col-sm mt-5">
                    <Link to="/picturePage"><h1>ENTER THE MUNCHIVERSE</h1></Link>
                    {/* Style link: Should be "Munch-Pink", no Underline, on hover -> white. */}
                    <h5>Use our Munch-AI to transform your picture into a personalized Munch painting.</h5>
                </div>
            </div>
        </div>
    );
};

export default LandingPageComponent;