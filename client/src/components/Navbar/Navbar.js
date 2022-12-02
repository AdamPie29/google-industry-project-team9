import "./Navbar.scss";
import menu from "../../assets/images/menu-4-48.png";
import youtubeIcon from "../../assets/images/youtubeicon1.png";
import microphone from "../../assets/images/microphone-3-48.png";
import camera from "../../assets/images/video-call-48.png";
import bell from "../../assets/images/bell-2-48.png";
import mohan from "../../assets/images/Mohan-muruge.jpg";

function Navbar() {

    return (
        <div className="navbar">
            <div className="navbar__left">
                <img className="navbar__menu" src={menu} alt="menu stripes" />
                <img className="navbar__play" src={youtubeIcon} alt="youtube play button" />
                <form type="text">
                    <input id="input" name="input" className="navbar__search" placeholder="Search"></input>
                </form> 
                <img className="navbar__mic" src={microphone} alt="microphone" />
            </div>
            
            
            <div className="navbar__right">
                <img className="navbar__cam" src={camera} alt="camera" />
                <img className="navbar__bell" src={bell} alt="bell" />
                <img className="navbar__usericon" src={mohan} alt="user icon" />  
            </div>
            
            


        </div>
    )
}

export default Navbar;