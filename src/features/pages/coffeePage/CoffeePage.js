import CoffeeFilter from "../../coffeeFilter/CoffeeFilter";
import CoffeeList from "../../coffeeList/CoffeeList";

import './coffeePage.sass';

import img from '../../../assets/ourCoffeePage/aboutBeans.png';
import beanIcon from '../../../assets/coffee_icon.svg';

const CoffeePage = () => {
    return(
        <div className="goodspage">
            <header className="header">
                <h1 className="title">Our Coffee</h1>
            </header>
            <div className="about">
                <img src={img} alt="About our beans" className="about__img" />
                <div className="about__info">
                    <h2 className="title">About our beans</h2>
                    <div className="hidden"></div>
                    <img src={beanIcon} alt="About beans" />
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
            </div>
            <CoffeeFilter/>
            <div className="results">
                <CoffeeList/>
            </div>
        </div>
    )
}

export default CoffeePage;