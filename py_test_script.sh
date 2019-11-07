#!/bin/bash

if [ "$1" != "" ]; then
if [ "$2" == "-cat" ]; then
  cat $1
fi
  repeat="y"
  while [ "$repeat" == "y" ]
    do
    python3 $1
    echo "Repeat test? (y/n):"
    read repeat
  done
else
  echo "syntax: py_test_script.sh (path/filename.py) (-cat)"
fi

