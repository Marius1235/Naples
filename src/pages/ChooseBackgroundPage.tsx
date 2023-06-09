import BackgroundChoiceComponent from "../components/BackgroundChoiceComponent"
import { Link } from "react-router-dom"

// Includes the component for the background choice page
const ChooseBackgroundPage = () => {
    return(
        <div className="container">
            <BackgroundChoiceComponent/>
            <Link to="/previewResultsPage">heihei</Link>
        </div>
    )
}

export default ChooseBackgroundPage