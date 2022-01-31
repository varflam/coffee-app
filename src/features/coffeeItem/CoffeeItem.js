import { useParams } from 'react-router-dom';

import { useGetSingleCoffeeQuery } from '../../api/apiSlice';

import beanIcon from '../../assets/coffee_icon.svg';

import './coffeeItem.sass';

const CoffeeItemPage = () => {
    const {id} = useParams();

    const {
        data: coffeeItem = {}
    } = useGetSingleCoffeeQuery(id);

    return(
        <div className="coffee-page">
            <header className="header">
                <h1 className="title">Our Coffee</h1>
            </header>
            <section className="single-item">
                <img src={coffeeItem.img} alt="Coffee Title" className="single-item__img" />
                <div className="single-item__info">
                    <h2 className="title">About it</h2>
                    <div className="lines-element"></div>
                    <img src={beanIcon} alt="About it" />
                    <div className="single-item__descr">
                        <span>Country: </span>{coffeeItem.country}
                        <br />
                        <br />
                        <span>Description:</span> {coffeeItem.description || coffeeItem.name }
                    </div>
                    <div className="single-item__price">
                    Price:  <span>{coffeeItem.price}</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CoffeeItemPage;