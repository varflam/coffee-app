import AppHeader from '../appHeader/AppHeader';
import AppFooter from '../appFooter/AppFooter';
import CoffeeItemPage from '../pages/coffeeItemPage/CoffeeItemPage';
import CoffeePage from '../pages/coffeePage/CoffeePage';
import MainPage from '../pages/mainPage/MainPage';
import GoodsPage from '../pages/goodsPage/GoodsPage';

import './app.sass';
import '../../style/reset.css';
import '../../style/titles.sass'

const App = () => {
    return(
        <div className='app'>
            <AppHeader/>
            <MainPage/>
            {/* <CoffeePage/>
            <GoodsPage/>
            <CoffeeItemPage/> */}
            <AppFooter/>
        </div>
    )
}

export default App;