import "./FeatureThumbnail.scss"

function FeatureThumbnail({thumbnailObj}) {
    const {icon, text} = thumbnailObj
    return (
        <div className='featureThumbnail grid-center'>
            <div className="featureThumbnail_icon_container grid-center">
                <div className="featureThumbnail_icon">
                {icon}
                </div>
            </div>
            <span className="featureThumbnail_text">
                {text}
            </span>
        </div>
    );
}

export default FeatureThumbnail;