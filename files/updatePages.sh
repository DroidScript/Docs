#!/bin/sh

BASE=`dirname "$0"`/..
sed -i s/Docs\ version:\ [0-9]*/"Docs version: $(tail -c3 version.txt)"/ "$BASE/files/out/"/*/*/Docs.htm

echo removing old docs
rm -rdf "$BASE/docs"/*

echo copying new docs
mkdir -p "$BASE/docs/"
cp -r "$BASE/files/out"/* "$BASE/files/version.txt" "$BASE/docs"

echo done.
