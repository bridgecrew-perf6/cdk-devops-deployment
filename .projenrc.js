const { awscdk } = require('projen');
const project = new awscdk.AwsCdkTypeScriptApp({
  authorAddress: 'cagingulsen@gmail.com',
  authorName: 'Kemal Cagin Gulsen',
  cdkVersion: '2.8.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-devops-deployment',
  description: 'An AWS CDK App that deploys AWS resources related to DevOps Deployments.',
  repositoryUrl: 'https://github.com/cagingulsen/cdk-devops-deployment',
  keywords: [
    'AWS CDK',
    'projen',
    'Typescript',
    'Deployment',
  ],

  github: false,

  // cdkDependencies: undefined,  /* Which AWS CDK modules (those that start with "@aws-cdk/") this app uses. */
  // deps: [],                    /* Runtime dependencies of this module. */
  // description: undefined,      /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                 /* Build dependencies for this module. */
  // packageName: undefined,      /* The "name" in package.json. */
  // release: undefined,          /* Add release management to this project. */
});
project.synth();