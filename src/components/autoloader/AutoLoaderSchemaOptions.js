import React from "react";
import CheckBox from "../CheckBox";
import Select from "react-select";
import TextInput from "../TextInput";
import DividerTopic from "../DividerTopic";

export const autoloaderSchemaEvolutionFormats = ["csv", "json"]

const schemaEvolutionOptions = [
    {value: 'addNewColumns', label: 'Add New Columns'},
    {value: 'failOnNewColumns', label: 'Fail On New Columns'},
    {value: 'rescue', label: 'Capture failures in Rescue Column'},
    {value: 'none', label: 'Ignore all New Columns'}
]

function SchemaLocation(props) {
    if (props.aLoaderConfig.schemaLocation === false) {
        return null;
    }
    return (
        <TextInput
            hidden={false}
            id={"schemaLocation"}
            name={"Schema Location Path: "}
            value={props.aLoaderConfig.schemaLocationPath}
            onChange={(e) => props.setALoaderConfig({schemaLocationPath: e.target.value})}/>
    );
}

function SchemaEvolutionOptions(props) {
    if (!autoloaderSchemaEvolutionFormats.includes(props.aLoaderConfig.format)) {
        return null;
    }
    return (
        <span>
            How do you want to apply schema changes:
            <Select
                defaultValue={
                    // schemaEvolutionOptions[0]
                    schemaEvolutionOptions.filter((v) => {
                        return v.value === props.aLoaderConfig.schemaEvolutionMode
                    })[0]
                }
                options={schemaEvolutionOptions}
                onChange={(e) => props.setALoaderConfig({schemaEvolutionMode: e.value})}
            />
        </span>
    );
}

export default function AutoLoaderSchemaOptions(props) {
    if (!autoloaderSchemaEvolutionFormats.includes(props.aLoaderConfig.format)) {
        return null
    }
    return (
        <span>
            <DividerTopic content={"Schema Evolution"} />
        {/*<h4 className="divider line double-razor"> Schema Evolution </h4>*/}
        <br/>
        <CheckBox
            hidden={false}
            id={"files-explicit schema"}
            name={"Do you want to provide an explicit schema?"}
            checked={props.aLoaderConfig.schema}
            onChange={() => {
                if (!props.aLoaderConfig.schema === false) {
                    props.setALoaderConfig({
                        schemaLocation: true,
                        schema: !props.aLoaderConfig.schema
                    })
                    return
                }
                props.setALoaderConfig({schema: !props.aLoaderConfig.schema})
            }}/>
        <br/>
        <br/>
            <CheckBox
                hidden={false}
                id={"schemahints"}
                name={"Do you want to provide an some schema hints?"}
                checked={props.aLoaderConfig.schemaHints}
                onChange={() => props.setALoaderConfig({schemaHints: !props.aLoaderConfig.schemaHints})}/>
        <br/>
        <br/>
            <CheckBox
                hidden={false}
                id={"schemalocation"}
                name={"Provide a schema location (required if not providing explicit schema)?"}
                checked={props.aLoaderConfig.schemaLocation}
                onChange={() => {
                    if (props.aLoaderConfig.schema === false) {
                        return
                    }
                    props.setALoaderConfig(
                        {schemaLocation: !props.aLoaderConfig.schemaLocation})
                }
                }/>
        <br/>
            <SchemaLocation {...props}/>
        <br/>
            <SchemaEvolutionOptions {...props} />
        </span>
    );
}