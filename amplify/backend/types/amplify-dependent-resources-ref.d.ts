export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "freegoreact26705d96": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        },
        "userPoolGroups": {
            "adminsGroupRole": "string",
            "managersGroupRole": "string",
            "moderatorsGroupRole": "string"
        }
    },
    "function": {
        "AdminQueries550489fb": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "freegoreact": {
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        },
        "AdminQueries": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    },
    "analytics": {
        "freegoreactpinpoint": {
            "Region": "string",
            "Id": "string",
            "appName": "string"
        }
    }
}