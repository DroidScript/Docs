# DroidScript Markup

This folder contains all the markup files for all controls, methods, and components. Each file is a JavaScript file that resembles a codebase with all the code removed and only the **comments** left.

> There is a VS Code Extension that generates docs on-the-fly and displays a preview live in the editor. Install it [here](https://marketplace.visualstudio.com/items?itemName=droidscript.droidscript-docs).

## Why JavaScript `.js` and NOT Markdown `.md`?

### For **`API`** documentation, use **`Javascript`** file.
It allows easy editing of documentation through markup comments in **jsdoc** format especially when working on function definitions. Also, when working in code editors such as VS Code, the syntax highlighting and autocompletion makes writing the comments more easy and fun.

### For general purpose documentation use the **`Markdown`** file format.
See **`"en/intro"`** folder for reference.

## Parts

These are the parts of each DroidScript Doc page, in their required order. Parts may be missing or added later, as long as they are in the correct order.

- Header
- Long Description
- Samples
- Methods

### Header

The header contains information about the **Control Name**, **Short Description**, and **Initialization**. The **Initialization** also contains information about parameters and the return data type.

Example: Header of the app.Call method.

![Header part](https://drive.google.com/uc?id=1RAkKFr7M_y9Lq-useFzRliqrRtIdUmNj)

The markup comments will look like this:

```js
/** # Call #
 * @brief Calls a phone number
 * Call is used to call the given phone number.
 * $$ app.Call(number) $$
 * @param {str} number
 */
```

The line `$$ app.Call(number) $$` can be omitted, it is provided for reference for the parameter descriptions.

You will notice the `@brief` tag which is a custom jsdoc annotation for DroidScript Docs markup. See [custom tags](#custom-tags) section below.

Furthermore, you can see the **_`"str"`_** data type. It is a custom data types which adds an extra description in the final documentation. They will be autocompleted by the vscode extension too. For more information about the available types, see the [parameter section](#parameter-description) below.

## Long Description

Some documentation files have a long description below the header or after the **Initialization** part.

You can find the _Long Description_ in the file just below the Header part in a block comment with the **@Description** tag in it.

Example: Long Description for Checkbox.

![Long Description Part](https://drive.google.com/uc?id=1Bo-7Z_SkDgDfNsrIDptvpLvUO8Yd4PEt)

> The description starts after the initialization starting from the paragraph _"They consist of a ticker box on the left ..."_ until the Example at the bottom.

The markup comments will look like this

```javascript

/** @Description

They consist of a ticker box on the left and a text label on the right side.

It is disabled by default, but you can enable it with the **SetChecked** method to change its initial state.

Use the SetOnTouch method of the CheckBox object to define a function you want to be called when the CheckBox is touched. There you can read  the 'isChecked' parameter to get the current state of the CheckBox:
*/

```

You can remove the description from the Header and prepend it in this Long Description markup. The result will still be the same. This is recommended and thus you can see this in all Controls and Components with this long description part.

> When writing the long description, you can use the same markdown formatting. From the example above, the `"**SetChecked**"` text will be rendered as bold text in the final Docs.

## Samples
Code samples are placed below the long description, if any, enclosed in a block comment with the word **@Sample**. See below.

Each sample is wrapped with `sample` tags. Any string after the word `sample` in the opening tag is treated as the sample title.

## Examples
The examples can be found at the bottom of each file. They are enclose in a block comment with a tag **@sample** in it followed by the title of the sample.

Example from **`ZipFolder.js`**

``` js
/**
@sample Zip Folder
function OnStart()
{
    var folder = "/sdcard/DroidScript/Hello World";
	app.ZipFolder( folder, folder + ".zip" );
	app.ShowPopup( "Compressed to " + folder + ".zip" );
}
 */
```

Example from **`Button.js`**

```js
/**
@sample Fixed Size
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

<b>	btn = app.CreateButton( "Press Me", 0.5, 0.2 );
	btn.SetOnTouch( SayHello );
	lay.AddChild( btn );</b>

	app.AddLayout( lay );
}

function SayHello()
{
	app.ShowPopup("Hello World!");
}
 */
```

The above markup includes two samples with the titles **Zip Folder** and **Fixed Size**.

## Methods

The methods are defined after the Header section and after the Long Description, if present.

Each method is a function definition which has the same markup comments as the Header Part except the method name is now enclosed in three (3) consecutive hash (#).

And since it has the same markup format as the Header Part, each method definition contains information about the **Method Name**, **Method Description**, and **Initialization**. The **Initialization** also contains information about parameter description and the return data type.

Example: Methods Section of Text Control

![Methods Section of DS](https://drive.google.com/uc?id=1Ktnqd4HoERg1-JsyXMzrGs2VmeqZ7fzt)

Example 1: Method definition of `SetText` method.

```js
/** ### SetText ###
 * Change the currently displayed text in the control.
 * $$ txt.SetText(text) $$
 * @param {str} text 
 */
```

Example 2: Method definition of SetSize method.

```js
/** ### SetSize ###
 * Change the size of the control in either screen relative values or in pixels if the `px` option was given.
 * $$ txt.SetSize(width, height, options) $$
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px|sp|dip|dp|mm|pt
 */
```
> As stated above, the lines that includes `$$ txt.SetText(text) $$` and `$$ txt.SetSize(width, height, options) $$` is not necessary but it is provided for reference to the parameter description.

For more information on parameter descriptions especially data types, see the [Parameter Section](#parameter-description) below.

## Parameter Description

The parameter description is of the form

```js
@param {Type} Name Description
```

Where

_`Type`_: The data type.
- Can be a **str** for _string_, **num** for _number_, **bin** for _boolean_, **obj** for _objects_ and **fnc** for _functions_. See the [Data Types](#parameter-data-types) section below for more details.

_`Name`_: The parameter name.

_`Description`_: The parameter description.


## Parameter Data Types
Here are the complete data types you can use for parameter and return descriptions.

- **`str`:** String [You can also write _String_]
- **`bin`:** Boolean [You can also write _Boolean_]
- **`num`:** Number [You can also write _Number_]
- **`obj`:** Object [You can also write _Object_]
- **`fnc`:** Function [You can also write _Function_]
- **`all`:** all types [You can also write _Any_]
- **`dso`:** app object [You can also write _AppObject_]
- **`gvo`:** gameview object [You can also write _GameObject_]
- **`jso`:** JavaScript object [You can also write _JSObject_]
- **`lst`:** List or Array [You can also write _Array_]
- **`?`:** unknown

For **Data Types** with default description you can select from the list below.

- **`lst_obj`:** "of objects"
- **`lst_num`:** "of numbers"
- **`num_byt`:** "bytes"
- **`num_col`:** "hexadecimal 0xrrggbb"
- **`num_dat`:** "datetime in milliseconds (from JS Date object)"
- **`num_deg`:** "angle in degrees (0..360)"
- **`num_dhx`:** "0-255"
- **`num_fac`:** "factor"
- **`num_flt`:** "float"
- **`num_fps`:** "frames per second"
- **`num_frc`:** "fraction (0..1)"
- **`num_gbt`:** "gigabytes"
- **`num_hrz`:** "hertz"
- **`num_int`:** "integer"
- **`num_met`:** "meters"
- **`num_mls`:** "milliseconds"
- **`num_mtu`:** "maximum transmission unit"
- **`num_prc`:** "percent"
- **`num_pxl`:** "pixel"
- **`num_rad`:** "angle in radient (0..2*π)"
- **`num_sec`:** "seconds"
- **`str_acc`:** "account Email"
- **`str_b64`:** "base64 encoded"
- **`str_col`:** "color"
- **`str_com`:** "comma “,” separated"
- **`str_eml`:** "comma separated email addresses or names"
- **`str_flt`:** "float"
- **`str_fmt`:** "format"
- **`str_htm`:** "html code"
- **`str_hex`:** "hexadecimal “00”..“FF”"
- **`str_int`:** "integer"
- **`str_jsc`:** "javascript code"
- **`str_jsn`:** "JSON object"
- **`str_lst`:** "separated"
- **`str_mim`:** "mimetype"
- **`str_mod`:** "mode"
- **`str_num`:** "number"
- **`str_oid`:** "object id “#id”"
- **`str_ort`:** "“Default”, “Portrait”, “Landscape”"
- **`str_pip`:** "pipe “|” separated"
- **`str_ptc`:** "file path or content:// uri"
- **`str_pth`:** "path to file or folder ( “/absolute/...” or “relative/...” )"
- **`str_ptf`:** "path to file ( “/absolute/...” or “relative/...” )"
- **`str_ptd`:** "path to folder ( “/absolute/...” or “relative/...” )"
- **`str_pfa`:** "“/absolute/...” path to a file"
- **`str_pfr`:** "“relative/...” path to a file"
- **`str_pda`:** "“/absolute/...” path to a folder"
- **`str_pdr`:** "“relative/...” path to a folder"
- **`str_pxl`:** "integer in pixels"
- **`str_smc`:** "semicolon “;” separated"
- **`str_sql`:** "sql code"
- **`str_sty`:** "style"
- **`str_uri`:** "URI encoded"
- **`str_url`:** "url path"

## Custom Tags

- **`@brief`:** A tag for the short description for each component or control.
- **`@description`:** A tag for the complete description of a control or component.
- **`@abbrev`:** A tag for the short abbreviation to name each control or component. Usually a three (3) letter variable name.
- **`@sample`:** A tag for the sample code block comment.
- **`@category`:** A tag to categorize the control or component into one of the categories from the `"[scope]-navs.json"` file. If not provided, the control can be found only when navigating into the `All` section of each scope.