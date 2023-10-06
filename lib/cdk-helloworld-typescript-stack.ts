import * as cdk from "aws-cdk-lib";
import { Runtime, FunctionUrlAuthType } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import * as path from 'path';

export class CdkHelloworldTypescriptStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const helloWorldFunction = new NodejsFunction(this, "helloWorldFunctionHandler", {
      runtime: Runtime.NODEJS_LATEST,
      entry: path.join(__dirname, `/../functions/helloWorld.ts`),
      handler: 'helloWorld',
    })

    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: helloWorldFunction
    });
  }
}
