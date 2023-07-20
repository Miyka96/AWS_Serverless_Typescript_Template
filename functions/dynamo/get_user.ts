import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";
import { User } from "../../models/user";
const { unmarshall } = require("@aws-sdk/util-dynamodb");

export async function dynamoGetUser(dynamo: DynamoDBClient, userID: string): Promise<User> {
    const command = new GetItemCommand(
        {
            TableName: "Users",
            Key:{'userID':{'S':userID}}
        });
    const resp = await dynamo.send(command);

    return unmarshall(resp.Item);
}