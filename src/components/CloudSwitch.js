import React from "react";

// function onValueChange(event, props) {
//     props.setState({
//         cloud: event.target.value
//     });
// }

export function isAzure(cloud) {
    return cloud === "azure"
}

export function isAws(cloud) {
    return cloud === "aws"
}

export function isGcp(cloud) {
    return cloud === "gcp"
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function Toggles(props) {
    const alternativeTexts = (props.hasOwnProperty("alternativeTexts")) ?
        props.alternativeTexts : props.options;
    return props.options.map((option, index) => {
        return (
            <span>
            <input type="radio" id={option} name={props.groupName}
                   value={option}
                   checked={props.selectedValue === option}
                   onChange={(event => props.setState(event, props))}
            />
            <label className="cloudLabel" htmlFor={option}>{capitalize(alternativeTexts[index])}</label>
            </span>
        );
    })
}

export function DefaultToggleSwitch(props) {

    return (
        <div className='radio-group-container'>
            <div className="radio-group">
                <Toggles
                    groupName={props.groupName}
                    options={props.options}
                    selectedValue={props.selectedValue}
                    setState={props.setState}
                    {...props}
                />
            </div>
        </div>
    );
}

export default function CloudSwitch(props) {
    return (
        <DefaultToggleSwitch
            groupName={"clouds"}
            options={["aws", "azure"]}
            selectedValue={props.state.cloud}
            {...props}
        />
    );
    // return (
    //     <div className='radio-group-container'>
    //         <div className="radio-group">
    //             <CloudToggles
    //                 clouds={["aws", "azure"]}
    //                 {...props} />
    //         </div>
    //     </div>
    // );
}