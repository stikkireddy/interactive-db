import React, {useState} from "react";
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable'
import {Col, Container, Row} from "react-bootstrap";
import CheckBox from "../CheckBox";

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

function AutoloaderTriggerOptions(props) {
    // const Checkbox = props => <input type="checkbox" {...props} />;

    return (<div>
            <CheckBox
                hidden={false}
                id={"batch"}
                name={"Ingest Data in a Scheduled Batch?"}
                checked={props.aLoaderConfig.trigger_once}
                onChange={() => {
                    props.setALoaderConfig({
                        trigger_once: !props.aLoaderConfig.trigger_once,
                        processing_time: {qty: null, units: null}
                    })
                }}
            />
            <br hidden={props.aLoaderConfig.trigger_once}/>
            <br hidden={props.aLoaderConfig.trigger_once}/>
            <p hidden={props.aLoaderConfig.trigger_once}>Stream ingest data every:</p>
            <Container hidden={props.aLoaderConfig.trigger_once}>
                <Row>
                    <Col>
                        <CreatableSelect
                            isClearable
                            options={processTimeQtyOptions}
                            onChange={(e) => {
                                if (e == null) {
                                    //return null value for qty because the value was cleared
                                    props.setALoaderConfig({processing_time: {qty: null, units: null}})
                                    return
                                }
                                props.setALoaderConfig({
                                    processing_time:
                                        {
                                            qty: e.value,
                                            units: props.aLoaderConfig.processing_time.units
                                        }
                                })
                            }}/>
                    </Col>
                    <Col>
                        <Select options={processTimeUnitOptions}
                                onChange={(e) => props.setALoaderConfig({
                                    processing_time:
                                        {
                                            qty: props.aLoaderConfig.processing_time.qty,
                                            units: e.value
                                        }
                                })}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AutoloaderTriggerOptions