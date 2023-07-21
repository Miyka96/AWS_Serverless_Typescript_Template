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
    
    return {
      headers: { "Access-Control-Allow-Origin": "*" , "Content-Type": "application/json"},
      statusCode: 200,
      body: JSON.stringify(user)
    };
  } catch (error) {
    return{
      headers: { "Access-Control-Allow-Origin": "*" , "Content-Type": "application/json" },
      statusCode: 500,
      body: error.toString(),
    };
  }
};
