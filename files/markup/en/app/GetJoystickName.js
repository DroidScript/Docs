// ------------- HEADER SECTION -------------


/** # GetJoystickName #
 * Returns the name of a conected joystick.
 * 
 * See Also: @GetJoystickState
 * $$ app.GetJoystickName(id) $$ 
 * @param {num_int} id 
 * @returns str
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Show Joystick name on id 0
function OnStart()
{
	<b>name = app.GetJoystickName( 0 );</b>
	app.Alert( name );
}
 */
    
            
    
/**
@sample Python Demonstration
from native import app

def OnStart():
    app.CreateDebug()
    app.ShowDebug(True)

    app.Debug("\n\t\tHello World!")
 */
    
            
    
/**
@sample Python Show Joystick name on id 0
from native import app

def OnStart():
    name = app.GetJoystickName(0)
    app.Alert(name)
 */
    
            
    
/**
@sample Python Generate Random Number
from native import app
import random

def OnStart():
    randomNumber = random.randint(1, 100)
    app.ShowPopup(randomNumber)
 */
    
            
    
/**
@sample Python Calculate Square of a Number
from native import app

def OnStart():
    number = 5
    square = number * number
    app.ShowPopup(square)
 */
    
            
    
/**
@sample Python Perform Addition
from native import app

def OnStart():
    num1 = 5
    num2 = 10
    sum = num1 + num2
    app.ShowPopup(sum)
 */
    
            
    
/**
@sample Python Display Current Date and Time
from native import app
import datetime

def OnStart():
    now = datetime.datetime.now()
    dateTime = now.strftime("%Y-%m-%d %H:%M:%S")
    app.ShowPopup(dateTime)
 */
    
            
    
/**
@sample Python Perform String Concatenation
from native import app

def OnStart():
    str1 = "Hello"
    str2 = "World"
    result = str1 + " " + str2
    app.ShowPopup(result)
 */
    
            
    
/**
@sample Python Check if a Number is Even or Odd
from native import app

def OnStart():
    number = 7
    if number % 2 == 0:
        app.ShowPopup(str(number) + " is even")
    else:
        app.ShowPopup(str(number) + " is odd")
 */
    
            