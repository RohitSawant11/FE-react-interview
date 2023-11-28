import style from './ticTacToe.module.css'

function Square(props) {
    return(
        <div className={style.square} onClick={()=> props.cellClicked(props.squareId)}>
            {/* {props.squareValue !== null && props.squareValue === 1 ? 'X' : 'O'} */}
            {props.squareValue !== null ? (props.squareValue === 1 ? 'X' : 'O') : ''}
        </div>
    )
    
}
export default Square;