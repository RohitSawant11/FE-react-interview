import { useMemo, useState } from 'react';
import style from './starRating.module.css'
import Star from './star'
function StarRating() {
    const total = 5;
    const [starRating, setStarRating ] = useState(0);
    const [starSelection, setstarSelection ] = useState(0);
    const starArray = useMemo(()=>{
        return Array.from({length: total})
    },[total]);

    const onLeave = () => {
        setstarSelection(0);
    }

    const onHover = (e) => {
        setstarSelection(e.target.dataset?.starindex ?? starRating)
    }

    const onSelectedhandler = (e) => {
        setStarRating(e.target.dataset?.starindex ?? 0)
    }

    const resetHandler = () => {
        setStarRating(0);
        setstarSelection(0);
    }

    return (
        <>
        <div className={style.cointainer} onMouseLeave={onLeave} onMouseOver={onHover} onClick={onSelectedhandler}>
            {
                starArray.map((_,i)=> (
                    <Star
                    key={i}
                    starId={i + 1}
                    marked={(starSelection || starRating) > i}
                    />
                ))
            }
        </div>
        <button onClick={resetHandler}>Reset</button>
        </>
        )
}
export default StarRating;