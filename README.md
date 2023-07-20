# AWS_Serverless_Typescript_Template

A sample template to create applications with serverless framework in Typescript language.

# 🚩Getting Started
1. Create an AWS Account
(If you already have a verified AWS account you can use, then please skip ahead. 
Otherwise, you will need to go to the AWS account creation page and follow the instructions)
https://portal.aws.amazon.com/billing/signup#/start/email

## 📦 Install
1. Clone this repository
2. Run npm install
3. Edit the serverless.yml file with your app info (follow the comments! I hope that my examples will be useful! 🌻)


## 🛵 Deployment

This template includes an example [GitHub actions](https://github.com/features/actions) [configuration file](.github/workflows/main.yml) which can unlock a virtuous cycle of continuous integration and deployment
( i.e all tests are run on prs and every push to main results in a deployment).

GitHub actions is managed simply by the presence of a file checked into your repository. To set up GitHub Actions to deploy to AWS you'll need to store a `AWS_ACCESS_KEY_ID` `AWS_SECRET_ACCESS_KEY` used for aws deployment in your repositories secrets https://github.com/{username}/{RepositoryName}/settings/secrets

Add your changes to git and push them to GitHub.

Finally, open https://github.com/{username}/{RepositoryName}/actions in your browser and grab a bucket of popcorn 🍿.

## ℹ️  additional information / useful links
A complete guide to serverless framwork:
https://www.serverless.com/framework/docs/getting-started

A very useful guide to create and manage aws credentials 
(❗️Remember that you can use the guide up to point "Creating AWS Access Keys".
After that, the use of credentials and the execution of commands (ex. sls deploy) 
will be automatic if you insert repository secrets and run correctly github actions)

https://www.serverless.com/framework/docs/providers/aws/guide/credentials# AWS_Serverless_Typescript_Template
