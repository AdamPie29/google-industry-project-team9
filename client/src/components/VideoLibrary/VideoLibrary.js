import "./VideoLibrary.scss";
import VideoSingle from "../VideoSingle/VideoSingle";

function VideoLibrary({ videoData }) {
    console.log(videoData);
    return(
        <section className="video-library">
            {videoData.map(videoData => <VideoSingle
            key={videoData.id} 
            name={videoData.name} 
            id={videoData.id} 
            title={videoData.title}
            channel={videoData.channel}
            image={videoData.image}
            placeholder={videoData.placeholder}
            />)}
        </section>
    )
};

export default VideoLibrary;