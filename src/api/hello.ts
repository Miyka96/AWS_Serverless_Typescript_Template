import { compress } from 'lambda-compression';
import { APIGatewayProxyResultV2 } from 'aws-lambda';
import { APIGatewayProxyEventV2 } from 'aws-lambda';

export async function hello(
    event: APIGatewayProxyEventV2
  ): Promise<APIGatewayProxyResultV2> {
  try {

    //your function 

    
    return compress(event,{
      headers: { "Access-Control-Allow-Origin": "*" , "Content-Type": "application/json"},
      statusCode: 200,
      body: JSON.stringify({
        status: "ok",
        content: "hello! world!",
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

