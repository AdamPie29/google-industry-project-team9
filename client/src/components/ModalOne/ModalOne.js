import './ModalOne.scss'
import youtubeLogo from '../../assets/images/YouTube-White-Full-Color-Logo.wine.png'
import exit from '../../assets/images/Exit-Button.svg'

function ModalOne() {

    return (
            <div className='modal'>
                <div className='modal__container--dark'>
                    <img src={exit} alt='exit X' />
                    <div className='modal__content-container'>
                        <p className='modal__content'>Take a tour of </p>
                        <img className='modal__logo' src={youtubeLogo} alt='Youtube logo' />
                    </div>
                    <button className='modal__button'>Learn More</button>
                </div>
                <div className='modal__container--light'>
                    <div className='modal__content-container--light'>
                        <p className='modal__content'>See where you last left off </p>
                    </div>
                    <button className='modal__button--light'>Continue</button>
                </div>
            </div>
    )

}
export default ModalOne