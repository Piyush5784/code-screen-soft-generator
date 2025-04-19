import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

type EditorProps = {
    code: string;
    // onChange: (value: string) => void;
    readOnly?: boolean;
};

const EditableCodeBlock = ({ code, readOnly = false }: EditorProps) => {
    const [value, setValue] = useState(code);

    const handleChange = (val: string) => {
        setValue(val);
    };

    return (
        <div className="rounded-xl overflow-hidden shadow-lg min-w-[600px] min-h-[200px]">
            <CodeMirror
                value={value}
                height="200px"
                theme={oneDark}
                extensions={[javascript()]}
                onChange={handleChange}
                readOnly={readOnly}
                basicSetup={{
                    lineNumbers: true,
                    foldGutter: true,
                    highlightActiveLine: true,
                }}
            />
        </div>
    );
};

export default EditableCodeBlock;
