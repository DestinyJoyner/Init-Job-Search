import "./FeatureThumbnail.scss"

function FeatureThumbnail(props) {
    return (
        <div className='featureThumbnail grid-center'>
            <div className="featureThumbnail_icon_container grid-center">
                <div className="featureThumbnail_icon">
                image
                </div>
            </div>
            <span className="featureThumbnail_text">
                text
            </span>
        </div>
    );
}

export default FeatureThumbnail;