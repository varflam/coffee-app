import { useDispatch } from "react-redux";
import { setFilterCountry, setFilterName } from './coffeeFilterSlice';
import { useFormik } from 'formik';

import './coffeeFilter.sass';

const CoffeeFilter = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            name: ''
        },
        onSubmit: values => {
            dispatch(setFilterName(values.name));
        }
    })

    return(
        <div className="filter">
            <form onSubmit={formik.handleSubmit}>
                <label className="input__label" htmlFor="coffee-search">Looking for</label>
                <input 
                        id="name" 
                        className="filter__input" 
                        type="text" 
                        placeholder="start typing here..."
                        onChange={formik.handleChange}
                        value={formik.values.name}/>
            </form>
            <div className="filter__country">
                <div className="filter__country__text">Or filter</div>
                <div className="filter__btn-group">
                    <button 
                            className="filter__btn"
                            onClick={() => dispatch(setFilterCountry('all'))}
                            >All</button>
                    <button 
                            className="filter__btn"
                            onClick={() => dispatch(setFilterCountry('Brazil'))}
                            >Brazil</button>
                    <button 
                            className="filter__btn"
                            onClick={() => dispatch(setFilterCountry('Kenya'))}
                            >Kenya</button>
                    <button 
                            className="filter__btn"
                            onClick={() => dispatch(setFilterCountry('Columbia'))}
                            >Columbia</button>
                </div>
            </div>
        </div>
    )
}

export default CoffeeFilter;