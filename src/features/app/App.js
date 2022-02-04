import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from '../navigation/Navigation';
import MainPage from '../pages/mainPage/MainPage';
import CoffeePage from '../pages/coffeePage/CoffeePage';
import GoodsPage from '../pages/goodsPage/GoodsPage';
import CoffeeItem from '../coffeeItem/CoffeeItem'

import '../../style/style.sass';

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