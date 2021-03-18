#!/usr/bin/env bash

# print error message and exit immediately
die() {
  local message="$1"

  echo "die: $message"
  exit 1
}

# source file or exit immediately
require() {
  local path="$1"

  echo "$path"

  if [[ ! -f "$path" ]]; then
    die "could not find file $path"
  fi

  source "$path" || exit 1
}

# ensure that environment variable is not empty or exit immediately
isset() {
  local name="$1"

  eval "[[ -n \$$name ]]" || die "variable $name is not set or empty"
}
