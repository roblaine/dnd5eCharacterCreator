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
  docker build ../client \
    --force-rm \
    --rm \
    -t asia.gcr.io/dnd-tracker-237708/client:latest \
    -f ../client/Dockerfile
elif [ "$TYPE" = "server" ]; then
  # build server
  echo "Building server"
  docker build ../server \
    --force-rm \
    --rm \
    -t asia.gcr.io/dnd-tracker-237708/server:latest \
    -f ../server/Dockerfile
else
  # Build both
  echo "Building backend and front end"
  echo "Building client"
  docker build ../client \
    --force-rm \
    --rm \
    -t asia.gcr.io/dnd-tracker-237708/client:latest \
    -f ../client/Dockerfile
  echo "Building server"
  docker build ../server \
    --force-rm \
    --rm \
    -t asia.gcr.io/dnd-tracker-237708/server:latest \
    -f ../server/Dockerfile
fi
