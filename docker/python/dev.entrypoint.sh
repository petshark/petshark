#!/bin/bash

[[ -n "$PYTHON_UID" && "$PYTHON_UID" -ne "$(id python -u)" ]] && usermod -u $PYTHON_UID python
[[ -n "$PYTHON_GID" && "$PYTHON_GID" -ne "$(id python -g)" ]] && groupmod -g $PYTHON_GID python

echo "python uid: $(id python -u)"
echo "python gid: $(id python -g)"

# NOTE: the endpoint of the maven docker image does not seem crucial, so we skip it
# gosu changes user from root to python (non-root)
# tini cleans up zombie processes
exec gosu python:python tini -- "$@"
