import  React from "react";
import Select from 'react-select';
import {useCustomContext} from "../../pages/Ctx";
import {autoloaderOptionActions} from "./options";

const autoloaderFormatOptions = [
    {value: "csv", label: "CSV"},
    {value: "avro", label: "Avro"},
    {value: "binaryFile", label: "Binary Files"},
    {value: "json", label: "JSON"},
    {value: "orc", label: "ORC"},
    {value: "parquet", label: "Parquet"},
    {value: "text", label: "Text"}
]

function AutoloaderFormatOptions() {
    const { state, dispatch } = useCustomContext();
    return (<div>
        Data Format:
        <Select defaultValue={autoloaderFormatOptions[0]}
            options={autoloaderFormatOptions}
            onChange={(e) =>dispatch({option: autoloaderOptionActions._format, value: e.value})}
        />
    </div>);
}

export default AutoloaderFormatOptions