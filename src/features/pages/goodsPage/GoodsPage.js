import {Helmet} from "react-helmet";

import CoffeeList from "../../coffeeList/CoffeeList";
import ErrorBoundary from '../../errorBoundary/ErrorBoundary';

import './goodsPage.sass';

import img from '../../../assets/forYourPleasurePage/aboutOurGoals.png';
import beanIcon from '../../../assets/coffee_icon.svg';

const GoodsPage = () => {
    return(
        <div className="goods-page">
            <Helmet>
                <meta
                name="description"
                content="Our coffee"
                />
                <title>For your pleasure</title>
            </Helmet>
            <header className="header">
                <h1 className="title">For your pleasure</h1>
            </header>
            <div className="about">
                <img src={img} alt="About our beans" className="about__img" />
                <div className="about__info">
                    <h2 className="title">About our goods</h2>
                    <div className="lines-element"></div>
                    <img src={beanIcon} alt="About Goods" />
                    <div className="about__descr">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    <br/>
                    <br/>
                    Afraid at highly months do things on at. Situation recommend objection do intention <br/>
                    so questions. <br/>
                    As greatly removed calling pleased improve an. Last ask him cold feel <br/>
                    met spot shy want. Children me laughing we prospect answered followed. At it went <br/>
                    is song that held help face.
                    </div>
                </div>
                <div className="lines-element lines-element_big"></div>
            </div>
            <div className="goods-page__coffee">
                <ErrorBoundary>
                    <CoffeeList/>
                </ErrorBoundary>
            </div>
        </div>
    )
}

export default GoodsPage;