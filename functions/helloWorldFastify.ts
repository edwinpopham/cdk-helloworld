import awsLambdaFastify from "@fastify/aws-lambda";
import app from "../src/app";

const proxy = awsLambdaFastify(app);

export async function helloWorldFastify(event: any, context: any) {
  return await proxy(event, context);
}