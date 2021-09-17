import CheckBox from "../CheckBox";
import React from "react";
import TextInput from "../TextInput";
import {customQueueInitialState} from "./options";
import CloudSwitch, {DefaultToggleSwitch, Toggles} from "../CloudSwitch";
import DividerTopic from "../DividerTopic";

function AwsIamUserOptions(props) {
    if (props.aLoaderConfig.cloud !== "aws" || props.aLoaderConfig.awsAuthentication !== "iamUser") {
        return null;
    }
    let nestedKey = "iamUserAuth"
    let fields = [
        ["accessKey", "IAM Access Key", nestedKey, props],
        ["secretKeyScope", "IAM Secret Key Databricks Secret Scope",  nestedKey, props],
        ["secretKeyKey", "IAM Secret Key Databricks Secret Scope Key",  nestedKey, props],
    ]
    return (
        <span>
            {fields.map((params) => generateTextOptions(...params))}
        </span>
    )
}

function getNestedValuePayload(option, value, state, nestedKey) {
    let payload = {}
    let copyOfObj = {...state[nestedKey]}
    Object.keys(copyOfObj).forEach((key) => (option === key) ? copyOfObj[key] = value : null)
    payload[nestedKey] = copyOfObj
    return payload
}

function generateTextOptions(name, label, nestedKey, props) {
    return <TextInput
        hidden={false}
        id={name}
        name={label}
        value={props.aLoaderConfig[nestedKey][name]}
        onChange={(e) => props.setALoaderConfig(getNestedValuePayload(name,
            e.target.value,
            props.aLoaderConfig,
            nestedKey))}/>
}

function AwsIamRoleOptions(props) {
    if (props.aLoaderConfig.cloud !== "aws" || props.aLoaderConfig.awsAuthentication !== "iamRole") {
        return null;
    }
    let nestedKey = "iamRoleAuth"
    let fields = [
        ["roleArn", "IAM Role ARN", nestedKey, props],
        ["roleExternalId","IAM Role External Id (optional)",  nestedKey, props],
        ["roleSessionName","IAM Role Session Name (optional)",  nestedKey, props],
        ["stsEndpoint", "STS Endpoint (optional)", nestedKey, props],
    ]
    return (
        <span>
            {fields.map((params) => generateTextOptions(...params))}
        </span>
    )
}

function AzureServicePrincipalOptions(props) {
    if (props.aLoaderConfig.cloud !== "azure") {
        return null;
    }
    let nestedKey = "servicePrincipalAuth"
    let fields = [
        ["clientId", "Service Principal Client ID (application Id)", nestedKey, props],
        ["clientSecretScope","Service Principal Secret Databricks Scope Name",  nestedKey, props],
        ["clientSecretKey","Service Principal Secret Databricks Scope Key Name",  nestedKey, props],
        ["connectionString", "Connection String (optional in DBR 8.1)", nestedKey, props],
        ["resourceGroup", "Azure Storage Account Resource Group", nestedKey, props],
        ["subscriptionId","Azure Resource Group Subscription",  nestedKey, props],
        ["tenantId","Azure Service Principal Tenant Id",  nestedKey, props],
    ]
    return (
        <span>
            {fields.map((params) => generateTextOptions(...params))
            }
        </span>
    )
}

function AwsAutoloaderAuthenticationOptions(props) {
    if (props.aLoaderConfig.cloud !== "aws") {
        return null;
    }
    return (
        <span>
            <br/>
                <DefaultToggleSwitch
                    groupName={"awsAuthOptions"}
                    alternativeTexts={["IAM User (Programatic)", "IAM Role"]}
                    options={["iamUser", "iamRole"]}
                    selectedValue={props.aLoaderConfig.awsAuthentication}
                    setState={(e) => props.setALoaderConfig({awsAuthentication: e.target.value})}
                    {...props}
                />
        </span>
    );
}

function CustomQueueNotificationOptions(props) {
    if (props.aLoaderConfig.useDatabricksManagedQueues === true || props.aLoaderConfig.cloud === "gcp") {
        return null;
    }

    const [name, value, changeFunc] = ((props) => {
            if (props.aLoaderConfig.cloud === "azure") {
                let f =(e) => props.setALoaderConfig({azureQueueName: e.target.value})
                return ["Azure Queue Name: ", props.aLoaderConfig.azureQueueName,
                    f]

            } else if (props.aLoaderConfig.cloud === "aws") {
                let f = (e) => props.setALoaderConfig({awsQueueUrl: e.target.value})
                return ["AWS SQS Url: ", props.aLoaderConfig.awsQueueUrl,
                    f]
            } else {
                return [null, null, (e) => e]
            }
        }
    )(props);

    return (
        <span>
            <br/>
                <TextInput
                    hidden={false}
                    id={"queueContent"}
                    name={name}
                    value={value}
                    onChange={(e) => changeFunc(e)}/>
        </span>
    );
}

function DatabricksManagedQueueOptions(props) {
    if (props.aLoaderConfig.useDatabricksManagedQueues === false) {
        return null;
    }
    return (<span>
        <AwsAutoloaderAuthenticationOptions {...props} />
        <AwsIamUserOptions {...props} />
        <AwsIamRoleOptions {...props} />
        <AzureServicePrincipalOptions {...props} />
    </span>)
}

function CloudSpecificNotificationOptions(props) {
    if (!props.aLoaderConfig.fileNotifications) {
        return null;
    }
    return (
        <span>
            <DividerTopic content={"Cloud Specific Options"}/>
                <CloudSwitch
                    state={props.aLoaderConfig}
                    setState={(e) => props.setALoaderConfig({cloud: e.target.value})}
                />
                <CheckBox
                    hidden={props.aLoaderConfig.cloud === "gcp"}
                    id={"customQueue"}
                    name={"Do you databricks to manage all file notifications?"}
                    checked={props.aLoaderConfig.useDatabricksManagedQueues}
                    onChange={() => props.setALoaderConfig({useDatabricksManagedQueues: !props.aLoaderConfig.useDatabricksManagedQueues})}/>
            <CustomQueueNotificationOptions {...props} />
            <DatabricksManagedQueueOptions {...props} />
        </span>
    );
}

export default function AutoLoaderFileNotificationOptions(props) {
    return (
        <span>
        <CheckBox
            hidden={false}
            id={"fileNotifications"}
            name={"Do you want to use file notification triggers?"}
            checked={props.aLoaderConfig.fileNotifications}
            onChange={() => props.setALoaderConfig({
                fileNotifications: !props.aLoaderConfig.fileNotifications,
                ...customQueueInitialState
            })}/>
            <br/>
            <CloudSpecificNotificationOptions {...props} />
        </span>
    );
}