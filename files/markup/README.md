# DroidScript Markup Documentation

This folder contains all the markup files for all controls, methods, and components. Each file is a JavaScript file that resembles a codebase with all the code removed and only the **comments** are left.

> 💡 **Live Preview in VS Code**  
> There is a VS Code Extension that generates docs on-the-fly and displays a preview live in the editor.  
> 👉 Install it [here](https://marketplace.visualstudio.com/items?itemName=droidscript.droidscript-docs)

---

## 📁 File Format Guide

### Why Use JavaScript (`.js`) Instead of Markdown (`.md`)?

#### For API Documentation

Use a **JavaScript** file for API docs.  
It allows easy editing of documentation through markup comments in jsdoc format, especially when working on function definitions. Also, when working in code editors such as VS Code, the syntax highlighting and autocompletion make writing the comments easier and more fun.

#### For General Purpose Documentation

Use the **Markdown (`.md`)** format.  
See the **`"en/intro"`** folder as a reference.

---

## 📚 Doc File Structure

These are the parts of each DroidScript Doc page.

1. Header  
2. Long Description
3. Samples
4. Methods & Properties

📌 **Example: Documentation for CreateZipUtil method**

![Documentation for CreateZipUtil method](https://drive.google.com/uc?id=17D1AzNyTuLJksPCNXwjlRgb4TUjAb_57)

> Some pages may contain all four (4) parts while others may only contain **Header** and **Description** only.

---

## 1. 🧩 Header

This is the topmost part of the docs page and it contains the following:

- **Control name**
- **Short Description**
- **Initialization** (parameters, return types)

### Control Name

This refers to the scope method name, control name or component name.

#### 💡 Markup format

It is written as the first line in the header markup and enclosed in a single hash (`#`).

📌 **Example**
```js
/** # CreateSeekBar #
 * 
 */
```

### Short description

This is a one sentence description for the **Control Name**.

#### 💡 Markup format

It is written as a regular text just below the **Control Name**.

📌 **Example**
```js
/** # CreateSeekBar #
 * SeekBars are bars with a moveable pointer which let the user select a value in a given range.
 * 
 */
```

### Initialization

These are the parameter definitions and return data type if any.

#### 💡 Markup format

This is just the same as writing function definitions in javascript which you are familiar with. It may also includes return data type if any.

It follows the following syntax: `@param {type} name description`

Where:
- **_type_** - is the parameter data type.
- **_name_** - is the parameter name.
- **_description_** - optional parameter description.

📌 **Example**
```js
/** # CreateSeekBar #
 * SeekBars are bars with a moveable pointer which let the user select a value in a given range.
 * $$ skb = app.CreateSeekBar(width, height, options) $$
 * @param {num_frc} width
 * @param {num_frc} height
 * @param {str_com} options FillX/Y
 * @returns dso-SeekBar
 */
```

From the above example, you will notice the `num_frc`, `str_com` and `dso` data type. It is a custom data types which adds an extra description in the final documentation. They will be autocompleted by the vscode extension too. For more information about the available types, see [Parameter Data Types](#parameter-data-types).

> ➡️ The line `$$ skb = app.CreateSeekBar(width, height, options) $$` can be omitted, it is provided for reference for the parameter descriptions.

---

## 2. 📝 Long Description

This appears directly below the **Header**. It shows a complete documentation for the given method, component or control.

> ➡️ **Description** is optional. Sometimes, a simple description is enough in the **Header** description.

#### 💡 Markup format

It is a block comment with the `@description` tag as the first line.  You can follow markdown formatting when writing **description**.

📌 **Example**
```js
/** # CreateSeekBar #
 * SeekBars are bars with a moveable pointer which let the user select a value in a given range.
 * @param {num_frc} width
 * @param {num_frc} height
 * @param {str_com} options FillX/Y
 * @returns dso-SeekBar
 */

/** @description
The **SetRange** method of the SeekBar object to sets the value range of the SeekBar and the **SetValue** method sets the current value.
Use the SetOnChange method to define a function you want to be called when the SeekBar value has changed. You can read the _value_ parameter in your callback function to get the current SeekBar value.
*/
```

✨ You can move **Short Descriptions** from the Header into this section. This is recommended for controls/components with longer documentation.

---

## 3. 💡 Samples

Samples are placed at the bottom of each markup file. When rendered, they appear below the **Description** section on each documentation page as collapsible buttons.

#### 💡 Markup format

It is a block comment with the `@sample` tag in the first line followed by the sample title.

📌 **Example**

```js
/** # CreateSeekBar #
 * SeekBars are bars with a moveable pointer which let the user select a value in a given range.
 * @param {num_frc} width
 * @param {num_frc} height
 * @param {str_com} options FillX/Y
 * @returns dso-SeekBar
 */

/** @description
The **SetRange** method of the SeekBar object to sets the value range of the SeekBar and the **SetValue** method sets the current value.
Use the SetOnChange method to define a function you want to be called when the SeekBar value has changed. You can read the _value_ parameter in your callback function to get the current SeekBar value.
 */

/**
@sample Example
function OnStart()
{
    lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

    <b>skb = app.CreateSeekBar( 0.8 );
    skb.SetRange( 1.0 );
    skb.SetValue( 0.5 );
    skb.SetOnTouch( skb_OnTouch );
    lay.AddChild( skb );</b>

    app.AddLayout( lay );
}

function skb_OnTouch( value )
{
    app.ShowPopup( "Value = " + value );
}
 */
```

📌 **Examples from `en/app/Button.js`:**

```js
/**
@sample Default Size
function OnStart()
{
    lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

<b>	btn = app.CreateButton( "Press Me" );
    btn.SetOnTouch( SayHello );
    lay.AddChild( btn );</b>

    app.AddLayout( lay );
}

function SayHello()
{
    app.ShowPopup("Hello World!");
}
 */

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

### Sample placement

By default, samples are placed below the **Description** section when they are rendered. But you can place a sample within the **Description** section by referencing it. Just follow this format `<sample [Sample Name]>`. See the `en/app/CreateButton.js` **Description** section.

```js
/* @Description

....

You can allow the button to auto-size by leaving out the dimensions
<sample Default Size>

or you can specify a **width** and **height** as decimal fractions.
<sample Fixed Size>

...
*/
```
Here's the rendered page.

![Description with samples](https://drive.google.com/uc?id=18pgf9EBIBnwt_9svSYt-vkkKb2Jr-ooC)

---

## 4. 🔧 Methods & Properties

The methods and properties are defined after the **Header** section and after the **Long Description**, if present. When they are rendered, they will be placed at the bottom of each docs page as you can see in DroidScript docs.

#### 💡 Markup format

Each method is a function definition which has the same markup comments as the **Header Part** except the method name or property name is now enclosed in three (3) consecutive hash (`###`).

And since it has the same markup format as the **Header** section, each method definition contains information about the **Method Name**, **Method Description**, and **Initialization**. The **Initialization** also contains information about parameter description and the return data type if any.

For a property, just add `@prop` tag after the property name.

📌 **Example**

```js
// ------------- HEADER SECTION -------------

/** # CreateSeekBar #
 * SeekBars are bars with a moveable pointer which let the user select a value in a given range.
 * @param {num_frc} width
 * @param {num_frc} height
 * @param {str_com} options FillX/Y
 * @returns dso-SeekBar
 */

// ------------- LONG DESCRIPTION -------------

/** @description
The **SetRange** method of the SeekBar object to sets the value range of the SeekBar and the **SetValue** method sets the current value.
Use the SetOnChange method to define a function you want to be called when the SeekBar value has changed. You can read the _value_ parameter in your callback function to get the current SeekBar value.
 */

// ------------- VISIBLE METHODS & PROPERTIES -------------

/** ### GetValue ###
 * Returns the current value of the seek bar.
 * $$ skb.GetValue() $$
 * @returns num
 */

/** ### SetValue ###
 * Change the current seekbar value in the defined range.
 * $$ skb.SetValue(val) $$
 * @param {num} val
 */

/** ### data
 * @prop
 * An object for saving individual extra properties.
 * @returns obj-{ key:str, value:all }
 */

// ------------- SAMPLES -------------

/**
@sample Example
function OnStart()
{
    lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

    <b>skb = app.CreateSeekBar( 0.8 );
    skb.SetRange( 1.0 );
    skb.SetValue( 0.5 );
    skb.SetOnTouch( skb_OnTouch );
    lay.AddChild( skb );</b>

    app.AddLayout( lay );
}

function skb_OnTouch( value )
{
    app.ShowPopup( "Value = " + value );
}
 */
```

---

### Parameter Data Types

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
- **`num_rad`:** "angle in radian (0..2*π)"
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
