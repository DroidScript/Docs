Creates a NodeJS background process with all the functionality of common node.js.

Note that to define private functions (functions that are invisible by the main app) you have to declare them as global variable without usign the var keyword.
This is actually a safer way of working as it prevents name clashes and libraries overwriting each other's functions and variables accidentally.  Ideally you should put your code into objects or classes for better protection and avoid using many globals.

<js>
var myLocalVariable = "Local Hello";
myGlobalVariable = "Global Hello"

function myLocalFunction() { return "Local Hello"; }
myGlobalFunction = function() { return "Global Hello"; }
</js>

For more details have a look at the Node docs in the @../Plugins page