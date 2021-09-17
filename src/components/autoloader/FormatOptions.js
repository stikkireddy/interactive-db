import  React from "react";
import Select from 'react-select';

const autoloaderFormatOptions = [
    {value: "csv", label: "CSV"},
    {value: "avro", label: "Avro"},
    {value: "binaryFile", label: "Binary Files"},
    {value: "json", label: "JSON"},
    {value: "orc", label: "ORC"},
    {value: "parquet", label: "Parquet"},
    {value: "text", label: "Text"}
]

function AutoloaderFormatOptions(props) {
    return (<div>
        What format is your data in:
        <Select defaultValue={autoloaderFormatOptions[0]}
            options={autoloaderFormatOptions}
            onChange={(e) => props.setALoaderConfig({ format: e.value })}
        />
    </div>);
}

export default AutoloaderFormatOptions