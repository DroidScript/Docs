
# Editing Docs using raw JSON files

- [Table of contents](#Editing-Docs-using-raw-JSON-files)
    - [Setup](#Setup)
    - [Additional Views](#Additional-Views)
        - [Git](#Git)
        - [Terminal](#Terminal)
    - [Resulting view](#Resulting-view)
    - [File Structure](#File-Structure)
    - [JSON Format](#JSON-Format)
        - [JSON Examples](#JSON-Examples)
    - [Markdown Format](#Markdown-Format)
        - [Type](#Type)
        - [Type Popups](#Type-Popups)
        - [Cross- Doc References](#Cross-Doc-References)
        - [Inline Code Areas](#Inline-Code-Areas)
        - [Custom Constructor positions](#Custom-Constructor-positions)
        - [Custom Sample positions](#Custom-Sample-positions)
            - [Sample Examples](#Sample-Examples)
        - [HTML Tags](#HTML-Tags)
        - [Markdown](#Markdown)
    - [Generating](#Generating)
    - [Update Github Pages](#Update-Github-Pages)


## Setup

Open a plain text editor of your choice on your desktop PC.<br>
Personally I use the [Atom editor](https://atom.io) available for Linux, Windows or OS X, because it has any feature you'll need to comfortably edit the docs. This guide will focus on Atom as well.

- Open the 'Docs' Project folder
- Open all **files/\<lang\>/\<scope\>/*.json** files of the scope you want to edit to by double-clicking on them in the file tree view
    - for obj.json click **Edit/Folding/Fold Level 2** in the toolbar to get a comfortable overview over all functions
    - Optionally split your view vertically - on the right side you can open temporary needed files like **files/\<lang\>/\<scope\>/samples/\***
- Enable _'Soft Wrap'_ in the Settings/Editor tab


## Additional Views

### Git
press **Ctrl-Shift-9** to open the **git tab** in a new pane on the right.<br>
There you can easily add, commit and even push changes to your repository

### Terminal
- download '**platformio-ide-terminal**' from Settings/Packages
- press **Alt-Shift-T** to open the terminal pane on the bottom


## Resulting view

![Screenshot](Screenshot_Atom.png)


## File Structure

The generator has a specific file structure you have to use to be able to generate the docs. Each of them starts with the scope name (ie. app or gfx) which is later used to identify the docs to generate.

- **conf.json**:
	general generation info (languages and scopes)
- **docs-base**:
	the html/css/js source basis for every language
- **\<lang\>/**:
	the generation sources for a specific language
- \<lang\>/**\<scope\>**:
	the generation sources for a specific scope
- \<lang\>/\<scope\>/**obj.json**:
	The main generation source in { [JSON Format](#JSON-Format) }
	```js
	{
		"member1": { /* <member object> */ }
		/* ... */
	}
	```
- \<lang\>/\<scope\>/**base.json**:
	Put member definitions which are often needed here. The keys are 10 digit IDs starting with a '#' which are used in the \<scope\>.json file to refer to scope-base members:
	```js
	{
		"#0123456789": { /* <member object> */ }
		/* ... */
	}
	```
- \<lang\>/\<scope\>/**navs.json**:
	A structure representing navigators to make it easy for users to quickly find a certain method of the scope. There will always be a 'All' category added which includes all members.<br>
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


- \<lang\>/\<scope\>/**desc/\<member\>.md**:
	Put large descriptions of scope members here
- \<lang\>/\<scope\>/**samples/\<member\>.txt**:
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


Note: in fact, no file is reqired all the times. Following rules apply:
- If _obj.json_ is defined, it can make use of _desc/\<member\>.md_ **and** _base.json_
- If _obj.json_ is **not** defined, the content of the _desc/\<member\>.md_ directory will be used to generate plain description docs
- If _navs.json_ is not defined, the _obj.json_ members (or _desc/\<member\>.md_ if rule #2 applies) will be listed (similar to the 'All' category)


## JSON Format

Each member in the obj.json file can have following properties:

```js
{
	"<membername>" : {           // the name used for sorting and filtering
	    "desc": "<description>", /* or "#<membername>.md" */
	    "isval": true,  		 // boolean indicating if the member is a value
	    "name": "<membername>",  // displayed member name
	    "pNames": ["<name1>", "<name2>" /* ... */ ], // parameter names
	    "pTypes": ["<type1>", "<type2>" /* ... */ ], // parameter types
	    "retval": "<type>",      // the type of the return value
	    "shortDesc": "<description>", // a short description for <scope>-info.json
	    "subfuncs": {            // a member container with submembers of the member (requires a control (dso) as retval)
	        "<memName1>": {      /* a member object */ },
	        "<memName2>": "#id"  /* id from base.json */ }
	    }
	}
}
```
Note that some values are not required under certain conditions:
- `isval` if `false`
- `pNames` and `pTypes` if empty
- `retval` if `undefined`
- `subfuncs` if `undefined`
- `name` unless a custom name is used
- the whole object if only a description is added, ie `{ "Method": "desc" }`

When using base.json you still might want to only use parts of it without having to copy-paste the whole thing. There are some hacky features you can use in that case to reduce your effort and filesize:
- when appending an exclamation mark '!' to a subfunction's name this name will be used instead of the one defined in the base object: `"customMemName!": "#id"`

- to use the parameter list of a base.json entry use `"params":"#id"` instead of `pNames` and `pTypes`<br>
you can also use this method in base.json

### JSON Examples

<details>
<summary>Description only</summary>

When only adding a description only a string is needed
```json
{
    "Method": "#Method.md"
}
```
</details>


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
<summary>Basic base method using a parameter reference</summary>

from [gfx/base.json](https://github.com/SymDSTools/Docs/blob/db2a9f192295eb4f5a7bd78474ac21813f8931fd/files/en/gfx/base.json#L101)
```json
{
    "#8929387454": { "name": "SetTween",
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
            [ ... ]
			"GetTextSize": "#2530918945",
			"GetTop": "#1981028136",
			"GetType": {
				"desc": "Returns the control class name.",
				"retval": "str-Button",
				"shortDesc": "Returns the control class name"
			},
			"GetVisibility": "#1672373665",
			"GetWidth": "#1321469131",
            [ ... ]
			"SetOnTouch": "#2398750419",
			"SetOnLongTouch": {
				"desc": "Define a callback function which is called when the button has been long pressed.",
				"pNames": ["callback"],
				"pTypes": [{}],
				"shortDesc": "Called when the button was long pressed"
			},
			"SetPadding": "#1923105617",
			"SetPosition": "#1425862386",
            [ ... ]
			"Show": "#1243391562",
			"Tween": "#2114624769"
		}
	}
}
```
</details>


## Markdown Format

You can use following methods to format the documentation

### Type
types have following format:

first specify of which type the variable is. This is a 3-character long string of
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

optionally you can specify a subtype of your type separated with an underscore. These are predefined values in the [conf.json](conf.json#L25) script. Currently only '`Number`' and '`String`' have subtypes available. Examples are
- `num_int`: integer
- `num_mls`: milliseconds
- `str_col`: "\<color\>" or "#[aa]rrggbb"
- `str_pth`: file path

if the subtype you need isn't specified here you can add custom pair any time. Example:
- `"num_tlx":"top left x coordinate"`

Inside descriptions you can use these types as well. You can use one of the following formats:
```sh
name:type
name:"types"       # ".." uses jQuery or app popups
name:"type-values"
name:'types'       # '..' forces app popups
name:'type-values'
"name":"desc"      # for non-alphanumerical names
```


if there is a fixed set of argument vales available you can add them separated with pipes '`|`' for alternatives or commas '`,`', with a leading '`-`' to begin the list. Example:
- `str_com-Linear|Frame|Absolute`

To describe a possible argument value more you can add a description text separated with '`:`'. Example:
- `str_com-Linear:linear ordered objects|Frame|Absolute`

### Type Popups
If you want to use popups in a description text or in return values you can add the type separated with a '`:`', specifically `name:type`. Example:
- `"retval": "lst-[ values:num_int ]"`
- `"retval": "obj-{ width:num_orw, height:num_orh }"`

### Cross-Doc References
You can easily referenciate other docs using the `@funcname` format. This is mostly used for 'See Also: 's
- See Also: [@WriteFile](https://symdstools.github.io/Docs/docs/app/WriteFile.htm)
You can even point to parent- or subdirectories:
- Have a look at the [@../app/SaveText](https://symdstools.github.io/Docs/docs/app/SaveText.htm)
And add html anchors:
- Have a look at the [@../app/CreateImage#Hide](https://symdstools.github.io/Docs/docs/app/CreateImage.htm#Hide)

### Inline Code Areas
If you have a short command or code example you want to include without making it a Sample block, you can use the \<smp\> tag or a specific highlighted language: \<js\> \<java\> or \<bash\>. Example:
- `<js>img.DrawLine( 0, 0, 1, 1 );</js>`
Additionally you can add some modifiers to the start tag to change the look. Ie:
- `<js noinl>` will make the code inline instead of full-width
- `<js nobox>` will remove the grey box around the code

### Custom Constructor positions
By Default the constructor line of a DroidScript object will be inserted after the first sentence (marked with a dor '`.`'). But you can customize that position with the `%c` flag:
- `This is a description. Followed by more description. %c`

### Custom Sample positions
If you want to put a sample of a sample.txt file to a specified position in your description, you can use the <sample> tag, where sample is followed by the sample name. Example:
- `<sample Sample Name>`

#### Sample Examples
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

<br>

Besides these special formats you also have following standard text formatting features available:

### HTML Tags


### Markdown
- \*\***bold**\*\*
- \__italic_\_
- \**italic*\*
- \_\_<u>underlined</u>\_\_
- \~\~~~strikethrouh~~\~\~
- \``code line`\`
- \`\`\````code block```\`\`\`
- \[[linktext](#)\]\(url\)
- [linktext]{`js code`}
- <h4>### header</h3>

## Generating

- in a terminal navigate to _'files'_ by executing `$ cd files`
- execute `$ ./generate.js` to generate all docs of every language (`./generate.js` and `node generate.js` are synonym)
- execute `$ ./generate.js -help` to see more cli help
- execute `$ ./generate.js \<lang\> [..]` to generate docs of a specific language
- execute `$ ./generate.js \<scope\> [..]` to generate a specific scope
- execute `$ ./generate.js \<scope\>.<pattern> [..]` to generate only certain members of a scope (pattern is a contained regex. - ie. app.Create will generate all members containing 'Create')
- execute `$ ./generate.js \<lang\>.\<scope\> [..]` to generate a specific scope of a language

Note: the script will only generate a scope if any file of the scope gen folder has been modified since the last generation of this scope. disable this behaviour with the -clean option.

<details>
<summary><b>Full generate.js help</b></summary>

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

Execute following commands to update the GitHub Pages Docs preview:
```shell
# remove old docs from pages
rm -r ../docs/docs/

# copy new docs to pages
cp -r docs/ ../docs/
```
Alternatively update them manually with the atom tree view or a file-browser of your choice
