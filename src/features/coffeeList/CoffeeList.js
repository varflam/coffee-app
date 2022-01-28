import { useGetCoffeeQuery } from "../../api/apiSlice";
import CoffeeListItem from "../coffeeListItem/CoffeeListItem";

import './coffeeList.sass';
const CoffeeList = ({bestCoffee}) => {

    const {
        data: coffee = []
    } = useGetCoffeeQuery();

    const renderCoffeeList = arr => {
        if(bestCoffee) {
            return arr.map(({id, best, ...props}) => {
                if(best) {
                    return <CoffeeListItem bestCoffee key={id} {...props}/>
                }
                return;
            });
        } 

        return arr.map(({id, ...props}) => {
            return <CoffeeListItem key={id} {...props}/>
        });
    }

    const elements = renderCoffeeList(coffee);

    return(
        <ul className="coffee-list">
            {elements}
        </ul>
    )
}

export default CoffeeList;