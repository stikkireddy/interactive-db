import React from "react";


export default function CheckBox(props) {
    return (
        <span hidden={props.hidden}>
            <input type="checkbox"
                id={props.id}
                checked={props.checked}
                value={props.checked}
                onChange={(s) => {
                    props.onChange()
                }}
            />
            <label htmlFor={props.id}>&nbsp;&nbsp;{props.name}</label>
        </span>
    )
}
