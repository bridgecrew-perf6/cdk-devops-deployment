import { App } from "aws-cdk-lib";
import { DevOpsDeploymentStack } from './devops-deployment-stack';

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new DevOpsDeploymentStack(app, 'devops-deployments-stack', { env: devEnv });

app.synth();