import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

import CoffeeList from '../../coffeeList/CoffeeList';
import ErrorBoundary from '../../errorBoundary/ErrorBoundary';

import './mainPage.sass';

import coffeeIconWhite from '../../../assets/coffee_icon_white.svg';
import coffeeIcon from '../../../assets/coffee_icon.svg';


const MainPage = () => {
    return(
        <div className="mainpage">
            <Helmet>
                <meta
                name="description"
                content="Coffee for your pleasure"
                />
                <title>Coffee for your pleasure</title>
            </Helmet>
            <section className="promo">
                <h1 className="title">Everything You Love About Coffee</h1>
                <div className="lines-element lines-element_white"></div>
                <img src={coffeeIconWhite} alt="Coffee icon" className="promo__icon" />
                <h2 className="title title_white">
                We makes every day full of energy and taste
                <br />
                Want to try our beans?</h2>
                <Link to="/coffee" className="btn">More</Link>
            </section>
            
            <section className="mainpage__about">
                <h2 className="title">About Us</h2>
                <div className="lines-element"></div>
                <img src={coffeeIcon} alt="Coffee icon" className="mainpage__about__icon" />
                <p className="mainpage__about__descr">
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.
                <br/>
                <br/>
                Now residence dashwoods she excellent you. Shade being under his bed her, Much
                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                horrible but confined day end marriage. Eagerness furniture set preserved far
                recommend. Did even but nor are most gave hope. Secure active living depend son
                repair day ladies now.
                </p>
            </section>

            <section className="our-best">
                <h2 className="title">Our best</h2>
                <ErrorBoundary>
                    <CoffeeList bestCoffee/>
                </ErrorBoundary>
            </section>
        </div>
        )
    }

export default MainPage;