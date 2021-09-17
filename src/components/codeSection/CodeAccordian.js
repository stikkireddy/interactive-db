import {Accordion} from "react-bootstrap";
import React from "react";
import CodeBlock from "./Codeblock";

export default function CodeAccordian(props) {

    return (
        <Accordion defaultActiveKey="0">
            {props.languages.map((lang, idx) => {

                return (
                    <Accordion.Item eventKey={idx.toString()}>
                        <Accordion.Header> { lang.toUpperCase() } Code </Accordion.Header>
                        <Accordion.Body>
                            <CodeBlock
                                onChange={props.onChange}
                                height={props.height}
                                language={lang}
                                state={props.state}
                                codeMap={props.codeMap}
                            />
                        </Accordion.Body>
                    </Accordion.Item>
                );
            })}

        </Accordion>
    );

}