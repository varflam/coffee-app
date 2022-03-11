import { Link } from "react-router-dom";

import './coffeeListItem.sass';

const CoffeeListItem = (props) => {
    const {bestCoffee, name, country, price, weight, img, id} = props;

    if(bestCoffee) {
        return(
            <>
                <li className="coffee-item coffee-item_best">                           
                    <Link to={`/coffee/${id}`} href='!#' className='coffee-item__link coffee-item__link_best'>
                        <img src={img} alt="Solimo Coffee Beans" />
                        <div className="coffee-item__name">{`${name} ${weight}`}</div>
                        <div className="coffee-item__price">{price}</div> 
                    </Link>                  
                </li>
            </>
        )
    }

    return(
        <>
            <li className="coffee-item">                           
                <Link to={`/coffee/${id}`} className='coffee-item__link'>
                    <img src={img} alt="Solimo Coffee Beans" />
                    <div className="coffee-item__name">{`${name} ${weight}`}</div>
                    <div className='coffee-item__country'>{country}</div>
                    <div className="coffee-item__price">{price}</div> 
                </Link>                  
            </li>
        </>
    )
    
}

export default CoffeeListItem;