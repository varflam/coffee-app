import CoffeeListItem from "../coffeeListItem/CoffeeListItem";

import './coffeeList.sass';
const CoffeeList = ({best}) => {
    if(best) {
        return(
            <ul className="coffee-list">
                <CoffeeListItem best/>
                <CoffeeListItem best/>
                <CoffeeListItem best/>
            </ul>
        )
    } else {
        return(
            <ul className="coffee-list">
                <CoffeeListItem/>
                <CoffeeListItem/>
                <CoffeeListItem/>
                <CoffeeListItem/>
                <CoffeeListItem/>
                <CoffeeListItem/>
            </ul>
        )
    }
}

export default CoffeeList;