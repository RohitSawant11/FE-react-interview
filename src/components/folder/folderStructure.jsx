import { useState } from "react";
import "./folder.css"

function FolderStructure({ folderData }) {

    const [ isExpanded, setIsExpanded ] = useState(false);

    return (
        <div>
            {
                folderData.isFolder ?
                    (
                        <div>
                            <div style={{width:"fit-content"}} onClick={() => setIsExpanded(!isExpanded)}>{ !isExpanded? "📁" : "📂"}{folderData.name}</div>
                            { isExpanded && <div className="inside__folder">
                                {folderData.items.map((val) => (
                                     <FolderStructure key={val.id} folderData={val} />
                                ))}
                            </div>}
                        </div>


                    )
                    :
                    (
                        <div style={{width:"fit-content"}}>📝{folderData.name}</div>
                    )
            }
        </div>
    )
}
export default FolderStructure;