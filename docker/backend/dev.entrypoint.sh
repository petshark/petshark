#!/bin/bash

[[ -n "$BACKEND_UID" && "$BACKEND_UID" -ne "$(id backend -u)" ]] && usermod -u $BACKEND_UID backend
[[ -n "$BACKEND_GID" && "$BACKEND_GID" -ne "$(id backend -g)" ]] && groupmod -g $BACKEND_GID backend

echo "backend uid: $(id backend -u)"
echo "backend gid: $(id backend -g)"

# NOTE: the endpoint of the maven docker image does not seem crucial, so we skip it
# gosu changes user from root to backend (non-root)
# tini cleans up zombie processes
exec gosu backend:backend tini -- "$@"
