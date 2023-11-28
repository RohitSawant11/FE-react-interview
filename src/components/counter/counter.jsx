import { useRef, useState } from "react";

function Counter() {
   const [value, setValue] = useState(0);
   const step = useRef(1);

   const incrementhandler = () => {
    // let value = value + step.current
    setValue((value) => value + +step.current);
   }

   const decrementhandler = () => {
    setValue(value - +step.current);
   }

   const resethandler = () => {
    setValue(0);
   }
   
   const stepHandler = (e) => {
    step.current = e.target.value;
   }

    return(
        <div>
            <label>{value}</label>
            <div>
                <button onClick={decrementhandler} >-</button>
                <button onClick={incrementhandler}>+</button>
            </div>
            <div>
                <label>Increment/Decrement by</label>
                <input type="number" defaultValue={step.current} onChange={stepHandler} />
            </div>
            <button onClick={resethandler} >Reset</button>
        </div>
    )
}
export default Counter;