import { useState } from "react";

function CommentInput({onComment}) {
    const [commentBody, setCommentBody] = useState(''); 
    return (
        <div className='input-wrapper'>
            <input type="text" className="input-container" 
            placeholder="enter your thoughts" value={commentBody} onChange={e => setCommentBody(e.target.value)} />
            <button onClick={() => {
                onComment({ body: commentBody, comments:[] });
                setCommentBody('');
            }}>Reply</button>
        </div>
        

    )
}
export default CommentInput;