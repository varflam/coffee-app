import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import './navigation.sass';

import coffeeIcon from '../../assets/coffee_icon.svg';

const Navigation = ({footer}) => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    if(footer) {
        return <Footer/>
    } 
    
    return(
        <nav className="menu">
            <Link to="/" className="menu__item">Coffee house</Link>
            <Link to="/coffee" className="menu__item">Our coffee</Link>
            <Link to="/pleasure" className="menu__item">For your pleasure</Link>
        </nav>
    )
}

const Footer = () => {
    return(
        <footer className='footer'>
        <nav className="footer__menu">
            <Link to="/" className="menu__item footer__menu__item">Coffee house</Link>
            <Link to="/coffee" className="menu__item footer__menu__item">Our coffee</Link>
            <Link to="/pleasure" className="menu__item footer__menu__item">For your pleasure</Link>
        </nav>
        <div className="lines-element"></div>
        <img src={coffeeIcon} alt="Coffee icon" className="icon" />
    </footer>
    )
}

export default Navigation;