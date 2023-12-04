import { useState } from "react";
import CommentInput from "./commentInput";

function CommentItem({comment}) {
    console.log(comment,'....')

    const [isReplying, setIsReplying] = useState(false);
    const [comments, setComments] = useState(comment.comments);

    const onComment = (comment) => {
        const newComment = {
            body: comment.body,
            id: Date.now(),
            comments:[]
        }
        setComments((prev) => [newComment, ...prev]);
    }


    return (
        <div className='comment' key={comment.id}>
           <span>{comment.body}</span>
           {
            isReplying ? (
                <button  onClick={() => setIsReplying(false)}>Cancel</button>
            ) : (
                <button  onClick={() => setIsReplying(true)}>Reply</button>
            )
           }
           {isReplying && <CommentInput onComment={onComment} />}
           {
            comments.map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
            ))
           }
        </div>
    )
}
export default CommentItem;