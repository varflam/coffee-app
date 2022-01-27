import './coffeeListItem.sass';

import solimo from '../../assets/coffeeImg/solimo_coffee.png';

const CoffeeListItem = ({best}) => {
    if (best) {
        return(
            <>
                <li className="coffee-item coffee-item_best">                       
                    <a href='!#' className='coffee-item__link coffee-item__link_best'>
                        <img src={solimo} alt="Solimo Coffee Beans" />
                        <div className="coffee-item__name">Solimo Coffee Beans 2 kg</div>
                        <div className="coffee-item__price">10.73$</div> 
                    </a>                        
                </li>
            </>
        )
    } else {
        return(
            <>
                <li className="coffee-item">                           
                    <a href='!#' className='coffee-item__link'>
                        <img src={solimo} alt="Solimo Coffee Beans" />
                        <div className="coffee-item__name">Solimo Coffee Beans 2 kg</div>
                        <div className='coffee-item__country'>Kenya</div>
                        <div className="coffee-item__price">10.73$</div> 
                    </a>                  
                </li>
            </>
        )
    }
    
}

export default CoffeeListItem;