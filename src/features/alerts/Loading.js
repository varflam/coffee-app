import src from './coffee.gif'

import './alerts.sass';

const Loading = () => {
    return(
        <img className="alert__img" src={src} alt="Идёт загрузка..." />
    )
}

export default Loading;