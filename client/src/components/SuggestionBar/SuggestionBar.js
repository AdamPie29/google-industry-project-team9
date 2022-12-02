import './SuggestionBar.scss'
import leftChevron from '../../assets/images/arrow-25-48.png'

function SuggestionBar() {
    return(
        <div className='suggestion-bar'>
            <div className='suggestion-bar__container--all'>
                <p className='suggestion-bar__content--all'>All</p>
            </div>
            <div className='suggestion-bar__container'>
                <p className='suggestion-bar__content'>Music</p>
            </div>
            <div className='suggestion-bar__container'>
                <p className='suggestion-bar__content'>TV</p>
            </div>
            <div className='suggestion-bar__container'>
                <p className='suggestion-bar__content'>Movies</p>
            </div>
            <div className='suggestion-bar__container'>
                <p className='suggestion-bar__content'>History</p>
            </div>
            <div className='suggestion-bar__container'>
                <p className='suggestion-bar__content'>News</p>
            </div>
            <div className='suggestion-bar__container'>
                <p className='suggestion-bar__content'>Radio</p>
            </div>
            <div className='suggestion-bar__container'>
                <p className='suggestion-bar__content'>Watched</p>
            </div>
            <div className='suggestion-bar__container'>
                <p className='suggestion-bar__content'>New to you</p>
            </div>
            <div className='suggestion-bar__container'>
                <p className='suggestion-bar__content'>Recently Upload</p>
            </div>
            <img className='suggestion-bar__chevron'src={leftChevron}/>
        </div>
    )
}
export default SuggestionBar