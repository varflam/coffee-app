import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useGetCoffeeQuery } from "../../api/apiSlice";
import CoffeeListItem from "../coffeeListItem/CoffeeListItem";

import './coffeeList.sass';
const CoffeeList = ({bestCoffee}) => {
    const { filterCountry, filterName } = useSelector(state => state.filters);

    const {
        data: coffee = []
    } = useGetCoffeeQuery();

    const filterCoffeeByCountry = useCallback((arr) => {
        const filteredCoffee = arr.slice();

        if(filterCountry === 'all') {
            return filteredCoffee;
        } else {
            return filteredCoffee.filter(coffee => coffee.country === filterCountry);
        }
    }, [filterCountry]);

    const filterCoffeeByName = (arr) => {
        const filteredCoffee = arr.slice();

        if(filterName === '') {
            return filteredCoffee;
        } else {
            return filteredCoffee.filter(coffee => {
                return coffee.name.indexOf(filterName) > -1
            });
        }
    }

    const filteredCoffee = filterCoffeeByCountry(filterCoffeeByName(coffee));

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

    const elements = bestCoffee ? renderCoffeeList(coffee) : renderCoffeeList(filteredCoffee);

    return(
        <ul className="coffee-list">
            {elements}
        </ul>
    )
}

export default CoffeeList;