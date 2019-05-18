#!/bin/bash
## tag each build for ECR
docker tag spacebits/dndtracker:client 469307158432.dkr.ecr.ap-southeast-2.amazonaws.com/spacebits/dndtracker:client
docker tag spacebits/dndtracker:server 469307158432.dkr.ecr.ap-southeast-2.amazonaws.com/spacebits/dndtracker:server
