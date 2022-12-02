import "./CompleteModal.scss";
import { Link } from "react-router-dom";
import completemod from "../../assets/images/completemod.svg";
import progress5 from "../../assets/images/progress5.svg";

function CompleteModal() {

    return (
        <Link to={"/home7"} className="completemodal">
            <img className="completemodal__img" src={completemod} alt="complete modal" />
            <img className="progress5" src={progress5} alt="" />
            <div className="overlay"></div>
        </Link>
    )
}
export default CompleteModal;