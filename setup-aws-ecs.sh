#!/bin/bash
# Create the cluster
APP_NAME=$1
# check for an app name, if there isn't one, output usage
if [ -z "${APP_NAME}" ]; then
  echo "Usage: ./setup-aws-ecs.sh APP_NAME"
else
  echo "Creating app $APP_NAME:"
  aws ecs create-cluster --cluster-name $APP_NAME

  # deploy
  echo "Deploying..."
  # aws ecs compose --file aws-compose.yml up

  # check
  echo "Describing cluster $APP_NAME:"
  aws ecs describe-clusters --clusters $APP_NAME
fi
