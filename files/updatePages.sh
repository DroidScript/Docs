#!/bin/sh

BASE=~/Projects/DroidScript/work/Docs

echo removing old docs
rm -rdf $BASE/docs/docs

echo copying new docs
cp -r $BASE/files/docs $BASE/docs
cp $BASE/files/version.txt $BASE/docs/version.txt

echo done.
