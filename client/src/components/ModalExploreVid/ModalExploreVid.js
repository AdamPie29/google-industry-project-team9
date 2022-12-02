import "./ModalExploreVid.scss";
import explore from "../../assets/images/Explore.svg";
import {Link} from "react-router-dom";
import exploreside from "../../assets/images/Explore2.svg";
import explorebar from "../../assets/images/explorebar.png";
import exploresidebar from "../../assets/images/exploresidebar.png";
import progress2 from "../../assets/images/Progress2.svg";

function ModalExploreVid () {

    
    return (
        <>
           
            <Link to={"/home3"}>
                <div className="modalexplorevid">
                    <img className="modalexplorevid__img" src={explore} alt="search bubble" />
                </div>
                <div className="overlay"></div>
            </Link>
            <Link to={"/home3"}>
                <div className="modalexploreside">
                    <img className="modalexploreside__img" src={exploreside} alt="search bubble" />
                </div>
            </Link>
            <img className="exploresidebar" src={exploresidebar} alt="" />
            <img className="explorebar" src={explorebar} alt="" />
            <img className="progress2" src={progress2} alt="" />
            <div className="overlay"></div>
        </>
    )
}

export default ModalExploreVid;