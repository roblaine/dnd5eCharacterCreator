#!/bin/bash
./build.sh server
./build.sh client
# Push the images to docker hub after they're built
docker push spacebits/dndtracker:client
docker push spacebits/dndtracker:server
