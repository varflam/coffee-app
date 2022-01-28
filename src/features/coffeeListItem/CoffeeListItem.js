import './coffeeListItem.sass';

const CoffeeListItem = (props) => {
    const {bestCoffee, name, country, price, img} = props;

    if(bestCoffee) {
        return(
            <>
                <li className="coffee-item coffee-item_best">                           
                    <a href='!#' className='coffee-item__link coffee-item__link_best'>
                        <img src={img} alt="Solimo Coffee Beans" />
                        <div className="coffee-item__name">{name}</div>
                        <div className="coffee-item__price">{price}</div> 
                    </a>                  
                </li>
            </>
        )
    }

    return(
        <>
            <li className="coffee-item">                           
                <a href='!#' className='coffee-item__link'>
                    <img src={img} alt="Solimo Coffee Beans" />
                    <div className="coffee-item__name">{name}</div>
                    <div className='coffee-item__country'>{country}</div>
                    <div className="coffee-item__price">{price}</div> 
                </a>                  
            </li>
        </>
    )
    
}

export default CoffeeListItem;