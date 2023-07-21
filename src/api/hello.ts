import { APIGatewayProxyResultV2 } from 'aws-lambda';
import { APIGatewayProxyEventV2 } from 'aws-lambda';

export async function hello(
    event: APIGatewayProxyEventV2
  ): Promise<APIGatewayProxyResultV2> {
  try {
    
    console.log(event);
    //your function 

    
    return {
      headers: { "Access-Control-Allow-Origin": "*" , "Content-Type": "application/json"},
      statusCode: 200,
      body: "hello world!",
    };
  } catch (error) {
    return{
      headers: { "Access-Control-Allow-Origin": "*" , "Content-Type": "application/json" },
      statusCode: 500,
      body: error.toString(),
    };
  }
};

