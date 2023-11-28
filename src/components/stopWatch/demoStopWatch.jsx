import { useState,useEffect } from "react";

function DemoStopWatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [timer, setTimer] = useState(3590);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTimer((prevValue) => prevValue + 1);
              }, 1000);
        } else {
            clearInterval(interval);
        }
      
    
      return () => {
        clearInterval(interval);
      }
    }, [isRunning])
    

    const startStopHandler = () => {
        setIsRunning(!isRunning);
    }
    const resetHandler = () => {
        setIsRunning(false);
        setTimer(0)
    }

    const formatTimer = (time) => {
        const hours = Math.floor(time/3600);
        const min = Math.floor((time % 3600) / 60);
        const sec = time % 60;
        const miliSec = ((time % 60) / 1000);

        const formatHours = String(hours).padStart(2,'0');
        const formatMin = String(min).padStart(2,'0');
        const formatSec = String(sec).padStart(2,'0');
        const formatMiliSec = String(miliSec).padStart(3,'0');

        return `${formatHours}:${formatMin}:${formatSec}:${formatMiliSec}`
    }

    return (
        <div style={{display:"flex", flexDirection:"column",alignItems:"center"}} >
            <h2>StopWatch</h2>
            <label>{formatTimer(timer)}</label>
            <div>
                <button onClick={startStopHandler}>{isRunning ? 'Stop' : 'Start'}</button>
                <button onClick={resetHandler} >Reset</button>
            </div>
        </div>
    )
}

export default DemoStopWatch;