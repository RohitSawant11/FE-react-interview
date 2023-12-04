import { useState } from 'react';
import './comment.css'
import CommentItem from './commentItem';
import CommentInput from './commentInput';

function NewComment(params) {

    const dummyComments = [
        {
            id:1,
            body:'1 comment',
            comments:[]
        },
        {
            id:2,
            body:'2 comment',
            comments:[],
        },
        {
            id:3,
            body:'3 comment',
            comments:[]
        }
    ]

    const [comments, setComments] = useState(dummyComments)


    const onComment = (comment) => {
        const newComment = {
            body: comment.body,
            id: Date.now(),
            comments: [...comment.comments]
        }
        setComments((prev) => [newComment, ...prev]);
    }


    return(
        <div>
            <h1>Comment Section</h1>
            <CommentInput onComment={onComment} />

            <div className='comments-container'>
                {
                    comments.map((comment => (
                        <CommentItem key={comment.id} comment={comment} />
                    )))
                }
            </div>

        </div>
    )
}

export default NewComment;