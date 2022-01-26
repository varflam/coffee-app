import coffeeIcon from '../../assets/coffee_icon.svg';

import './appFooter.sass';

const AppFooter = () => {
    return(
        <footer className='footer'>
            <nav className="footer__menu">
                <a href="!#" className="footer__menu__item">Coffee house</a>
                <a href="!#" className="footer__menu__item">Our coffee</a>
                <a href="!#" className="footer__menu__item">For your pleasure</a>
            </nav>
            <div className="hidden"></div>
            <img src={coffeeIcon} alt="Coffee icon" className="footer__icon" />
        </footer>
    )
}

export default AppFooter;