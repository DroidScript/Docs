#!/usr/bin/node

const fs = require("fs-extra");
const path = require("path");
const getComment = require("esprima-extract-comments");

const version = "v257"
const SRC = "markup/en";
const DST = "json/en/" + version;
const typx = "all,bin,dso,gvo,jso,fnc,lst,num,obj,str,?";
/** @type {Obj<string>} */
const types = {
    String: "str",
    Number: "num",
    Object: "obj",
    Boolean: "bin",
    Function: "fnc",
    Array: "lst",
    Any: "all",
    AppObject: "dso",
    unknown: "?"
}

// Replace backticks with forward slashes around text inside them
const pattern = /`([^`]*)`/g; // Matches any text between backticks
const replacement = '“$1”'; // Replaces backticks with slash before and after the matched text

/** @param {string} SOURCE_DIR */
function LoopFiles( SOURCE_DIR ) {
    // console.log("<---- Generating json for "+SOURCE_DIR+" ----->";

    if( !fs.existsSync(SOURCE_DIR) ) {
        return console.log( SOURCE_DIR + " does not exist!" );
    }

    
    let folder = path.basename(SOURCE_DIR);
    let outputFolder = path.join(DST, folder);
    let outputSamples = path.join(outputFolder, "samples");
    let outputDesc = path.join(outputFolder, "desc");

    let navsJson = path.join(SOURCE_DIR.substring(0, SOURCE_DIR.lastIndexOf("/")), folder+"-navs.json");

    // parent methods
    // let parent = false

    if( !fs.existsSync( outputFolder ) ) fs.mkdirSync( outputFolder )
    if( !fs.existsSync( outputSamples ) ) fs.mkdirSync( outputSamples )
    if( !fs.existsSync( outputDesc ) ) fs.mkdirSync( outputDesc )

    fs.readdir( SOURCE_DIR, async (err, files) => {
        /** @type {Obj<DSFunction>} */
        const objJson = {}

        for(let i=0; i<files.length; i++) {
            const file = files[i]
            const filePath = path.join(SOURCE_DIR, file)
            const stats = fs.statSync( filePath )
            if( stats.isFile() ) {
                if( file.includes(".js") ) {

                    let str = await fs.readFileSync( filePath, 'utf8' )
                    let isChild = new RegExp('\\bextends +ui.Control\\b', 'm').test(str)
                    
                    const strComments = getComment.file( filePath, {} );

                    let _fname = file.slice(0, -3);
                    
                    const objData = RenderComments(objJson, strComments, true, _fname);
                    /** @type {typeof objData} */
                    const data = JSON.parse( JSON.stringify(objData) );

                    // description
                    let desc = objJson[data.name].desc || ''
                    objJson[data.name].desc = "#"+data.name+".md"

                    desc += `<style>.samp { margin-top: 2px; } </style>`

                    // if( isChild ) props = [...parent.props, ...data.props]
                    // else props = data.props
                     
                    let popups = ""
                    const props = data.props

                    // bubble sort TODO: use array.sort()
                    for( let o=0; o<props.length-1; o++) {
                        for( let p=o+1; p<props.length; p++ ) {
                            if( props[p][1] < props[o][1] ) {
                                let tmp = props[p]
                                props[p] = props[o]
                                props[o] = tmp
                            }
                        }
                    }

                    if( props.length ) {
                        desc += "<h3>Properties</h3>"
                        desc += "These are the setter and getter properties for the "+data.name+" Component.\n"
                        for( let o=0; o<props.length; o++ ) {
                            const p = props[o]
                            p[2] = extractBacktickStrings(p[2]);
                            let id = p[1].toLowerCase().trim()+"-"+(o*5)
                            desc += `<div class="samp"><a href="#${id}" data-transition="pop" data-rel="popup" class="ui-link">${p[1]}</a></div>`
                            popups += `<div data-role="popup" id="${id}" class="ui-content"><p><span style="color:#4c4;">${p[0]}</span><br>${p[2]}</p></div>`
                        }
                    }

                    desc += "\n"+popups;

                    // write description.md file
                    const descFile = path.join( outputDesc, data.name+".md" )
                    await fs.writeFileSync( descFile, extractBacktickStringsDesc(desc.trim()) )

                    // write sample.txt file
                    const sampleFile = path.join(outputSamples, data.name+".txt")
                    await fs.writeFileSync(sampleFile, data.samples)
                }
            }
            else
            {
                //console.log( "Sub-folder is not rendered" )
            }
        }

        let objJsonFile = path.join(outputFolder, "obj.json");
        await fs.writeFileSync(objJsonFile, JSON.stringify(objJson, null, 2));

        // copy navs.json file for the namespace
        if( fs.existsSync(navsJson) ) {
            fs.copy(navsJson, path.join(outputFolder, "navs.json"), err => {
                if( err ) {
                    console.error('Error copying file:', err);
                }
            });
        }
    });
}

/**
 * @param {Obj<DSFunction>} objJson
 * @param {import('esprima').Token[]} tokens
 * @param {boolean} cmp
 * @param {string} [name]
 */
function RenderComments(objJson, tokens, cmp, name = "") {
    let isCA = false;
    objJson[name] = {};
    let func = objJson[name];
    
    let samples = "";
    /** @type {string[][]} */
    let props = [];
    /** @type {Obj<DSFunction>} */
    let json = {}, afterCmpParam = false;
    tokens.forEach( (c, i) => {
        if(c.type == "BlockComment") {
            const DescriptionPattern = /[#@]\s*[Dd]escription/;
            const SamplePattern = /[#@]\s*[Ss]ample/;

            if( c.value.toLowerCase().includes("#example") ) {
                let _x = c.value.trim().split("\n")
                samples += "\n\n"
                samples += `<sample${_x[0].split("#Example")[1].trim().replace("-","") }>\n`
                samples += _x.splice( 1, _x.length-1 ).join("\n")
                samples += "\n</sample>"
            }
            else if( c.value.includes( '```' ) ) {}
            
            // Description.md
            else if( DescriptionPattern.test(c.value) ) {
                let _desc = c.value.substring( c.value.indexOf("\n") );
                func.desc += `${_desc}`;
            }

            // Sample.txt
            else if( SamplePattern.test(c.value) ) {
                let _samp = c.value.slice( c.value.indexOf("\n")+1 )
                samples += `\n\n${_samp}\n\n`
            }

            else {
                const cmt = c.value.split( /\r?\n/ );
                isCA = false;
                /** @type {DSMethod} */
                let met = {
                    name: "",
                    pNames: [],
                    pTypes: [],
                    shortDesc: "",
                    desc: ""
                };

                for(let j=0; j<cmt.length; j++) {
                    const line = cmt[j].trim();
                    if( line.includes("###") ) {
                        //isCA = false
                        const method = line.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");

                        json[method] = met = {
                            pNames: [],
                            pTypes: [],
                            shortDesc: method,
                            desc: ""
                        }
                        // if( parent && parent[method] ) {
                        //     delete parent[method];
                        // }
                    }

                    else if( line.includes("##") ) {
                        // met += line;
                    }

                    else if( line.includes("@prop") ) {
                        //isCA = false
                        let p = extractParamDef( line )
                        props.push( p )
                    }

                    else if( (line.includes("@param") && met) || (line.includes("@param") && isCA)) {
                        let _l = line.split("@param")[1].trim();
                        let p = extractParams(_l);
                        let isFunc = false, _d;
                        p[2] = p[2].replace(/\\n/g, '\n') //.replace(pattern, replacement);
                        if(p[2].includes("--->") || p[0].includes("unction")) {
                            _d = formatDef(p[2].split("--->")[1]||"");
                            p[2] = p[2].split("--->")[0];
                            p[2] = extractBacktickStrings( p[2] );
                            isFunc = true;
                        }
                        else if( p[0] == "fnc_json") {
                            isFunc = true;
                            _d = JSON.parse(p[2]);
                        }
                        else {
                            let k = p[0].split(/[_-]/)[0];
                            if(types[p[0]]) _d = types[p[0]];
                            else if(typx.includes(k)) _d = p[0];
                            else _d = "obj"
                            if(p[2]) {
                                p[2] = extractBacktickStrings( p[2] );
                                _d += "-"+p[2];
                            }
                        }

                        if( isCA ) {
                            if( !func.pNames ) func.pNames = [];
                            if( !func.pTypes ) func.pTypes = [];
                            func.pNames = [ ...func.pNames, p[1] ]
                            func.pTypes = [ ...func.pTypes, _d ]
                            afterCmpParam = true
                        }
                        else {
                            met.pNames = [ ...met.pNames, p[1] ]
                            met.pTypes = [ ...met.pTypes, _d ]
                        }
                    }

                    else if(line.includes("#") && !func.desc) {
                        isCA = true;
                        func = objJson[name] = {
                            desc: "",
                            pNames: [],
                            pTypes: [],
                            shortDesc: name,
                            subf: {}
                        };
                        // if( parent && isChild ) {
                        //     met.subf = JSON.parse(JSON.stringify(parent));
                        // }
                    }

                    else if( (line.includes("@return") && met) || (line.includes("@return") && isCA) ) {
                        let f = line.split("returns")[1].trim(), g = f.split(/[_\s-]/)[0], v;
                        if( types[g] ) v = types[g];
                        else if(typx.includes(g)) v = f;
                        else v = "obj-"+f;
                        if( isCA ) func.retval = v;
                        else met.retval = v;
                    }

                    else if( (line.includes( "@img" ) && met ) || (line.includes( "@img" ) && isCA ) ) {}
                    else if( (line.includes( "@@" ) && met ) || (line.includes( "@@" ) && isCA ) ) {}

                    else if( (line.includes( "$$" ) && met ) || (line.includes( "$$" ) && isCA ) ) {
                        if(isCA && afterCmpParam) {
                            const match = line.match(/\$\$(.*?)\$\$/) || [];
                            func.desc += ('\n<js>'+match[1].replace(/:/g,' : ')+'</js>\n');
                        }
                    }

                    else if( line.includes("@abbrev") ) {
                        func.abbrev = line.split("abbrev")[1].trim();
                    }

                    else if( (line.trim() == "*" && met) || (line.trim() == "*" && isCA ) ) {
                        if( isCA ) func.desc += "\n"
                        else met.desc += "\n"
                    }

                    else if(met || isCA) {
                        if( isCA ) {
                            func.desc += "\n\n"+line.trim().replace(/^\*/, '');
                            // isCA = false;
                        } else
                            met.desc += "\n\n"+line.trim().replace(/^\*/, '');
                    }
                }
            }
        }
    });

    if( cmp && Object.keys(json).length ) {
        func.subf = {...func.subf, ...json};
    }
    return {
        json,
        name,
        samples,
        objJson: func,
        props
    }
}

/** @param {string} str */
function extractParamDef( str )
{
    let s = str.split( "}" ).map( (/** @type {string} */ l) => { return l.trim() } )
    let n = s[1].slice(0, s[1].trim().indexOf( ' ' ) + 1 )
    let d = s[1].slice( n.length )
    let t = s[0].split("{")[1].trim()
    return [ t, n, d ]
}

/** @param {string} sline */
function formatDef( sline ) {
    if( !sline ) return "";
    /** @type {string[]} */
    let pNames = [];
    /** @type {string[]} */
    let pTypes = [];
    let line = sline.split("@arg");
    line.map( function(/** @type {string} */ l) {
        if( !l.trim() ) return;
        let r = extractParamDef(l);
        pNames.push(r[1]);
        pTypes.push( types[r[0]] ? types[r[0]]+"-"+r[2] : "obj-"+r[2] );
    });
    return { pNames, pTypes };
}

/** @param {string} str */
function extractParams(str) {
    const regex = /{([^}]+)}\s*(\S+)\s*(.*)/;
    const matches = str.match(regex);
    if (matches) {
        const word1 = matches[1];
        const word2 = matches[2];
        const word3 = matches[3] ? matches[3].trim() : '';
        return [word1, word2, word3];
    } else {
        return ['', '', ''];
    }
}

/** replace backticks with a colored string
 * @param {string} str
 */
function extractBacktickStrings(str) {
    let finalStr = str + '';
    const regex = /`([^`]*)`/g;
    const matches = str.matchAll(regex);
    const style = "color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;";
    for (const match of matches) {
        //match[1]
        finalStr = finalStr.replace('`'+match[1]+'`', `<span style="${style}">${match[1]}</span>`);
    }
    finalStr = finalStr.replace(/,/gm, "&#44;");
    return finalStr;
}

/** @param {string} str */
function extractBacktickStringsDesc(str) {
    let finalStr = str + '';
    const regex = /`([^`]*)`/g;
    const matches = str.matchAll(regex);
    const style = "color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;";
    for(const match of matches) {
        //match[1]
        finalStr = finalStr.replace('`'+match[1]+'`', `<span style="${style}">${match[1]}</span>`);
    }
    return finalStr;
}

fs.readdir(SRC, { withFileTypes: true }, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    // Filter the files to only include directories (subdirectories)
    const folders = files.filter(file => file.isDirectory());
    folders.forEach(folder => {
        const folderPath = path.join(SRC, folder.name);
        LoopFiles( folderPath );
    });
});