import React from "react";
import CheckBox from "../CheckBox";
import AutoLoaderSchemaOptions from "./AutoLoaderSchemaOptions";
import TextInput from "../TextInput";

export function appendGB(str) {
    if (str.endsWith("g")) {
        return str
    }
    return str + "g"
}

export default function AutoLoaderBaseOptions(props) {

    return (
        <span>
        <CheckBox
            id={"files-chkbox"}
            name={"Do you want to process existing files?"}
            defaultValue={props.aLoaderConfig.include_existing_files}
            checked={props.aLoaderConfig.include_existing_files}
            onChange={() => props.setALoaderConfig({include_existing_files: !props.aLoaderConfig.include_existing_files})}/>
            <br/>
        <TextInput
            hidden={false}
            id={"loadPath"}
            name={"Load Path: "}
            value={props.aLoaderConfig.loadPath}
            onChange={(e) => props.setALoaderConfig({loadPath: e.target.value})}/>
            <br/>
        <TextInput
            hidden={false}
            id={"maxBytesPerTrigger"}
            name={"How many gb of Data per microbatch eg: (10g): "}
            value={props.aLoaderConfig.maxBytesPerTrigger}
            onChange={(e) => props.setALoaderConfig({maxBytesPerTrigger: e.target.value})}/>
            <br/>
        <TextInput
            hidden={false}
            id={"maxFilesPerTrigger"}
            name={"How many files per microbatch eg: (10): "}
            value={props.aLoaderConfig.maxFilesPerTrigger}
            onChange={(e) => props.setALoaderConfig({maxFilesPerTrigger: e.target.value})}/>
        <br hidden={props.aLoaderConfig.format !== "json"}/>
        <CheckBox
            hidden={props.aLoaderConfig.format !== "json"}
            id={"files-inferColumnTypes"}
            name={"Do you want to infer the column types?"}
            checked={props.aLoaderConfig.infer_column_types}
            onChange={() => props.setALoaderConfig({infer_column_types: !props.aLoaderConfig.infer_column_types})}/>
        <br/>
        <AutoLoaderSchemaOptions {...props} />
        </span>
    );

}