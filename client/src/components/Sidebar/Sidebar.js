import './Sidebar.scss'
import home from '../../assets/images/home-2-48.png'
import shorts from '../../assets/images/letter-s-48.png'
import subscriptions from '../../assets/images/video-play-2-48.png'
import library from '../../assets/images/library-48.png'
import clock from '../../assets/images/clock-3-48.png'
import yourVideos from '../../assets/images/play-8-48.png'
import likes from '../../assets/images/thumb-up-48.png'
import flame from '../../assets/images/fire-2-48.png'
import musicNote from '../../assets/images/note-48.png'
import movies from '../../assets/images/movies-48.png'
import live from '../../assets/images/marine-radio-48.png'
import joystick from '../../assets/images/joystick-2-48.png'
import news from '../../assets/images/newspaper-48.png'
import trophy from '../../assets/images/trophy-48.png'
import learning from '../../assets/images/lightbulb-2-48.png'
import shoe from '../../assets/images/shoe-48.png'


function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__container'>
                <div className='sidebar__link-container'>
                    <img className='sidebar__icon' src={home} alt='white house'/>
                    <p className='sidebar__link'>Home</p>
                </div>
                <div className='sidebar__link-container'>
                    <img className='sidebar__icon' src={shorts} alt='s'/>
                    <p className='sidebar__link'>Shorts</p>
                </div>
                <div className='sidebar__link-container'>
                    <img className='sidebar__icon' src={subscriptions} alt='subscription'/>
                    <p className='sidebar__link'>Subscriptions</p>
                </div>
            </div>
            <div className='sidebar__container'>
                <div className='sidebar__link-container'>
                    <img className='sidebar__icon' src={library} alt='library'/>
                    <p className='sidebar__link'>Library</p>
                </div>
                <div className='sidebar__link-container'>
                    <img className='sidebar__icon' src={clock} alt='clock'/>
                    <p className='sidebar__link'>History</p>
                </div>
                <div className='sidebar__link-container'>
                    <img className='sidebar__icon' src={yourVideos} alt='play button'/>
                    <p className='sidebar__link'>Your videos</p>
                </div>
                <div className='sidebar__link-container'>
                    <img className='sidebar__icon' src={clock} alt='clock'/>
                    <p className='sidebar__link'>Watch later</p>
                </div>
                <div className='sidebar__link-container'>
                    <img className='sidebar__icon' src={likes} alt='thumbs up'/>
                    <p className='sidebar__link'>Liked videos</p>
                </div>
            </div>
            <div className='sidebar__container'>
                <h1 className='sidebar__heading'>Explore</h1>
                <div className='sidebar__link-container'>
                    <img className='sidebar__icon' src={flame} alt='flame'/>
                    <p className='sidebar__link'>Trending</p>
                </div>
                <div className='sidebar__link-container'>
                    <img className='sidebar__icon' src={musicNote} alt='music note'/>
                    <p className='sidebar__link'>Music</p>
                </div>
                <div className='sidebar__link-container'>
                    <img className='sidebar__icon' src={movies} alt='film'/>
                    <p className='sidebar__link'>Movies & Shows</p>
                </div>
                <div className='sidebar__link-container'>
                    <img className='sidebar__icon' src={live} alt='lightbulb'/>
                    <p className='sidebar__link'>Live</p>
                </div>
                <div className='sidebar__link-container'>
                    <img className='sidebar__icon' src={joystick} alt='joystick'/>
                    <p className='sidebar__link'>Gaming</p>
                </div>
                <div className='sidebar__link-container'>
                    <img className='sidebar__icon' src={news} alt='newspaper'/>
                    <p className='sidebar__link'>News</p>
                </div>
                <div className='sidebar__link-container'>
                    <img className='sidebar__icon' src={trophy} alt='trophy'/>
                    <p className='sidebar__link'>Sports</p>
                </div>
                <div className='sidebar__link-container'>
                    <img className='sidebar__icon' src={learning} alt='lightbulb'/>
                    <p className='sidebar__link'>Learning</p>
                </div>
                <div className='sidebar__link-container'>
                    <img className='sidebar__icon' src={shoe} alt='high heel shoe'/>
                    <p className='sidebar__link'>Fashion & Beauty</p>
                </div>
            </div>
        </div>
    )
}
export default Sidebar