import "./LastWatch.scss";
import {Link} from "react-router-dom";
import lastwatch from "../../assets/images/lastwatch.png";

function LastWatch () {

    return (
        <>
            <Link to={"/home8"} className="lastwatchmodal">
                <img className="lastwatchmodal__img" src={lastwatch} alt="last video modal" />
            </Link>
            <div className="overlay"></div>
        </>
        
    )
}
export default LastWatch;