import "./Menu.scss";
import menu from "../../assets/images/Menu.svg";
import { Link } from 'react-router-dom';
import menuIc from "../../assets/images/menuIc.png";
import progress3 from "../../assets/images/progress3.svg";

function Menu() {

    return (
        <>
            <Link to={"/home4"} className="menumodal">
                <img className="menumodal__img" src={menu} alt="menu modal" />
            </Link>
            <img className="progress3" src={progress3} alt="" />
            <div className="overlay"></div>
            
        </>
    )
}

export default Menu;