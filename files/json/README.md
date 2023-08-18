
# Docs JSON Format Documentation

## Table of Contents

- [Editing Docs using raw JSON files](#editing-docs-using-raw-json-files)
	- [Table of Contents](#table-of-contents)
	- [File Structure](#file-structure)
		- [Source Files](#source-files)
	- [JSON Format](#json-format)
		- [JSON Examples](#json-examples)
		- [Types](#types)
		- [Type Popups](#type-popups)
		- [Cross-Doc References](#cross-doc-references)
	- [Description Format](#description-format)
		- [Types](#types-1)
		- [Samples](#samples)
		- [Inline Code Areas](#inline-code-areas)
		- [Custom Constructor positions](#custom-constructor-positions)
		- [Custom Sample positions](#custom-sample-positions)
	- [Generating](#generating)
	- [Update Github Pages](#update-github-pages)

## File Structure

The generator has a specific file structure you have to use to be able to generate the docs. Each of them starts with the scope name (ie. app or gfx) which is later used to identify the docs to generate.

- **conf.json**:
	general generation info (languages and scopes)
- **docs-base**:
	the html/css/js source basis for every language
- **\<lang\>**/:
	encapsulate sources for a specific language
- \<lang\>/**\<ver\>**/\<scope\>:
	encapsulate sources for a specific version
- \<lang\>/\<ver\>/**\<scope\>**:
	the generation sources for a specific scope

```bash
files/
├─ conf.json    # general generation info (languages and scopes)
├─ docs-base/   # the html/css/js source basis for every language
└─ <lang>/      # encapsulate sources for a specific language
   └─ <ver>/      # encapsulate sources for a specific version
      └─ <scope>/   # the generation sources for a specific scope
```

Each scope in the `<lang>/<ver>/<scope>` directory can have following source files:

```bash
files/<lang>/<ver>/<scope>/
├─ obj.json    # method definitions
├─ base.json   # template definitions
├─ navs.json   # scope categories for navigation
├─ desc/<member>.md      # large description files
└─ samples<member>.txt   # large code examples
```

Note: in fact, no file is reqired all the times. Following rules apply:
- If _obj.json_ is defined, it can make use of _desc/\<member\>.md_ **and** _base.json_
- If _obj.json_ is **not** defined, the description files in the _desc/_ directory will be used as scope contents
- If _navs.json_ is **not** defined, the scope members (from _obj.json_ or _desc/_) will be listed as flat index (similar to the 'All' category)

### Source Files
- **obj.json**:
	The main generation source in [JSON Format](#JSON-Format)
- **base.json**:
	Template definitions for often needed members or parameters. The keys are 10 digit IDs starting with a '#' which are used in obj.json to avoid duplicated definitions. (See [Note 2](#JSON-Format-Note2))
- **navs.json**:
	A structure representing navigators to make it easy for users to quickly find a certain method of the scope. There will always be a 'All' category added which includes all scope members.<br>
    You can use one level of categorization using `"catname": ["subcat"]` or `"catname":"url"` pairs:
	```js
	{
		"category1": {
			"subcategory1": ["member1", "member2" /* ... */ ],
			"subcategory2": "<customUrl>"
		 	/* ... */
		},
		"category2": ["member1", "member2" /* ... */ ]
        "category3": "customfile.htm"
		/* ... */
	}
	```


- **desc/\<member\>.md**:
	Put large descriptions of scope members here
- **samples/\<member\>.txt**:
	A file which includes large example codes
    ```html
	// an unnamed sample
	<sample>
	/* Your sample code> */
	</sample>

	// a named sample
	<sample Name>
	/* Your sample code> */
	</sample>
	```

## JSON Format

Each member in the obj.json file can have following properties:

```js
{
	"<membername>" : {           // the name used for sorting and filtering
	    "desc": "<description>", /* or "#<membername>.md" */
	    "isval": true,  		 // indicates that member is not a function
	    "name": "<membername>",  // displayed member name
	    "pNames": ["<name1>", "<name2>" /* ... */ ], // parameter names
	    "pTypes": ["<type1>", "<type2>" /* ... */ ], // parameter types
	    "retval": "<type>",      // the type of the return value
	    "shortDesc": "<description>", // short description for info.json
	    "subfuncs": {            // submembers of the member
	        "<memName1>": {      /* a member object */ },
	        "<memName2>": "#id"  /* id from base.json */
	    }
	}
	"params": "#id",             // copy params from base.json, in place of pNames and pTypes
}
```
**Note 1**: 
<a href="#JSON-Format-Note1"></a>
some values are not required under certain conditions:
- `name` unless a custom name is used
- `desc` and `shortDesc` when there is no description needed (generated from name)
- `retval` if `void` / there is none
- `pNames` and `pTypes` if empty or `params` is specified
- `params` if `pNames` and `pTypes` are defined
- `subfuncs` if there are none
- `isval` if it is `false`

This leads to callback functions with no arguments to be representable solely by an empty object `{}`

**Note 2:**
<a href="#JSON-Format-Note2"></a>
You can override member names that are copied from obj.json by appending an exclamation mark `!` to the obj.json member name: `"customMemName!": "#id"`

### JSON Examples

<details>
<summary>Basic value</summary>

from [gfx/obj.json](https://github.com/SymDSTools/Docs/blob/db2a9f192295eb4f5a7bd78474ac21813f8931fd/files/en/gfx/obj.json#L132)
```json
{
    "aspect": {
		"desc": "The aspect ratio of the gfx container (display)",
		"isval": true,
		"retval": "num",
		"shortDesc": "The display aspect ratio"
	}
}
```
</details>

<details>
<summary>Basic method in <i>base.json</i> using a parameter reference</summary>

SetTween from [gfx/base.json](https://github.com/SymDSTools/Docs/blob/db2a9f192295eb4f5a7bd78474ac21813f8931fd/files/en/gfx/base.json#L101)
```json
{
    "#8929387454": {
        "desc": "Sets up tween methods and properties without playing it.",
        "params": "#2114624769",
        "shortDesc": "Setup tween methods"
    }
}
```
</details>

<details>
<summary>Basic Control using external markdown, base subf refs, callbacks and more</summary>

from [gfx/app.json](https://github.com/SymDSTools/Docs/blob/db2a9f192295eb4f5a7bd78474ac21813f8931fd/files/en/app/obj.json#L471)
```json
{
    "CreateButton": {
		"abbrev": "btn",
		"desc": "#CreateButton.md",
		"pNames": ["text", "width", "height", "options"],
		"pTypes": ["str", "num_frc", "num_frc", "str_com-FontAwesome,Html,Monospace,Normal|Aluminium|Gray|Lego,SingleLine,Custom,AutoShrink:Auto-shrinks text to fit,AutoSize:Auto-sizes text to fit,NoPad,FillX/Y,NoSound"],
		"retval": "dso-Button",
		"shortDesc": "Creates a button control",
		"subf": {
			"AdjustColor": "#1794786072",
			"Animate": "#8294739481",
            /* ... */
			"GetType": {
				"desc": "Returns the control class name.",
				"retval": "str-Button",
				"shortDesc": "Returns the control class name"
			},
            /* ... */
			"SetOnLongTouch": {
				"desc": "Define a callback function which is called when the button has been long pressed.",
				"pNames": ["callback"],
				"pTypes": [{}],
				"shortDesc": "Called when the button was long pressed"
			},
            /* ... */
			"Show": "#1243391562",
			"Tween": "#2114624769"
		}
	}
}
```
</details>


### Types
Types are represented by a 3 digit identifier. The following base types are available:
- `ukn`: unknown
- `all`: all types
- `bin`: boolean
- `num`: number
- `str`: string
- `lst`: list
- `obj`: object
- `fnc`: function
- `dso`: app object
- `gvo`: GameView object

Optionally you can specify a subtype of your type separated with an underscore. These are predefined values in the [conf.json](conf.json#L25) script. Currently only '`Number`' and '`String`' have subtypes available. Examples are
- `num_int`: integer
- `num_mls`: milliseconds
- `str_col`: "\<color\>" or "#[aa]rrggbb"
- `str_pth`: file path

If the subtype you need isn't specified here you can add custom pair any time. Example:
- `"num_tlx":"top left x coordinate"`

if there is a fixed set of argument vales available you can append them with a '`-`' prefix. Separate options with pipes '`|`' when they are mutually exclusive or commas '`,`' if they are compatible. Example from Layouts: 
- `str_com-Linear|Absolute|Frame|Card`

To describe a possible argument value further you can add a description text separated with '`:`'. Example:
- `str_com-Linear:linear ordered objects|Frame|Absolute`

### Type Popups
If you want to use popups in a description text or in return values you can add the type separated with a '`:`', specifically `name:type`. Example:
- `"retval": "lst-[ values:num_int ]"`
- `"retval": "obj-{ width:num_orw, height:num_orh }"`

### Cross-Doc References
You can easily referenciate other docs using the `@docname` format. This is widely used for 'See Also: 's
- See Also: [@WriteFile](https://symdstools.github.io/Docs/docs/app/WriteFile.htm)
You can even point to parent- or subdirectories:
- [@../app/SaveText](https://symdstools.github.io/Docs/docs/app/SaveText.htm)
And add html anchors:
- [@../app/CreateImage#Hide](https://symdstools.github.io/Docs/docs/app/CreateImage.htm#Hide)
- You cannot use spaces in paths but html anchors allow underscores as placeholder

## Description Format

If a description exceeds a basic explanation sentence its best (but not required) to put it in a separate markdown file that is easier to edit.

The description supports basic markdown features as well as standard html tags for basic formatting:

- \*\***bold**\*\*
- \__italic_\_
- \**italic*\*
- \_\_<u>underlined</u>\_\_
- \~\~~~strikethrouh~~\~\~
- \``code line`\`
- \`\`\````code block```\`\`\`
- \[[linktext](#)\]\(url\)
- [linktext]{`onclick js code`}
- <h4>### header</h3>

Besides those there are more custom formats available that allow to write a good looking, full-featured documentation.

### Types

Inside descriptions you can use types and type popups as well. The type format is the same described in the [JSON section](#types). You can use one of the following formats:
```sh
name:type
name:"type"        # "quotes" uses jQuery popups and app popups as needed
name:"type-values"
name:'type'        # 'ticks' forces app popups
name:'type-values'
"name":"desc"      # for non-alphanumerical names
```

### Samples
A good documentation should provide examples of the described method. They can be copied and executed directly from the docs.<br>
Each sample should have a highlighted area which shows the snipped where the method was used. Use the &lt;b&gt; tag for that.<br>
You can define samples by using the <sample> tag, either in the description itself or in a member.txt file in the [samples/](en/app/samples) folder, where each scope member has its own \<member\>.txt file.<br>
Use following format for each sample:
```Html
<sample MyExample>
function OnStart()
{
    <b>app.Alert( "Hello World" );</b>
}
</sample>
```
You can disable an example using standard html comments like
```Html
<!--sample MyExample>
    // ...
</sample-->
```

### Inline Code Areas
If you have a short command or code example you want to include without making it a Sample block, you can use the standard \<smp\> HTML tag or one of the custom language specific tags: \<js\> \<java\> or \<bash\>. Example:
- `<js>img.DrawLine( 0, 0, 1, 1 );</js>`
Additionally you can add some attributes to change their appearance. Ie:
- `<js noinl>` will make the code full-width instead of inline
- `<js nobox>` will remove the grey box around the code

### Custom Constructor positions
By Default the constructor line of a DroidScript object will be inserted after the first sentence (marked with a dor '`.`'). But you can customize that position with the `%c` flag:
- `This is a description. Followed by more description. %c`

### Custom Sample positions
If you want to put a sample of a sample.txt file to a specified position in your description, you can use the <sample> tag, where sample is followed by the sample name. Example:
- `<sample Sample Name>`


## Generating

- in a terminal navigate to _'files'_ by executing `$ cd files`
- execute `$ ./generate.js` to generate all docs of every language (`./generate.js` and `node generate.js` are synonym)
- execute `$ ./generate.js -c` to foce a clean regeneration
- execute `$ ./generate.js -help` to see more cli help
- execute `$ ./generate.js <lang> [..]` to generate docs of a specific language
- execute `$ ./generate.js <scope> [..]` to generate a specific scope
- execute `$ ./generate.js <scope>.<pattern> [..]` to generate only certain members of a scope (pattern is a contained regex. - ie. app.Create will generate all members containing 'Create')
- execute `$ ./generate.js <lang>.<scope> [..]` to generate a specific scope of a language

Note: the script will only generate a scope if any file of the scope gen folder has been modified since the last generation of this scope. disable this behaviour with the -clean option.

<details>
<summary><b>Full generate.js option list</b></summary>

```
[OPTIONS] [PATTERN ...]
OPTIONS:
	-l  --lang=<LANG-CODE>  2 digit code, ie. en de fr pt es ..
                            defaults to 'en'
	-al --addlang=<LANG-CODE>=<LANG-NAME>
                            adds a language to conf.json
	-as --addscope=<SCOPE-ABBREV>=<SCOPE-NAME>
                            adds a scope to conf.json
	-c  --clean             regenerate the docs completely
	-n  --nogen             don't generate
	-v  --verbose           print more debug logs
	-h  --help              this help

PATTERN:
	generates a scope in each defined language:
	<SCOPE>[.<MEMBER-PATTERN>]
	with specified language:
	<LANG-CODE>[.<SCOPE>[.<MEMBER-PATTERN>]]

MEMBER-PATTERN:             RegEx pattern
```
</details>

## Update Github Pages

To publish the generated html files on GitHub Pages execute the `updatePages.sh` script
```shell
./updatePages.sh
```
Alternatively update them manually with a file-browser of your choice, based on these commands:
```shell
# delete old docs
rm -r ../docs/docs/

# copy new docs and version
cp -r docs/ version.txt ../docs/

# edit Docs.htm, search for 'Docs version:' and
# increment the number (last 3 digits of version.txt)
nano ../docs/Docs.htm
```
