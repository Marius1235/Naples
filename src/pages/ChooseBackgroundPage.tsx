import BackgroundChoiceComponent from "../components/BackgroundChoiceComponent"
import { Link } from "react-router-dom"
const ChooseBackgroundPage = () => {
    return(
        <div className="container">
            <BackgroundChoiceComponent/>
            <Link to="/actionPage">heihei</Link>
        </div>
    )
}

export default ChooseBackgroundPage