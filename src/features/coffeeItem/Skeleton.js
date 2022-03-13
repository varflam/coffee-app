import './skeleton.sass';

const Skeleton = () => {
    return(
        <div className="skeleton_coffee-item">
            <div className="pulse skeleton_coffee-item__img"></div>
            <div className="pulse skeleton_coffee-item__info">
                <div className="pulse skeleton_coffee-item__descr">
                    <div className="pulse skeleton_coffee-item__block"></div>
                    <div className="pulse skeleton_coffee-item__block"></div>
                    <div className="pulse skeleton_coffee-item__block"></div>
                </div>
            </div>
        </div>
    )
}

export default Skeleton;