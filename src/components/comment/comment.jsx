import { useState } from "react";
import "./comment.css"
import CommentInput from "./commentInput";

function Comment({commentData, nestedCommentsHandler}) {
    const [showInput, setShowInput] = useState(false);

    const nestedPostHandler = (data, replyData) => {
        // console.log(data,replyData,'nestedPostHandler');
        nestedCommentsHandler({
            'data': data,
            'replyData': replyData,
        });
    }

    return(
        <div>
            <div className="comment__outline">
                <span>{commentData.name}</span>
                <div>
                    <button onClick={() => setShowInput(!showInput)} >Reply</button>
                </div>
                {
                    showInput && 
                    <div>
                        <CommentInput submitHandler={(data) => nestedPostHandler(data, commentData)}/>
                    </div>
                }
            </div>
            {
                commentData.items.length > 0 &&
                    <>
                        {
                            commentData.items.map((data) => (
                                <div style={{marginLeft:'30px'}} key={data.id}>
                                    <Comment key={data.id} commentData={data} nestedCommentsHandler={nestedCommentsHandler} />
                                </div>
                            ))
                        }
                    </>
                
            }
        </div>
    )
}
export default Comment;