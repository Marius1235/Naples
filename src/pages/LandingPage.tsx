import { Link } from "react-router-dom"

const LandingPage = () => {
    return(
        <div className="container mt-5">
            <div className="row mt-5">
                <div className="col-sm mt-5">
                    <Link to="/picturePage">GO</Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;