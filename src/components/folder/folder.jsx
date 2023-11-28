import { useState } from 'react';
import {FOLDER_DATA} from './folderConstants';
import FolderStructure from './folderStructure';


function Folder(params) {

    const [data, setData ] = useState(FOLDER_DATA);

    console.log(FOLDER_DATA)
    return (
        <div>
            <h1>Folder Structure</h1>
            <FolderStructure folderData={data} />
        </div>
    )
}

export default Folder;