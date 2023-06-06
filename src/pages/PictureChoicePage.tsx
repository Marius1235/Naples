import ImageChoiceComponent from "../components/ImageChoiceComponent";
import RemoveImageComponent from "../components/RemoveBackgroundComponent";

// Displays the ImageChoiceComponent in a container and grid system.
// Add more comments here as more components are added // [CODEREVIEW]
const PictureChoicePage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm"></div>
                <div className="col-sm">
                    <ImageChoiceComponent />
                    <RemoveImageComponent />
                </div>
                <div className="col-sm"></div>
            </div>
        </div>
    );
};

export default PictureChoicePage;
