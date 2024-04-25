import "./FeatureThumbnail.scss"

function FeatureThumbnail({thumbnailObj}) {
    const {icon, text, header} = thumbnailObj
    return (
        <div className='featureThumbnail init-card '>
            <div className="featureThumbnail_icon_container">
                <span className="featureThumbnail_header">{header}</span>
                <div className="featureThumbnail_icon">
                {icon}
                </div>
                <span className="featureThumbnail_text">
                {text}
            </span>
            </div>
            
        </div>
    );
}

export default FeatureThumbnail;