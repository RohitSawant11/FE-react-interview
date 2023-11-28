import { useState } from "react";


function CommentInput({submitHandler}) {
    const [inputValue, setInputValue] = useState('');

    const submit = () => {
        submitHandler(inputValue);
        setInputValue('');
    }

    return (
        <div className='input__container'>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={submit} >Post</button>
        </div>
        
    )
}

export default CommentInput;