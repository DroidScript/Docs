# DroidScript Markup

This folder contains all the markup files for all controls, methods, and components of **DroidScript**'s **app** object. Each file is a JavaScript file that resembles a codebase with all the code removed and only the **comments** left.

## Why JavaScript `.js` and NOT Markdown `.md`?

It allows easy editing of comments especially when working on function definitions. Also, when working in Code Editors such as VS Code, the syntax highlighting and autocompletion makes writing the comments more easy and fun.

## Parts

These are the parts of each DroidScript Doc page, n their required order. Parts may be missing or added later, as long as they are in the correct order.

- Header
- Long Description
- Samples
- Methods

## Header

The header contains information about the **Control Name**, **Short Description**, and **Initialization**. The **Initialization** also contains information about parameters and the return data type.

Example: Header of Call method.

![Header part](https://drive.google.com/uc?id=1RAkKFr7M_y9Lq-useFzRliqrRtIdUmNj)

The markup comments will look like this:

```javascript
/** # Call #
 * Call is used to call the given phone number.
 * $$ app.Call(number) $$
 * @param {str} number
 * @returns obj
 */
```
The line `$$ app.Call(number) $$` can be omitted, it is provided for reference for the parameter descriptions.

Each line must have the asterisk (*) at the beginning.

For more information about parameter descriptions, see the [parameter section](#parameter-description) below.

## Long Description

Some documentation files have a long description below the header or after the **Initialization** part.

You can find the _Long Description_ in the file just below the Header part in a block comment with the **@Description** tag in it.

Example: Long Description for Checkbox.

![Long Description Part](https://drive.google.com/uc?id=1Bo-7Z_SkDgDfNsrIDptvpLvUO8Yd4PEt)

The description starts after the initialization starting from the paragraph _"They consist of a ticker box on the left ..."_ until the Example at the bottom.

The markup comments will look like this

```javascript

/** @Description

They consist of a ticker box on the left and a text label on the right side.

It is disabled by default, but you can enable it with the **SetChecked** method to change its initial state.

Use the SetOnTouch method of the CheckBox object to define a function you want to be called when the CheckBox is touched. There you can read  the 'isChecked' parameter to get the current state of the CheckBox:
*/

```

You can remove the description from the Header and prepend it in this Long Description markup. The result will still be the same. This is recommended and thus you can see this in all Controls and Components with this long description part.

## Samples
Code samples are placed below the long description, if any, enclosed in a block comment with the word **@Sample**. See below.

Each sample is wrapped with `sample` tags. Any string after the word `sample` in the opening tag is treated as the sample title.

Example:

```
/** @Sample

<sample Default Size>
function OnStart()
{
    lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

    btn = app.CreateButton( "Press Me" );
    btn.SetOnTouch( SayHello );
    lay.AddChild( btn );

    app.AddLayout( lay );
}

function SayHello()
{
    app.ShowPopup("Hello World!");
}
</sample>

<sample Fixed Size>
function OnStart()
{
    lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

    btn = app.CreateButton( "Press Me", 0.5, 0.2 );
    btn.SetOnTouch( SayHello );
    lay.AddChild( btn );

    app.AddLayout( lay );
}

function SayHello()
{
    app.ShowPopup("Hello World!");
}
</sample>

*/
```

The above markup includes two samples with the titles **Default Size** and **Fixed Size**.

## Methods

Method documentation follows samples, if any.  
..tg 
Each method is a function definition which has the same markup comments as the Header Part except the method name is now enclosed in three (3) consecutive hash (#).

And since it has the same markup format as the Header Part, each method definition contains information about the **Method Name**, **Method Description**, and **Initialization**. The **Initialization** also contains information about parameter description and the return data type.

Example: Methods Section of Text Control

![Methods Section of DS](https://drive.google.com/uc?id=1Ktnqd4HoERg1-JsyXMzrGs2VmeqZ7fzt)

A block comment below is the start of the Methods Markup.

```
/** ## Methods ##
 * These are the methods available for CreateButton
 */
```

After this block-comment, all the methods available for the Control or Component are defined in each own block comment markup.

Example 1: Method definition of SetText method.

```
/** ### SetText ###
 * Change the currently displayed text in the control.
 * $$ txt.SetText(text) $$
 * @param {str} text 
 */
```

Example 2: Method definition of SetSize method.

```
/** ### SetSize ###
 * Change the size of the control in either screen relative values or in pixels if the `px` option was given.
 * $$ txt.SetSize(width, height, options) $$
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px|sp|dip|dp|mm|pt
 */
```

As stated above, the lines that includes `$$ txt.SetText(text) $$` and `$$ txt.SetSize(width, height, options) $$` is not necessary but it is provided for reference to the parameter description.

For more information on parameter descriptions especially data types, see the [Parameter Section](#parameter-description) below.

## Parameter Description

The parameter description is of the form

```
@param {Type} Name Description
```

Where

_Type_: The data type.
- Can be a **str** for _string_, **num** for _number_, **bin** for _boolean_, **obj** for _objects_ and **fnc** for _functions_. See the [Data Types](#parameter-data-types) section below for more details.

_Name_: The parameter name.

_Description_: The parameter description.


## Parameter Data Types
Here are the complete data types you can use for parameter and return descriptions.

- **str:** String [You can also write _String_]
- **bin:** Boolean [You can also write _Boolean_]
- **num:** Number [You can also write _Number_]
- **obj:** Object [You can also write _Object_]
- **fnc:** Function [You can also write _Function_]
- **all:** all types [You can also write _Any_]
- **dso:** app object [You can also write _AppObject_]
- **gvo:** gameview object [You can also write _GameObject_]
- **jso:** JavaScript object [You can also write _JSObject_]
- **lst:** List or Array [You can also write _Array_]
- **?:** unknown

For **Data Types** with default description you can select from the list below.

- **lst_obj:** "of objects"
- **lst_num:** "of numbers"
- **num_byt:** "bytes"
- **num_col:** "hexadecimal 0xrrggbb"
- **num_dat:** "datetime in milliseconds (from JS Date object)"
- **num_deg:** "angle in degrees (0..360)"
- **num_dhx:** "0-255"
- **num_fac:** "factor"
- **num_flt:** "float"
- **num_fps:** "frames per second"
- **num_frc:** "fraction (0..1)"
- **num_gbt:** "gigabytes"
- **num_hrz:** "hertz"
- **num_int:** "integer"
- **num_met:** "meters"
- **num_mls:** "milliseconds"
- **num_mtu:** "maximum transmission unit"
- **num_prc:** "percent"
- **num_pxl:** "pixel"
- **num_rad:** "angle in radient (0..2*π)"
- **num_sec:** "seconds"
- **str_acc:** "account Email"
- **str_b64:** "base64 encoded"
- **str_col:** "color"
- **str_com:** "comma “,” separated"
- **str_eml:** "comma separated email addresses or names"
- **str_flt:** "float"
- **str_fmt:** "format"
- **str_htm:** "html code"
- **str_hex:** "hexadecimal “00”..“FF”"
- **str_int:** "integer"
- **str_jsc:** "javascript code"
- **str_jsn:** "JSON object"
- **str_lst:** "separated"
- **str_mim:** "mimetype"
- **str_mod:** "mode"
- **str_num:** "number"
- **str_oid:** "object id “#id”"
- **str_ort:** "“Default”, “Portrait”, “Landscape”"
- **str_pip:** "pipe “|” separated"
- **str_ptc:** "file path or content:// uri"
- **str_pth:** "path to file or folder ( “/absolute/...” or “relative/...” )"
- **str_ptf:** "path to file ( “/absolute/...” or “relative/...” )"
- **str_ptd:** "path to folder ( “/absolute/...” or “relative/...” )"
- **str_pfa:** "“/absolute/...” path to a file"
- **str_pfr:** "“relative/...” path to a file"
- **str_pda:** "“/absolute/...” path to a folder"
- **str_pdr:** "“relative/...” path to a folder"
- **str_pxl:** "integer in pixels"
- **str_smc:** "semicolon “;” separated"
- **str_sql:** "sql code"
- **str_sty:** "style"
- **str_uri:** "URI encoded"
- **str_url:** "url path"
