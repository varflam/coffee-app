import { useCallback } from "react";
import { useSelector } from "react-redux";

import { useGetCoffeeQuery } from "../../api/apiSlice";
import Skeleton from "./Skeleton";
import CoffeeListItem from "../coffeeListItem/CoffeeListItem";

import './coffeeList.sass';
const CoffeeList = ({bestCoffee}) => {
    const { filterCountry, filterName } = useSelector(state => state.filters);

    const {
        data: coffee = [],
        isLoading,
        isError
    } = useGetCoffeeQuery();

    const filterCoffeeByCountry = useCallback((arr) => {
        const filteredCoffee = arr.slice();

        if(filterCountry === 'All') {
            return filteredCoffee;
        } else {
            return filteredCoffee.filter(coffee => coffee.country === filterCountry);
        }
    }, [filterCountry]);

    
    if(isLoading) {
        return <Skeleton/>
    } else if(isError) {
        return <p className='error'>Sorry, something went wrong</p>
    }

    const filterCoffeeByName = (arr) => {
        const filteredCoffee = arr.slice();

        if(filterName === '') {
            return filteredCoffee;
        } else {
            return filteredCoffee.filter(coffee => {
                return coffee.name.toLowerCase().indexOf(filterName.toLowerCase()) > -1
            });
        }
    }

    const filteredCoffee = filterCoffeeByCountry(filterCoffeeByName(coffee));

    const renderCoffeeList = arr => {
        if(bestCoffee) {
            return arr.map(({id, best, ...props}) => {
                if(best) {
                    return <CoffeeListItem bestCoffee key={id} id={id} {...props}/>
                }
                return;
            });
        } 

        if(arr.length === 0) {
            return <p>Sorry, nothing was found</p>
        }

        return arr.map(({id, ...props}) => {
            return <CoffeeListItem key={id} id={id} {...props}/>
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