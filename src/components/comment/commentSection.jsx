import { useState } from 'react';
import {DUMMY_COMMENTS} from './commentConstants';
import Comment from './comment';
import CommentInput from './commentInput';
import useFunction from './useFunction';

function CommentSection() {
    const [dummyComments, setDummyComments] = useState(DUMMY_COMMENTS);
    const { addFunction } = useFunction()

    const rootPostHandler = (data) => {
        const newInput = {
            id: Date.now(),
            name: data,
            items: []
        };
        setDummyComments([...dummyComments, newInput]);
    }


   

    const nestedCommentsHandler = ({ data, replyData }) => {
       const updatedTree =  addFunction(dummyComments, replyData.id, data);
        console.log(updatedTree,'...')

        // setDummyComments(updatedTree);
    }

    return(
        <div>
            <h1>CommentSection</h1>
            <div >
                <CommentInput submitHandler={rootPostHandler} /> 
            </div>
            { dummyComments.map((data) => (
                <Comment key={data.id} commentData={data} nestedCommentsHandler={nestedCommentsHandler} />
            )) }
        </div>
    )
}

export default CommentSection;