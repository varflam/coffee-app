import './skeleton.sass';

const Skeleton = () => {
    return(
        <div className='container'>
            <div className="skeleton">
                <div className="pulse skeleton__title"></div>
                <div className="pulse skeleton__img"></div>
                <div className="pulse skeleton__block"></div>
                <div className="pulse skeleton__block"></div>
                <div className="pulse skeleton__block"></div>
            </div>
        </div>
    )
}

export default Skeleton;