
# Editing Docs using raw JSON files

- [Table of contents](#Table-of-contents)
    - [Setup](#Setup)
    - [Additional Views](#Additional-Views)
        - [Git](#Git)
        - [Terminal](#Terminal)
    - [Resulting view](#Resulting-view)
    - [File Structure](#File-Structure)
    - [JSON Format](#JSON-Format)
        - [Format](#Format)
            - [Type](#Type)
            - [Type Popups](#Type-Popups)
            - [Cross- Doc References](#Cross-Doc-References)
            - [Inline Code Areas](#Inline-Code-Areas)
            - [Custom Constructor positions](#Custom-Constructor-positions)
            - [Custom Sample positions](#Custom-Sample-positions)
            - [Examples](#Examples)
            - [HTML Tags](#HTML-Tags)
            - [Markdown](#Markdown)
    - [Generating](#Generating)
    - [Update Github Pages](#Update-Github-Pages)


## Setup

Open a plain text editor of your choice on your desktop PC.<br>
Personally I use the [Atom editor](https://atom.io) available for Linux, Windows or OS X, because it has any feature you'll need to comfortably edit the docs. This guide will focus on Atom as well.

- Open the 'Docs' Project folder
- Open all **files/*.json** files by double-clicking on them in the file tree view
    - for functions.json click **Edit/Folding/Fold Level 2** in the toolbar to get a comfortable overview over all functions
    - Optionally split your view vertically - on the right side you can open temporary needed files like **files/samples/***
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
	the css/js sources for every language
- **\<lang\>**:
	the generation sources for a specific language
- **\<lang\>\<scope\>/\<member\>.md**:
	Put large descriptions of scope members here
- **\<lang\>\<scope\>-samples/\<member\>.txt**:
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
- **\<lang\>\<scope\>.json**:
	The main generation source in { [JSON Format](#JSON-Format) }
	```js
	{
		"member1": /* <member object> */
		/* ... */
	}
	```
- **\<lang\>\<scope\>-base.json**:
	Put member definitions which are often needed here. The keys are 10 digit hashes starting with a '#' which are used to refer to members in the \<scope\>.json file.
	```js
	{
		"#0123456789": /* <member object> */
		/* ... */
	}
	```
- **\<lang\>\<scope\>-navs.json**:
	A structure representing navigators to make it easy for users to quickly find a certain member. There will always be a 'All' category added which includes all members.
	```js
	{
		"category1": {
			"subcategory1": ["member1", "member2" /* ... */ ],
			"subcategory2": ["member3", "member4" /* ... */ ]
		 	/* ... */
		},
		"category2": ["member1", "member2" /* ... */ ]
		/* ... */
	}
	```

Note: in fact, no file is reqired all the times. Following rules apply:
- If _\<scope\>.json_ is defined, it **can** make use of _\<scope\>/\<member\>.md_ and _\<scope\>-base.json_
- If _\<scope\>.json_ is not defined, the content of the _\<scope\>/\<member\>.md_ directory will be used to generate plain description docs
- If _\<scope\>-navs.json_ is not defined, the _\<scope\>.json_ members (or _\<scope\>/\<member\>.md_ if rule #2 applies) will be listed (similar to the 'All' category)


## JSON Format

Each member in the \<scope\>.json file has following format

```js
{
	"<membername>" : { 			 // the name used for sorting and filtering
	    "desc": "<description>", /* or "#<membername>.md" */
	    "isfunc": true, 		 // boolean indicating if the member is a function (may be removed)
	    "name": "<membername>",  // displayed member name
	    "pNames": ["<name1>", "<name2>" /* ... */ ], // parameter names
	    "pTypes": ["<type1>", "<type2>" /* ... */ ], // parameter types
	    "retval": "<type>",      // the type of the return value
	    "shortDesc": "<description>", // a short description for \<scope\>-info.json
	    "subfuncs": {            // a member container with submembers of the member (requires a control (dso) as retval)
	        "<membername1>": { /* another member object */ },
	        "<membername2>": { /* another member object */ }
	    }
	}
}
```

### Format

You can use following methods to format the documentation

#### Type
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

optionally you can specify a subtype of your type separated with an underscore. These are predefined values in the [generate.js](generate.js#L935) script. Currently only '`Number`' and '`String`' have subtypes available. Examples are
- `num_int`: integer
- `num_mls`: milliseconds
- `str_lst`: comma separated
- `str_url`: url

if the subtype you need isn't specified here you can add a `basetype:description` to display a custom description. Example:
- `num:top left x coordinate`
In descriptions you have to use `""` (for jquery popups) or `''` (for app popups) to separate the description text from the rest.

if there is a fixed set of argument vales available you can add them separated with pipes '`|`' for alternatives or commas '`,`', with a leading '`-`' to begin the list. Example:
- `str_com-Linear|Frame|Absolute`

To describe a possible argument value more you can add a description text separated with '`:`'. Example:
- `str_com-Linear:linear ordered objects|Frame|Absolute`

#### Type Popups
If you want to use popups in a description text or in return values you can add the type separated with a '`:`', specifically `name:type`. Example:
- `"retval": "lst-[ values:num_int ]"`
- `"retval": "obj-{ width:num_orw, height:num_orh }"`

#### Cross-Doc References
You can easily referenciate other docs using the `@funcname` format. This is mostly used for 'See Also: 's
- See Also: [@WriteFile](https://alex-symbroson.github.io/Docs/docs/app/WriteFile.htm)
You can even point to parent- or subdirectories:
- Have a look at the [@../app/SaveText](https://alex-symbroson.github.io/Docs/docs/app/SaveText)
And add html anchors:
- Have a look at the [@../app/CreateImage#Hide](https://alex-symbroson.github.io/Docs/docs/app/CreateImage.htm#Hide)

#### Inline Code Areas
If you have a short command or code example you want to include without making it a Sample block, you can use the \<smp\> tag or a specific highlighted language: \<js\> \<java\> or \<bash\>. Example:
- `<js>img.DrawLine( 0, 0, 1, 1 );</js>`
Additionally you can add some modifiers to the start tag to change the look. Ie:
- `<js noinl>` will make the code inline instead of full-width
- `<js nobox>` will remove the grey box around the code

#### Custom Constructor positions
By Default the constructor line of a DroidScript object will be inserted after the first sentence (marked with a dor '`.`'). But you can customize that position with the `%c` flag:
- `This is a description. Followed by more description. %c`

#### Examples
A good documentation should provide examples of the described method. They can be copied and executed directly from the docs.<br>
Each sample should have a highlighted area which shows the snipped where the method was used. Use the &lt;b&gt; tag for that.<br>
You can define samples by using the <sample> tag, either in the description itself or in a member.txt file in the [\<scope\>-samples/](app/samples) folder, where each scope member has its own \<member\>.txt file.<br>
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

#### HTML Tags

#### Markdown
- \*\***bold**\*\*
- \__italic_\_
- \**italic*\*
- \_\_<u>underlined</u>\_\_
- \~\~~~strikethrouh~~\~\~
- \``code line`\`
- \`\`\````code block```\`\`\`
- \[[linktext](#)\]\(url\)
- [linktext]{`js code`}
- <h3>### header</h3>

## Generating

- in a terminal navigate to _'files'_ by executing `$ cd files`
- execute `$ ./generate.js` to generate all docs of every language (`./generate.js` and `node generate.js` are synonym)
- execute `$ ./generate.js -help` to see more cli help
- execute `$ ./generate.js \<lang\> [..]` to generate docs of a specific language
- execute `$ ./generate.js \<scope\> [..]` to generate a specific scope
- execute `$ ./generate.js \<scope\>.<pattern> [..]` to generate only certain members of a scope (pattern is a contained regex. - ie. app.Create will generate all members containing 'Create')
- execute `$ ./generate.js \<lang\>.\<scope\> [..]` to generate a specific scope of a language


## Update Github Pages

Execute following commands to update the GitHub Pages Docs preview:
```shell
# remove old docs from pages
rm -rdf ../docs/docs/

# copy new docs to pages
cp -r docs/ ../docs/
```
Alternatively update them manually with the atom tree view or a filebrowser of your choice
