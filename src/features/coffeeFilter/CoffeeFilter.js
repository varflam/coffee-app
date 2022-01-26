import './coffeeFilter.sass';

const CoffeeFilter = () => {
    return(
        <div className="filter">
            <form action="!#">
                <label className="input__label" htmlFor="coffee-search">Looking for</label>
                <input id="coffee-search" className="filter__input" type="text" placeholder="start typing here..."/>
            </form>
            <div className="filter__country">
                <div className="filter__country__text">Or filter</div>
                <div className="filter__btn-group">
                    <button className="filter__btn">Brazil</button>
                    <button className="filter__btn">Kenya</button>
                    <button className="filter__btn">Columbia</button>
                </div>
            </div>
        </div>
    )
}

export default CoffeeFilter;