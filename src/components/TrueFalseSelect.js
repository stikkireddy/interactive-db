import Select from "react-select";
import React from "react";


const trueFalseOptions = [
    {value: false, label: "FALSE"},
    {value: true, label: "TRUE"}
]

export default function TrueFalseSelect(props) {
    return (
        <span>
        {props.name}
            <Select options={trueFalseOptions}
                    onChange={(e) => props.dispatch({
                        option: props.dispatchOption,
                        value: e.value
                    })}
            />
    </span>
    );
}