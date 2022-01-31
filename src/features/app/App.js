import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoffeePage from '../pages/coffeePage/CoffeePage';
import MainPage from '../pages/mainPage/MainPage';
import GoodsPage from '../pages/goodsPage/GoodsPage';
import Navigation from '../navigation/Navigation';
import CoffeeItem from '../coffeeItem/CoffeeItem';

import './app.sass';
import '../../style/reset.css';
import '../../style/titles.sass';
import '../../style/linesElement.sass';

const App = () => {
    return(
        <Router>
            <div className='app'>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/coffee" element={<CoffeePage/>}/>
                    <Route path="/coffee/:id" element={<CoffeeItem/>}/>
                    <Route path="/pleasure" element={<GoodsPage/>}/>
                </Routes>
                <Navigation footer/>
            </div>
        </Router>
    )
}

export default App;