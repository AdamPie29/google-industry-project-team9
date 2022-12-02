import "./FirstModal.scss";
import {Link} from "react-router-dom";
import firstmodal from "../../assets/images/firstmodal.svg";

function FirstModal () {

    return (
        <Link to={"/home1"} className="firstmodal">
            <img className="firstmodal__img" src={firstmodal} alt="welcome back page" />
            <div className="overlay"></div>
        </Link>
    )
}

export default FirstModal;