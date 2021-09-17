import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import {Accordion, Col, Container, Row} from "react-bootstrap";
import AceEditor from "react-ace";
import AutoloaderFormatOptions from "../components/autoloader/FormatOptions"

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/ext-language_tools"
import {autoloaderInitialState, buildPythonFromAutoLoaderState} from "../components/autoloader/options";
import AutoloaderTriggerOptions from "../components/autoloader/TriggerOptions";
import CodeAccordian from "../components/codeSection/CodeAccordian";
import AutoLoaderBaseOptions from "../components/autoloader/AutoLoaderBaseOptions";
import AutoLoaderFileNotificationOptions from "../components/autoloader/AutoLoaderFileNotificationOptions";

function onChange(newValue) {
}
const useLegacyState = require("use-legacy-state");
function AutoLoader() {
    const [state, setALoaderConfig] = useLegacyState(autoloaderInitialState);
    const [pythonCode, setPythonCode] = useState(``);

    useEffect(() => {
        let pythonCode = buildPythonFromAutoLoaderState(state)
        setPythonCode(pythonCode)
    },[state])


    return (<Container>
            <Row>
                <Col>

                    <Accordion defaultActiveKey={"0"}>
                        <Accordion.Item eventKey={"0"}>
                            <Accordion.Header> Basic settings</Accordion.Header>
                            <Accordion.Body>
                                 <AutoloaderFormatOptions
                                     setALoaderConfig={setALoaderConfig}
                                 />
                                <br/>
                                {/*<AutoloaderTriggerOptions*/}
                                {/*    aLoaderConfig={state}*/}
                                {/*    setALoaderConfig={setALoaderConfig} />*/}
                                {/*<br/>*/}
                                <AutoLoaderBaseOptions
                                    aLoaderConfig={state}
                                    setALoaderConfig={setALoaderConfig}
                                />

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey={"1"}>
                            <Accordion.Header> Advanced Settings: File Notifications </Accordion.Header>
                            <Accordion.Body>
                                <AutoLoaderFileNotificationOptions
                                    aLoaderConfig={state}
                                    setALoaderConfig={setALoaderConfig}
                                />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey={"2"}>
                            <Accordion.Header> Ingest Data Into Delta </Accordion.Header>
                            <Accordion.Body>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col>
                    <CodeAccordian onChange={onChange}
                                   height={"500px"}
                                   state={state}
                                   languages={["python", "scala", "sql"]}
                                   codeMap={{
                                       "python": pythonCode,
                                       "scala": pythonCode,
                                       "sql": pythonCode,
                                   }}
                    />
                </Col>
            </Row>

        </Container>
    )
}

export default AutoLoader;
