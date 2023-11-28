import style from './star.module.css'
function Star({marked, starId}) {
    const circleStyle = {
        background: marked ? 'black' : 'red'
    }
    return (
        <div data-starindex={starId} className={style.circle} style={circleStyle}>
            
        </div>)
}
export default Star;