#!/bin/bash

[[ -n "$FRONTEND_UID" && "$FRONTEND_UID" -ne "$(id node -u)" ]] && usermod -u $FRONTEND_UID node
[[ -n "$FRONTEND_GID" && "$FRONTEND_GID" -ne "$(id node -g)" ]] && groupmod -g $FRONTEND_GID node

echo "node uid: $(id node -u)"
echo "node gid: $(id node -g)"

# NOTE: the endpoint of the maven docker image does not seem crucial, so we skip it
# gosu changes user from root to node (non-root)
# tini cleans up zombie processes
exec gosu node:node tini -- "$@"
