#!/bin/sh

BASE=`dirname "$0"`/..
sed -i s/Docs\ version:\ [0-9]*/"Docs version: $(grep -oP '\d{3}$' version.txt)"/ "$BASE/files/docs/Docs.htm"

echo removing old docs
rm -rdf "$BASE/docs/docs"

echo copying new docs
cp -r "$BASE/files/docs" "$BASE/docs"
cp "$BASE/files/version.txt" "$BASE/docs/version.txt"

echo done.
