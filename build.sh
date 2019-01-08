#!/bin/bash
# build server
# build client
TYPE=$1
if [ "$TYPE" = "client" ]; then
  echo "Building client"
  docker build ./client -t spacebits/client:build -f client/Dockerfile.build
else
  echo "Building server"
  docker build ./server -t spacebits/server:build -f server/Dockerfile.build
fi
