import Button from "react-bootstrap/Button";
import AceEditor from "react-ace";
import React from "react";

export default function CodeBlock(props) {
    return (
        <div>
            <Button disabled={true}> Copy </Button>
            <AceEditor
                mode={props.language}
                theme="textmate"
                onChange={props.onChange}
                name={"defaultEditor" + props.language}
                width={"100%"}
                height={props.height}
                value={
                    ((props.language !== "python") ? JSON.stringify(props.state, null, 2) : "") + "\n" +
                    props.codeMap[props.language]
                }
                editorProps={{$blockScrolling: true}}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true
                }}
            />
        </div>
    );
}