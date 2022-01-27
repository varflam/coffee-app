import beanIcon from '../../assets/coffee_icon.svg';
import coffeeImg from '../../assets/singleCoffeePage/coffeeImg.jpg';

import './coffeeItem.sass';

const CoffeeItemPage = () => {
    return(
        <section className="single-item">
            <img src={coffeeImg} alt="Coffee Title" className="single-item__img" />
            <div className="single-item__info">
                <h2 className="title">About it</h2>
                <div className="lines-element"></div>
                <img src={beanIcon} alt="About it" />
                <div className="single-item__descr">
                    <span>Country: </span>Brasil
                    <br />
                    <br />
                    <span>Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className="single-item__price">
                Price:  <span>16.99$</span>
                </div>
            </div>
        </section>
    )
}

export default CoffeeItemPage;