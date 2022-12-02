import "./Settings.scss";
import settings from "../../assets/images/Settings.svg";
import { Link } from 'react-router-dom';
import mohan from "../../assets/images/mohan.png";
import progress4 from "../../assets/images/progress4.svg";

function Settings () {

    return (
        <>
            <Link to={"/home5"} className="settingmodal">
                <img className="settingmodal__img" src={settings} alt="settings modal" />
            </Link>
            <img className='mohan' src={mohan} alt="" />
            <img className='progress4' src={progress4} alt="" />
            <div className='overlay'></div>
        </>
        

    )
}
export default Settings;
