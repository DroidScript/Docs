<pre>
            <font color="white"><b>DocsModifier version 3.6</b></font>
            last changed: 01.03.2019

<b>This app was created by Symbroson for DroidScript.</b>


<font color="yellow">**************************************************
                    STRUCTURE
**************************************************</font>

 - introduction
 - file structure
 - how to use
 - source code
   - ternary operators
   - higher order functions


<font color="yellow">**************************************************
                    INTRODUCTION
**************************************************</font>

    with this tool you can easily edit the
    DroidScript documentation to help all
     users to Understand how DroidScript
     works, which methods are available
        and what you can do with it.


<font color="yellow">**************************************************
                   FILE STRUCTURE
**************************************************</font>

<font color="green">DocsModifier</font>/
|
|__<font color="cyan">DocsModifier.js</font><font color="white"><b>  --  Main js file</b></font>
|    initialisizes variables, app events,
|    loading functions and some useful
|    help-functions
|
|__<font color="cyan">GUI.js</font><font color="white"><b>  --  whole app GUI</b></font>
|    stores all GUI objects and callbacks
|    in separate global objects
|
|__<font color="cyan">Dialogs.js</font><font color="white"><b>  --  all app dialogs</b></font>
|    stores all dialog objects and callbacks
|    in separate global objects
|
|__<font color="cyan">Generate.js</font><font color="white"><b>  --  docs-genarator</b></font>
|    generates the doc files based on
|    functions*.json and samples/*.txt
|
|__<font color="green">assets</font>/<font color="white"><b>  --  copied to /sdcard/DocsModifier/</b></font>
   |
   |__<font color="cyan">app.js</font><font color="white"><b>  --  DroidScript's app object</b></font>
   |
   |__<font color="cyan">functions*.json</font><font color="white"><b>  --  app.* functions data</b></font>
   |    <font color="red">required by Generator.js!</font>
   |
   |__<font color="cyan">categories*.json</font>
   |    json file with the sections content
   |
   |__<font color="green">samples</font>/<font color="cyan">*.txt</font><font color="white"><b>  --  doc examples</b></font>
   |    <font color="red">required by Generator.js!</font>
   |
   |__<font color="green">docs*</font>/<font color="white"><b>  --  language related docs folder</b></font>
      |
      |__<font color="cyan">*.htm</font><font color="white"><b>  --  main pages</b></font>
      |
      |__<font color="green">app</font>/<font color="cyan">*.htm</font><font color="white"><b>  --  app* function docs</b></font>
      |
      |__<font color="green">detailed</font>/<font color="cyan">*.htm</font><font color="white"><b>  --  "old" docs</b></font>


<font color="yellow">**************************************************
                    HOW-TO-USE
**************************************************</font>

<font color="green">**** starting ****</font>

When you start the app the first time it shows the
 Readme dialog first. After that the app freezes a
   short time because it extracts the assets to
   /sdcard/DocsModifier/. After the extracting
  process you are asked to choose your preferred
  language. You can change it later if you want.


<font color="green">**** main page ****</font>

	<font color="cyan">'choose language' button</font>
		select your prreferred language
		or add a new one

	<font color="cyan">'Import' button</font>
		Import zip files generated from this app
		directly to DroidScript or /DocsModifier/,
		epningo the content.
		<font color="red">ATTENTION!: files will be overwritten</font>

	<font color="cyan">'Export' button</font>
		Export functions.json and the samples folder
		or the generated docs via mail or save them
		to your Downloads/ folder.
		You can also export your generated docs
		directly to DroidScript.

	<font color="cyan">'Readme' button</font>
		Shows this dialog to read the readme or
		the license file.

	<font color="cyan">'generate all docs' button</font>
		Generates the doc files of all app funcions
		dependen on the current selected language.

	<font color="cyan">'full docs preview' button</font>
		Shows a diog with a preview of your current
		generated docs like in DroidScript.

	<font color="cyan">'sections' list</font>
		Naviate through the app object.
		use longtouch to add or remove
		functions or sections

		red marked items in the functions
		list means that there is smth missing


<font color="green">**** edit docs page ****</font>

	<font color="cyan">'edit sample snippets' button</font>
		shows the 'edit examples page'

	<font color="cyan">'Save andd generate' button</font>
		saves and generates the current doc file

	<font color="cyan">'Preview' button</font>
		show a preview of the current  doc file

	<font color="cyan">'return value' button</font>
		select a return value from the dialog
		You can specify the value on numbers, strings,
		lists and objects, for example for options

	<font color="cyan">'description' text edit</font>
		edit the description of the current function
		you can alse use tabs, spaces and linebreaks.

	<font color="cyan">'Parameters' list</font>
		select an item to change the return type
		of a parameter or add/remove them via
		longpress or the '+' item

	<font color="cyan">'Subfunctions' list</font>
		add, remove and edit subfunctions of an
		app function. The layout will not switch,
		just the input field texts will change

		red marked items in the subfunctions
		list means that there is smth missing

<font color="green">**** edit examples page ****</font>

	<font color="cyan">'code' text edit</font>
		edit the code of an example snippet.
		<font color="red">Please pay attention on the example rules!</font>

	<font color="cyan">'bold' button</font>
		adds a &lt;b&rt;bold&gt;/b&gt; tag around the selected
		text area and removes the old one if it exists.

	<font color="cyan">'samples' list</font>
		add, remove and edit examples using
		longtouch or the '+' item
		


<font color="yellow">**************************************************
                    SOURCE CODE
**************************************************</font>

         In the following I want to explain
         some special things I have done in
           my code for reducing the size,
      performance or because of other reasons


<font color="green">**** ternary operators ****</font>

	Ternary operators are an excellent
	way for shorting if conditions.
	Instead of using long conditions
	and store values etc. - use ternary
	operators!

	<font color="white"><b>Syntax:</b></font>
		var foo = cond? val_true : val_false;

	<font color="white"><b>Example:</b></font>
		var ran = Math.random();
		alert( ran + ( ran<0.5? " < " : " > " ) + " 0.5!" );


<font color="green">**** higher order functions ****</font>

	You may have seen lines using .sort(), .join()
	or .map(). This three functions are higher order
	functions of different data structures. They can
	do different things with them. Here I want to
	explain some which I have used:

	<font color="cyan">Array.sort</font>
		As the function name says - it sorts an array
		ruled by the function given as argument. The
		argument function should take two variables as
		arguments which have to be compared. Also it
		should return an integer value of 1 or -1
		dependent on it should be moved up or down.
		At the end it returns a new sorted array.

		<font color="white"><b>Syntax:</b></font>
			Array.sort( function( a, b ) );

		<font color="white"><b>Example:</b></font>
			var arr = [5,2,4,1,3].sort( function( a, b ) {
				return a > b? 1 : -1;
			} );
			// arr = [1, 2, 3, 4, 5]

	<font color="cyan">Array.join</font>
		This one is very useful if you want to convert
		an array into a string, each item divided by
		an other string. It is the opposite of
		String.split() which splits up the string on
		given positions.

		<font color="white"><b>Syntax:</b></font>
			Array.join( String );

		<font color="white"><b>Example:</b></font>
			var str = [1,2,3,4,5].join( ", " );
			// str = "1, 2, 3, 4, 5"

	<font color="cyan">Array.filter</font>
		Here the argument function just takes one
		parameter. It should return a boolean value -
		true if it matches the condition inside, or
		false. it returns a new filtered array.

		<font color="white"><b>Syntax:</b></font>
			Array.filter( function( n ) );

		<font color="white"><b>Example:</b></font>
			var arr = [1,2,3,4,5].filter( function( n ) {
				return n / 2 != 0;
			} );
			// arr = [1, 3, 5]

	<font color="cyan">Array.forEach</font>
		This one iterates through the array without a
		counter but the item itself. This can be
		useful if you want to do smth based on the
		data inside the array without moyfying it. It
		also does not return any value.

		<font color="white"><b>Syntax:</b></font>
			Array.forEach( function( item ) );

		<font color="white"><b>Example:</b></font>
			var arr = [];
			[1,2,3,4,5].forEach( function( item ) {
				arr.push( item * 2 );
			} );
			// arr = [2, 4, 6, 8, 10]

	<font color="cyan">Array.map</font>
		Obviously the last example of forEach was very
		bad. Couldn't it work easier?! Of course it
		could! Using Array.map. The argument function
		becomes the item as argument - like forEach.
		The difference is that you can return a value
		which will be inserted into a new array which
		was returned at the end.

		<font color="white"><b>Syntax:</b></font>
			Array.map( function(item) );

			<font color="white"><b>Example:</b></font>
			var arr = [1,2,3,4,5].map( function( n ) {
				return n * 2;
			} );
			// arr = [2, 4, 6, 8, 10]

<font color="purple">___________________________________________________

  Here's the end of my README. If you still have
      questions please contact me directly at
             "<a href="">alex.symbroson@gmail.com</a>"

                   best regards,
                     Symbroson
___________________________________________________</font>

</pre>
