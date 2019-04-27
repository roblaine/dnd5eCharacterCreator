#!/bin/bash
## tag each build for gcr
docker tag spacebits/dndtracker:client asia.gcr.io/dnd-tracker-237708/client:latest
docker tag spacebits/dndtracker:server asia.gcr.io/dnd-tracker-237708/server:latest
