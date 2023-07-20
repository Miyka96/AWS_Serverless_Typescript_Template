import { compress } from 'lambda-compression';
import { APIGatewayProxyResultV2 } from 'aws-lambda';
import { APIGatewayProxyEventV2 } from 'aws-lambda';
import {dynamoGetUser} from '../../functions/dynamo/get_user'
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

export async function getUser(
    event: APIGatewayProxyEventV2
  ): Promise<APIGatewayProxyResultV2> {
  try {

    const dynamo = new DynamoDBClient({});
    const userID = event.queryStringParameters['userID'];
    const user = await dynamoGetUser(dynamo,userID);
    
    return compress(event,{
      headers: { "Access-Control-Allow-Origin": "*" , "Content-Type": "application/json"},
      statusCode: 200,
      body: JSON.stringify({
        status: "ok",
        content: {user: user},
      }),
    });
  } catch (error) {
    return compress(event,{
      headers: { "Access-Control-Allow-Origin": "*" , "Content-Type": "application/json" },
      statusCode: 500,
      body: JSON.stringify({
        status: "ko",
        error: error.toString(),
      }),
    });
  }
};
