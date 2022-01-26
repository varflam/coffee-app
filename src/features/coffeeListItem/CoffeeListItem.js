import './coffeeListItem.sass';

import solimo from '../../assets/coffeeImg/solimo_coffee.png';

const CoffeeListItem = ({best}) => {
    if (best) {
        return(
            <>
                <li className="coffee-item coffee-item_best">                       
                    <img src={solimo} alt="Solimo Coffee Beans" />
                    <a href='!#' className='coffee-item__name'>Solimo Coffee Beans 2 kg</a>
                    <div className="coffee-item__price">10.73$</div>                   
                </li>
            </>
        )
    } else {
        return(
            <>
                <li className="coffee-item">                       
                    <img src={solimo} alt="Solimo Coffee Beans" />
                    <a href='!#' className='coffee-item__name'>Solimo Coffee Beans 2 kg</a>
                    <div className='coffee-item__country'>Kenya</div>
                    <div className="coffee-item__price">10.73$</div>                   
                </li>
            </>
        )
    }
    
}

export default CoffeeListItem;