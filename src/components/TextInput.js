import React from "react";


export default function TextInput(props) {
    return (
        <div className="form__group" hidden={props.hidden}>
            <input
                className="form__field"
                placeholder={props.name}
                name={props.name}
                id={props.id}
                value={props.value}
                onChange={(e) => {
                    props.onChange(e)
                }}
            />
            <label
                className="form__label"
                htmlFor={props.id}>{props.name}</label>
        </div>
    )
}
