import * as cdk from "aws-cdk-lib";
import { Template, Match } from "aws-cdk-lib/assertions";
import * as CdkHelloworldTypescriptStack from "../lib/cdk-helloworld-typescript-stack";

test("it has RestApi named Endpoint", () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkHelloworldTypescriptStack.CdkHelloworldTypescriptStack(
    app,
    "MyTestStack"
  );
  // THEN

  const template = Template.fromStack(stack);

  console.log(template);

  template.hasResourceProperties("AWS::ApiGateway::RestApi", {
    Name: "Endpoint",
  });
});
