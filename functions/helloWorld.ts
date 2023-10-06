import { Handler } from "aws-lambda";

export const helloWorld: Handler = async (event, context) => {
  const method = event.httpMethod

  if (method === "GET") {
    return {
      statusCode: 200,
      body: "Hello mate, its working",
    };
  } else {
    return {
      statusCode: 400,
      body: "Not a valid operation",
    };
  }
};
