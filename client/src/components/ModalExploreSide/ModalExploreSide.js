import "./ModalExploreSide.scss";
import {Link} from "react-router-dom";
import searchModal from "../../assets/images/SearchModal.svg";

function ModalExploreSide () {

    return (
        <div>
            <Link to={"/home3"}>
                <div className="search-modal">
                    <img src={searchModal} alt="search bubble" />
                </div>
                <div className="overlay"></div>
            </Link>
        </div>
        
    )
}

export default ModalExploreSide;