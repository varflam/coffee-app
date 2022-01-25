import AppHeader from '../appHeader/AppHeader';
import AppFooter from '../appFooter/AppFooter';
import CoffeeItemPage from '../pages/coffeeItemPage/CoffeeItemPage';
import CoffeePage from '../pages/coffeePage/CoffeePage';
import MainPage from '../pages/mainPage/MainPage';
import GoodsPage from '../pages/goodsPage/GoodsPage';

const App = () => {
    return(
        <>
            <AppHeader/>
            <MainPage/>
            <CoffeePage/>
            <GoodsPage/>
            <CoffeeItemPage/>
            <AppFooter/>
        </>
    )
}

export default App;