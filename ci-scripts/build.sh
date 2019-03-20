#!/bin/bash
# usage:
# ./build.sh server
# OR
# ./build.sh client
TYPE=$1
#build client
if [ "$TYPE" = "client" ]; then
  echo "Building client"
  # build client, remove intermediate containers, tag as, and use the dockerfile
  docker build ../client --force-rm -t spacebits/dndtracker:client -f ../client/Dockerfile.build
fi
# build server
if [ "$TYPE" = "server" ]; then
  echo "Building server"
  docker build ../server --force-rm -t spacebits/dndtracker:server -f ../server/Dockerfile
fi
# Build both
if [ "$TYPE" = "" ]; then
  echo "Building client"
  docker build ../client --force-rm -t spacebits/dndtracker:client -f ../client/Dockerfile.build
  echo "Building server"
  docker build ../server --force-rm -t spacebits/dndtracker:server -f ../server/Dockerfile
fi
