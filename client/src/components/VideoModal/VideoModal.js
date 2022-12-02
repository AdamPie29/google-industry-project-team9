import "./VideoModal.scss";
import {Link} from "react-router-dom";
import video from "../../assets/images/Video.svg";
import progress5 from "../../assets/images/progress5.svg";

function VideoModal () {

    return (
        <>
            <Link to={"/home6"} className="videomodal">
                <img className="videomodal__img" src={video} alt="video modal" />
            </Link>
            <img className="progressfuck" src={progress5} alt="" />
        </>
    )
}
export default VideoModal;