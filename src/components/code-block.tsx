import React from "react";
import { Pre, Line, LineNo, LineContent } from "./styles";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

const WithLineNumbers = ({ code, language, shadow, codingLines }: { code: string, language: Language, shadow?: string, codingLines?: boolean }) => (
    <Highlight {...defaultProps} theme={theme} code={code} language={language} >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={`${className} rounded-xl duration-300 ${shadow}`} style={style} >
                <div className="border-none min-w-[600px] min-h-[200px]">
                    {tokens.map((line, i) => (
                        <Line key={i} {...getLineProps({ line, key: i })}>
                            {codingLines && <LineNo>{i + 1}</LineNo>}
                            <LineContent>
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token, key })} />
                                ))}
                            </LineContent>
                        </Line>
                    ))}
                </div>
            </Pre>
        )}
    </Highlight>
);

export default WithLineNumbers;
