

function TempComment({commentData}) {
    return (
        <div>
            <div>
                <span>{commentData.text}</span>
                <button>reply</button>
            </div>
            
        </div>
    )
}
export  default TempComment;