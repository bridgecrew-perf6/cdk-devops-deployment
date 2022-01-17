import { Duration, Stack, StackProps } from "aws-cdk-lib"
import * as s3 from 'aws-cdk-lib/aws-s3'
import { Construct } from "constructs"

export class DevOpsDeploymentStack extends Stack {
    constructor(scope: Construct, id: string, props: StackProps = {}) {
        super(scope, id, props);

        const deploymentBucket = new s3.Bucket(this, 'devops-deployment-bucket', {
            bucketName: 'prod-ready-cdk-devops-deployment',
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
            encryption: s3.BucketEncryption.S3_MANAGED,
            enforceSSL: true,
            versioned: true,
        });

        deploymentBucket.addLifecycleRule({
            enabled: true,
            expiration: Duration.days(90),
        });
    }
}