import style from './main.module.css';

function Sqaure({sqaureId, onClick, value}) {
    return (
        <div className={style.square} onClick={() => onClick(sqaureId) }>
            {value === undefined ? '' : (value === 1 ? 'X' : 'O') } 
        </div>
    )
}

export default Sqaure;