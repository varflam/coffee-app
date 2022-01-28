import CoffeePage from '../pages/coffeePage/CoffeePage';
import MainPage from '../pages/mainPage/MainPage';
import GoodsPage from '../pages/goodsPage/GoodsPage';
import Navigation from '../navigation/Navigation';

import './app.sass';
import '../../style/reset.css';
import '../../style/titles.sass';
import '../../style/linesElement.sass';

const App = () => {
    return(
        <div className='app'>
            <Navigation/>
            {/* <MainPage/> */}
            {/* <CoffeePage/> */}
            <GoodsPage/>
            <Navigation footer/>
        </div>
    )
}

export default App;