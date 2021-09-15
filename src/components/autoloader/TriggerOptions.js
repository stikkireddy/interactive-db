import React, {useState} from "react";
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable'
import {useCustomContext} from "../Ctx";
import {autoloaderOptionActions} from "./options";
import {Col, Container, Row} from "react-bootstrap";

const processTimeUnitOptions = [
    {value: "minutes", label: "minutes"},
    {value: "seconds", label: "seconds"}
]

const processTimeQtyOptions = [
    {value: "5", label: "5"},
    {value: "10", label: "10"},
    {value: "15", label: "15"},
    {value: "30", label: "30"},
    {value: "45", label: "45"},
    {value: "60", label: "60"},
]

function AutoloaderTriggerOptions() {
    const Checkbox = props => <input type="checkbox" {...props} />;
    // const {isBatch, setIsBatch} = useState(true)
    const {state, dispatch} = useCustomContext();
    return (<div>
            <Checkbox
                id={"batch"}
                checked={state.trigger_once}
                onChange={(s) => {
                    dispatch({option: autoloaderOptionActions._trigger_once, value: !state.trigger_once})
                    dispatch({option: autoloaderOptionActions._reset_processing_time})
                }}
            />
            <label htmlFor={"batch"}>&nbsp;&nbsp;Ingest Data in a Scheduled Batch?</label>
            <br hidden={state.trigger_once}/>
            <br hidden={state.trigger_once}/>
            <p hidden={state.trigger_once}>Stream ingest data every:</p>
            <Container hidden={state.trigger_once}>
                <Row>
                    <Col>
                        <CreatableSelect
                            isClearable
                            options={processTimeQtyOptions}
                            onChange={(e) => {
                                if (e == null) {
                                    //return null value for qty because the value was cleared
                                    dispatch({option: autoloaderOptionActions._processing_time_qty, value: e})
                                    return
                                }
                                dispatch({option: autoloaderOptionActions._processing_time_qty, value: e.value})
                            }}/>
                    </Col>
                    <Col>
                        <Select options={processTimeUnitOptions}
                                onChange={(e) => dispatch({
                                    option: autoloaderOptionActions._processing_time_units,
                                    value: e.value
                                })}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AutoloaderTriggerOptions