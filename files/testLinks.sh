#!/bin/bash
DOCS=`dirname "$0"`/../docs/

declare -A MYCACHE

function testUrl {
    local -n CACHE=MYCACHE
    
    dir=""
    [ $# -gt 2 ] && dir="$1" && shift
    src=$1 && shift

    if [[ "$1" =~ http ]]
    then
        # cache urls
        h=`md5sum <<< "$1" | head -c 10`
        [ "$1" ] || echo "tf $dir - $src - $*"
        [ "${CACHE["$h"]}" == "1" ] && return
        CACHE["$h"]=1

        # check first body byte
        #sleep 0.5
        curl --output /dev/null --silent --connect-timeout 15 --header --fail "$1" ||
            curl --output /dev/null --silent --connect-timeout 15 --fail -r 0-0 "$1" ||
            echo -e "fail: $dir$src\turl : $1" &
    else
        # echo file $dir$1
        test -e $dir$1 || echo -e "fail: $dir$src\tfile: $dir$1"
    fi
}

IFS="
"
for f in `grep -rnEo 'href="[^#"].+?"' "$DOCS" | sed 's/\([^/]\+:[0-9]\+\):href="/ \1 /' | sed 's/[#"?].*//'`
do IFS=" "; testUrl $f; done

wait
echo done.