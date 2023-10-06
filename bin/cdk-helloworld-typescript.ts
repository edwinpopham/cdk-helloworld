#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkHelloworldTypescriptStack } from '../lib/cdk-helloworld-typescript-stack';

const app = new cdk.App();
new CdkHelloworldTypescriptStack(app, 'CdkHelloworldTypescriptStack');
