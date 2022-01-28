import './navigation.sass';

import coffeeIcon from '../../assets/coffee_icon.svg';

const Navigation = ({footer}) => {
    if(footer) {
        return(
            <footer className='footer'>
            <nav className="footer__menu">
                <a href="!#" className="menu__item footer__menu__item">Coffee house</a>
                <a href="!#" className="menu__item footer__menu__item">Our coffee</a>
                <a href="!#" className="menu__item footer__menu__item">For your pleasure</a>
            </nav>
            <div className="lines-element"></div>
            <img src={coffeeIcon} alt="Coffee icon" className="icon" />
        </footer>
        )
    } else {
        return(
            <nav className="menu">
                <a href="!#" className="menu__item">Coffee house</a>
                <a href="!#" className="menu__item">Our coffee</a>
                <a href="!#" className="menu__item">For your pleasure</a>
            </nav>
        )
    }
}

export default Navigation;