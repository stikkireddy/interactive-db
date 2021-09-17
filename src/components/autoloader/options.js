import {isAws, isAzure} from "../CloudSwitch";
import {appendGB} from "./AutoLoaderBaseOptions";

export const autoloaderInitialState = {
    format: "csv",
    loadPath: null,
    schemaLocationPath: null,
    maxBytesPerTrigger: "",
    maxFilesPerTrigger: "",
    trigger_once: true,
    processing_time: {qty: null, units: null},
    include_existing_files: true,
    infer_column_types: false,
    schemaEvolutionMode: "addNewColumns",
    schema: true,
    schemaHints: false,
    schemaLocation: false,
    validateOptions: true,
    fileNotifications: false,
    fetchParallelism: 1,
    useDatabricksManagedQueues: true,
    azureQueueName: null,
    awsQueueUrl: null,
    scalaCode: null,
    pythonCode: null,
    cloud: "aws",
    awsAuthentication: "iamUser",
    iamUserAuth: {
        accessKey: null, secretKeyScope: null, secretKeyKey: null
    },
    iamRoleAuth: {
        roleArn: null,
        roleExternalId: null,
        roleSessionName: null,
        stsEndpoint: null},
    servicePrincipalAuth: {
        clientId: null,
        clientSecretScope: null,
        clientSecretKey: null,
        connectionString: null,
        resourceGroup: null,
        subscriptionId: null,
        tenantId: null
    }

}

export const customQueueInitialState = {
    useDatabricksManagedQueues: true,
    azureQueueName: null
}

function pythonBuilder(indent, ...args) {
    return args.map((builderFunc, idx) =>
        `  .${builderFunc.name}("${builderFunc.key}", ${builderFunc.value})`)
        .reduce((l, r) => l + " \n" + r)

}

function pythonOptionsBuilder(...args) {
    let options = args.map((option, index) => {
      let val = (option.stringify === true) ? "\""+option.value+"\"" : option.value
      return {name: "option", key: option.key, value: val}
    })
    return pythonBuilder(null,
        ...options)
}

function pythonVariables(...args) {
    return args.filter((e) => e != null).map((variable, idx) => {
        return `${variable.comment}\n${variable.name}=${variable.value}`
    }).reduce((l,r) => l+"\n\n"+r);
}

function onlyIf(any, bool, list) {
    if (list === true) {
        return bool === true ? any : [null]
    }
    return bool === true ? any : null
}

function schemaString(state, schemaVarName) {
    if (state.schema === false && ["csv","json"].includes(state.format)) {
        return ""
    }
    return `  .schema(${schemaVarName}) \n`
}

function loadString(loadPathVarName) {
    return `  .load(${loadPathVarName})`
}

function strIsNotEmpty(str) {
    return (str != null && str.length > 0)
}

function dbSecrets(scopeVar, keyVar) {
    return `dbutils.secrets.get(scope=${scopeVar}, key=${keyVar})`
}

export function buildPythonFromAutoLoaderState(state) {

    let schemaVar = "provided_schema"
    let schemaPathVar = "inferred_schema_path"
    let schemaHints = "schema_hints_str"
    let loadPathVar = "src_autoload_path"
    let servicePrincipalScopeName = "service_principal_scope_name"
    let servicePrincipalScopeKeyName = "service_principal_scope_key_name"
    let iamUserSecretScopeName = "iam_secret_scope_name"
    let iamUserSecretScopeKeyName = "iam_secret_scope_key_name"

    let useAzureDatabricksManagedNotifications = state.useDatabricksManagedQueues === true &&
        state.fileNotifications === true &&  isAzure(state.cloud)

    let useAwsDatabricksManagedNotifications = state.useDatabricksManagedQueues === true &&
        state.fileNotifications === true &&  isAws(state.cloud)

    let variables = pythonVariables({
            comment: "# setup schema using struct types or string syntax",
            name: schemaVar,
            value: "'<build schema object here>'"
        },
        {
            comment: "# setup autoloader source path for dir listing or events",
            name: loadPathVar,
            value: `'${state.loadPath}'`
        },
        onlyIf({
            comment: "# setup path in cloud storage where to store schema inference path for schema evolution",
            name: schemaPathVar,
            value: `'${state.schemaLocationPath}'`
        }, strIsNotEmpty(state.schemaLocationPath)),
        onlyIf({
            comment: "# secret scope name for azure service principal for autoloader",
            name: servicePrincipalScopeName,
            value: `'${state.servicePrincipalAuth.clientSecretScope}'`
        }, useAzureDatabricksManagedNotifications === true),
        onlyIf({
            comment: "# secret scope key name for azure service principal for autoloader",
            name: servicePrincipalScopeKeyName,
            value: `'${state.servicePrincipalAuth.clientSecretKey}'`
        }, useAzureDatabricksManagedNotifications === true ),
        onlyIf({
            comment: "# secret scope name for iam user secret key for autoloader",
            name: iamUserSecretScopeName,
            value: `'${state.iamUserAuth.secretKeyScope}'`
        }, useAwsDatabricksManagedNotifications === true && state.awsAuthentication === "iamUser"),
        onlyIf({
            comment: "# secret scope key name for iam user secret key for autoloader",
            name: iamUserSecretScopeKeyName,
            value: `'${state.iamUserAuth.secretKeyKey}'`
        }, useAwsDatabricksManagedNotifications === true && state.awsAuthentication === "iamUser" )
    )

    let awsIamUserAuthOptions = [
        ...onlyIf([
            {key: "cloudFiles.awsAccessKey", value: state.iamUserAuth.accessKey, stringify: true},
            {
                key: "cloudFiles.awsSecretKey",
                value: dbSecrets(iamUserSecretScopeName, iamUserSecretScopeKeyName),
                stringify: false
            },
        ],
            state.awsAuthentication === "iamUser" && useAwsDatabricksManagedNotifications, true),

    ]
    // onlyIf({key: "cloudFiles.awsSecretKey", value: state.iamUserAuth.secretKey, stringify: true},
    //     state.awsAuthentication === "iamUser" && useAwsDatabricksManagedNotifications),
    let awsIamRoleAuthOptions = [
        ...onlyIf([
                onlyIf({key: "cloudFiles.roleArn", value: state.iamRoleAuth.roleArn, stringify: true},
                    state.awsAuthentication === "iamRole"),
                onlyIf({key: "cloudFiles.roleExternalId", value: state.iamRoleAuth.roleExternalId, stringify: true},
                    state.awsAuthentication === "iamRole" && strIsNotEmpty(state.iamRoleAuth.roleExternalId)),
                onlyIf({key: "cloudFiles.roleSessionName", value: state.iamRoleAuth.roleSessionName, stringify: true},
                    state.awsAuthentication === "iamRole" && strIsNotEmpty(state.iamRoleAuth.roleSessionName)),
                onlyIf({key: "cloudFiles.stsEndpoint", value: state.iamRoleAuth.stsEndpoint, stringify: true},
                    state.awsAuthentication === "iamRole" && strIsNotEmpty(state.iamRoleAuth.stsEndpoint))
            ],
            useAwsDatabricksManagedNotifications,
            true
        ),
    ]

    let azureSPAuthOptions = [
        ...onlyIf([
                {key: "cloudFiles.clientId", value: state.servicePrincipalAuth.clientId, stringify: true},
                {
                    key: "cloudFiles.clientSecret",
                    value: dbSecrets(servicePrincipalScopeName, servicePrincipalScopeKeyName),
                    stringify: false
                },
                onlyIf({
                        key: "cloudFiles.connectionString",
                        value: state.servicePrincipalAuth.connectionString,
                        stringify: true
                    },
                    strIsNotEmpty(state.servicePrincipalAuth.connectionString)),
                {key: "cloudFiles.resourceGroup", value: state.servicePrincipalAuth.resourceGroup, stringify: true},

                {key: "cloudFiles.subscriptionId", value: state.servicePrincipalAuth.subscriptionId, stringify: true},

                {key: "cloudFiles.tenantId", value: state.servicePrincipalAuth.tenantId, stringify: true},

            ],
            useAzureDatabricksManagedNotifications,
            true
        ),
    ]

    let options = [
        // format
        {key: "cloudFiles.format", value: state.format, stringify: true},
        {key: "cloudFiles.includeExistingFiles", value: state.include_existing_files, stringify: true},
        onlyIf({key: "cloudFiles.inferColumnTypes", value: state.infer_column_types, stringify: true},
            state.infer_column_types === true),
        onlyIf({key: "cloudFiles.maxBytesPerTrigger", value: appendGB(state.maxBytesPerTrigger), stringify: true},
            strIsNotEmpty(state.maxBytesPerTrigger)),
        onlyIf({key: "cloudFiles.maxFilesPerTrigger", value: state.maxFilesPerTrigger, stringify: true},
            strIsNotEmpty(state.maxFilesPerTrigger)),
        onlyIf({key: "cloudFiles.schemaEvolutionMode", value: state.schemaEvolutionMode, stringify: true},
            ["csv", "json"].includes(state.format)),
        onlyIf({key: "cloudFiles.schemaLocation", value: schemaPathVar, stringify: false},
            state.schemaLocation === true),
        onlyIf({key: "cloudFiles.schemaHints", value: schemaHints, stringify: false},
            state.schemaHints === true),
        onlyIf({key: "cloudFiles.useNotifications", value: state.fileNotifications, stringify: true},
            state.fileNotifications === true),
        onlyIf({key: "cloudFiles.queueName", value: state.azureQueueName, stringify: true},
            state.useDatabricksManagedQueues === false && isAzure(state.cloud)),
        onlyIf({key: "cloudFiles.queueUrl", value: state.awsQueueUrl, stringify: true},
            state.useDatabricksManagedQueues === false && isAws(state.cloud)),
        ...awsIamUserAuthOptions,
        ...awsIamRoleAuthOptions,
        ...azureSPAuthOptions,
        {key: "cloudFiles.validateOptions", value: true, stringify: true},

    ].filter((e) => e != null)

    return variables + "\n\n" + "autoloader_df = (spark.readStream.format('cloudFiles') \n" +
        schemaString(state, schemaVar) +
    pythonOptionsBuilder(...options) + " \n" + loadString(loadPathVar) + ")"

}

