#!/bin/bash
# build server
# build client
TYPE=$1
if [ "$TYPE" = "client" ]; then
  echo "Building client"
  # build client, remove intermediate containers, tag as, and use the dockerfile
  docker build ./client --force-rm -t spacebits/dndtracker:client -f client/Dockerfile.build
else
  echo "Building server"
  docker build ./server --force-rm -t spacebits/dndtracker:server -f server/Dockerfile
fi
