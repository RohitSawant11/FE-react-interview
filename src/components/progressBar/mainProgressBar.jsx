import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import "./progress.css"

function MainProgressBar(params) {

    const [value, setValue] = useState(0);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
       const interval=  setInterval(() => {
            if(value <= 100) {
                setValue((val) => {
                    if (val + 1 <= 100) {
                        return val + 1
                    } else {
                        clearInterval(interval);
                        return val;
                    }
                });
            }
            
            return () => clearInterval(interval);
        }, 100);

        return () => clearInterval(interval);
    }, [])

    const onCompleteHandler = () => {
      setLoading(!loading);
    }

    return (
        <div className="progressBar__container">
            <h1>Progress Bar</h1>
            <ProgressBar value={value} onComplete={onCompleteHandler} />
            <span> {loading ? "Loading..." : "Completed!"} </span>
        </div>
    )
}

export default MainProgressBar;