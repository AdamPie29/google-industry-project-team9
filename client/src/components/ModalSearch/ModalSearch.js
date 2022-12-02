import "./ModalSearch.scss";
import searchModal from "../../assets/images/SearchModal.svg";
import { Link } from 'react-router-dom';
import clearbar from "../../assets/images/clearbar.png";
import progress from "../../assets/images/Progress.svg";
import searchbar from "../../assets/images/searchbar.png";


function ModalSearch () {
    
    return (
        <>
            <Link to={"/home2"} className="searchmodal">
                <img className="searchbar" src={searchbar} alt="" />
                <img className="searchmodal__img" src={searchModal} alt="search modal" />
                <img className="progress" src={progress} alt="progress"/>
                <div className='overlay'></div>
            </Link>
        </>
        
    )
}

export default ModalSearch;