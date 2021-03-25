#!/usr/bin/env bash

# root directory of this project
ROOT=$(dirname $(dirname $(dirname $(realpath $0))))

# dependencies
source "$ROOT/bin/functions.sh" || exit 2

# load .env
require "$ROOT/.env"

# build docker image
docker build --file "$ROOT/docker/backend/prod.Dockerfile" --tag ps-backend "$ROOT"
