import { Link } from "react-router-dom";

import './navigation.sass';

import coffeeIcon from '../../assets/coffee_icon.svg';

const Navigation = ({footer}) => {
    const smoothScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    if(footer) {
        return(
            <footer className='footer'>
            <nav className="footer__menu">
                <Link to="/" onClick={smoothScroll} className="menu__item footer__menu__item">Coffee house</Link>
                <Link to="/coffee" onClick={smoothScroll} className="menu__item footer__menu__item">Our coffee</Link>
                <Link to="/pleasure" onClick={smoothScroll} className="menu__item footer__menu__item">For your pleasure</Link>
            </nav>
            <div className="lines-element"></div>
            <img src={coffeeIcon} alt="Coffee icon" className="icon" />
        </footer>
        )
    } else {
        return(
            <nav className="menu">
                <Link to="/" className="menu__item">Coffee house</Link>
                <Link to="/coffee" className="menu__item">Our coffee</Link>
                <Link to="/pleasure" className="menu__item">For your pleasure</Link>
            </nav>
        )
    }
}

export default Navigation;