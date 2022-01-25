
import './mainPage.sass';

import coffeeIconWhite from '../../../assets/coffee_icon_white.svg';
import coffeeIcon from '../../../assets/coffee_icon.svg';
import solimo from '../../../assets/coffeeImg/solimo_coffee.png';
import presto from '../../../assets/coffeeImg/presto_coffee.png';
import aromatisco from '../../../assets/coffeeImg/aromatisco_coffee.png';

const MainPage = () => {
    return(
        <div className="mainpage">
            <section className="promo">
                <h1 className="title">Everything You Love About Coffee</h1>
                <img src={coffeeIconWhite} alt="Coffee icon" className="promo__icon" />
                <h2 className="title title_white">
                We makes every day full of energy and taste
                <br />
                Want to try our beans?</h2>
                <a href="!#" className="btn">More</a>
            </section>
            
            <section className="about">
                <h2 className="title">About Us</h2>
                <img src={coffeeIcon} alt="Coffee icon" className="about__icon" />
                <p className="about__descr">
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
                <ul className="our-best__list">
                    <li className="our-best__item">                       
                        <img src={solimo} alt="Solimo Coffee Beans" />
                        <a href='!#' className='our-best__item__name'>Solimo Coffee Beans 2 kg</a>
                        <div className="our-best__item__price">10.73$</div>                   
                    </li>
                    <li className="our-best__item">
                       <img src={presto} alt="Presto Coffee Beans" />
                       <a href='!#' className="our-best__item__name">Presto Coffee Beans 1 kg</a>
                       <div className="our-best__item__price">15.99$</div> 
                    </li>
                    <li className="our-best__item">
                        <img src={aromatisco} alt="AROMISTICO Coffee" />
                        <a href='!#' className="our-best__item__name">AROMISTICO Coffee 1 kg</a>
                        <div className="our-best__item__price">6.99$</div>
                    </li>
                </ul>
            </section>
        </div>
        )
    }

export default MainPage;