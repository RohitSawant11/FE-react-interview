import { useState, useEffect } from 'react';
import './progress.css'

function ProgressBar({value, onComplete}) {

    useEffect(() => {
        if(value === 100) onComplete()
    },[value])
    return (
        <div className="progress__bar">
            <span className='value' style={{color: value > 49 ? "white" : "black"}} >{value}%</span>
            <div className='bar' style={{width: `${value}%` }}></div>
        </div>
    )
}

export default ProgressBar;