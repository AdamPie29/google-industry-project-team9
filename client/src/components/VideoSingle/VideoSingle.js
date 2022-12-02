import "./VideoSingle.scss";

function VideoSingle({image, title, channel, placeholder}) {

    return (
        <div className="video-single grow">
            <div className="video-single__item">
                <img className="video-single__item-thumbnail" src={image} alt="video thumbnail" />
                <div className="video-single__item-info">
                    <img className="video-single__item-info-placeholder" src={placeholder} alt='channel icon' />
                    <div className="video-single__item-info-vid">
                        <p className="video-single__item-info-vid-title">{title}</p>
                        <p className="video-single__item-info-vid-channel">{channel}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoSingle;
