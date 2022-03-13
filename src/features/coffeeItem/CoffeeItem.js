import { useParams } from 'react-router-dom';
import {Helmet} from "react-helmet";

import { useGetSingleCoffeeQuery } from '../../api/apiSlice';
import Skeleton from './Skeleton';

import beanIcon from '../../assets/coffee_icon.svg';

import './coffeeItem.sass';

const CoffeeItemPage = () => {
    const {id} = useParams();

    const {
        data: coffeeItem = {},
        isLoading,
        isError
    } = useGetSingleCoffeeQuery(id);

    const Content = () => {
        if(isLoading) return <Skeleton/>
        if(isError) return <p className='error'>Sorry, something went wrong. Please, return to the main page</p>
        return (
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
                        <span>Description:</span> {coffeeItem.description || `${coffeeItem.name} ${coffeeItem.weight}`}
                    </div>
                    <div className="single-item__price">
                    Price:  <span>{coffeeItem.price}</span>
                    </div>
                </div>
            </section>
        )
    }

    return(
        <div className="coffee-page">
            <Helmet>
                <meta
                name="description"
                content={`${coffeeItem.name} information`}
                />
                <title>{`${coffeeItem.name} information`}</title>
            </Helmet>
            <header className="header">
                <h1 className="title">Our Coffee</h1>
            </header>
            <Content/>
        </div>
    )
}

export default CoffeeItemPage;