import AppHeader from '../appHeader/AppHeader';
import AppFooter from '../appFooter/AppFooter';
import CoffeePage from '../pages/coffeePage/CoffeePage';
import MainPage from '../pages/mainPage/MainPage';
import GoodsPage from '../pages/goodsPage/GoodsPage';

import './app.sass';
import '../../style/reset.css';
import '../../style/titles.sass';
import '../../style/pseudoelements.sass';

const App = () => {
    return(
        <div className='app'>
            <AppHeader/>
            {/* <MainPage/> */}
            <CoffeePage/>
            {/* <GoodsPage/> */}
            <AppFooter/>
        </div>
    )
}

export default App;