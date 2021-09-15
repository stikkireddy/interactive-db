import React, {useReducer} from 'react'
import Button from 'react-bootstrap/Button';
import {Accordion, Col, Container, Row} from "react-bootstrap";
import AceEditor from "react-ace";
import AutoloaderFormatOptions from "../components/autoloader/FormatOptions"
import CustomContext from "../components/Ctx";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/ext-language_tools"
import {autoloaderInitialState, autoloaderOptionActions} from "../components/autoloader/options";
import AutoloaderTriggerOptions from "../components/autoloader/TriggerOptions";

function onChange(newValue) {
    console.log("change", newValue);
}

function reducer(state, action) {
    switch (action.option) {
        // _ indicats that it is a builder function and not an actual datasource option
        case autoloaderOptionActions._format:
            state.format = action.value
            return {...state};
        case autoloaderOptionActions._trigger_once:
            state.trigger_once = action.value;
            return {...state};
        case autoloaderOptionActions._processing_time_qty:
            state.processing_time.qty = action.value;
            return {...state};
        case autoloaderOptionActions._processing_time_units:
            state.processing_time.units = action.value;
            return {...state};
        case autoloaderOptionActions._reset_processing_time:
            [state.processing_time.units, state.processing_time.qty] = [null, null];
            return {...state};
        default:
            throw new Error();
    }
}

function AutoLoader() {
    const [state, dispatch] = useReducer(reducer, autoloaderInitialState);
    const providerState = {
        state,
        dispatch
    }

    return (<Container>
        <Row>
            <Col>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey={0}>
                        <Accordion.Header> Basic settings</Accordion.Header>
                        <Accordion.Body>
                            <CustomContext.Provider value={providerState} >
                                <AutoloaderFormatOptions />
                                <br/>
                                <AutoloaderTriggerOptions />
                            </CustomContext.Provider>
                        </Accordion.Body></Accordion.Item>
                </Accordion>
            </Col>
            <Col>
                <Button> Copy </Button>
                <AceEditor
                    mode="python"
                    theme="textmate"
                    onChange={onChange}
                    name="defaultEditor"
                    value={JSON.stringify(state, null, 2)}
                    editorProps={{$blockScrolling: true}}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true
                    }}
                />
            </Col>
        </Row>

    </Container>)
}
export default AutoLoader;
