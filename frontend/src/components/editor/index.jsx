import React, {useEffect, useState } from 'react'
import {Editor, EditorState,  RichUtils} from 'draft-js'


export default (props) => {

    const [editorState, setEditorState] = useState(

        EditorState.createEmpty()

    )

    const editor = React.useRef(null);

    function focusEditor() {
        editor.current.focus();
    }

    useEffect(() => {
        focusEditor()
    }, []);
        
    return(
        <>
            <div onClick={focusEditor}>
                <Editor
                    ref={editor}
                    editorState={editorState}
                    onChange={editorState => setEditorState(editorState)}
                />
            </div>
        </>
    )
}
