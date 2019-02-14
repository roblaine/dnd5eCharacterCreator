#!/bin/bash
./build.sh

# tag the containers
./docker-tag-ecr.sh

# Push the images to docker hub after they're built
./docker-push-ecr.sh
