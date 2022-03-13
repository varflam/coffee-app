import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterCountry, setFilterName } from './coffeeFilterSlice';
import { useGetCounriesQuery } from '../../api/apiSlice';
import classNames from 'classnames/bind';

import './coffeeFilter.sass';

const CoffeeFilter = () => {
    const dispatch = useDispatch();
    const {filterCountry} = useSelector(state => state.filters);
    const [inputValue, setInputValue] = useState('');

    const {
        data: countries = [],
        isError,
        isLoading
    } = useGetCounriesQuery();

    const onHandleChange = (e) => {
        e.preventDefault();
        const {value} = e.target;

        setInputValue(value);
        dispatch(setFilterName(value));
    }

    const renderBtns = (arr) => {

        if (isLoading) {
            return <p className='input__alert'>Please wait...</p>
        } else if (isError) {
            return <p className='input__alert'>No filters</p>
        }

        return arr.map(item => {

            const btnClass = classNames({
                'filter__btn': true,
                'filter__btn_active': filterCountry === item
            });

            return <button 
            key={item}
            className={btnClass}
            onClick={() => dispatch(setFilterCountry(item))}
            >{item}</button>
        });
    }

    return(
        <div className="filter">
            <form onSubmit={e => onHandleChange(e)}>
                <label className="input__label" htmlFor="coffee-search">Looking for</label>
                <input 
                        id="name" 
                        className="filter__input" 
                        type="text" 
                        nane="country"
                        placeholder="start typing here..."
                        onChange={e => onHandleChange(e)}
                        value={inputValue}/>
            </form>
            <div className="filter__country">
                <div className="filter__country__text">Or filter</div>
                <div className="filter__btn-group">
                    {renderBtns(countries)}
                </div>
            </div>
        </div>
    )
}

export default CoffeeFilter;