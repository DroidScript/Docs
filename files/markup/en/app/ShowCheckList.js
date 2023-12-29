// ------------- HEADER SECTION ------------- 


/** # ShowCheckList #
 * @abbrev ckl
 * @brief Shows a CheckList
 * The check list provides a similar functionality to the “Multi” [ListDiaog](CreateListDialog.htm), although you can adjust its initial check states with an object structure.
 * $$ ckl = app.ShowCheckList(title, list, callback, width, height, options) $$ 
 * @param {str} title 
 * @param {str} list title:str\:checked:bin||lst_obj-{ title:str, check:bin }
 * @param {fnc_json} callback {"pNames":["data"],"pTypes":["obj-{ title:str, checked:bin }"]}
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str} options sun-moon:shows sun and moon icons instead of default check boxes
 * @returns dso-CheckList
*/




// ------------- SAMPLES ------------- 


    
/**
@sample 
function OnStart()
{
	<b>app.ShowCheckList( "Select Animals", "Sheep:true,Cows:false,Pigs:false", OnFinish, 0.8, 0.5 );</b>
}

function OnFinish( data )
{
	if( data )
		app.ShowPopup( JSON.stringify(data) );
	else
	    app.ShowPopup( "Cancelled" );
}
 */
    
            
    
/**
@sample Python 
from native import app

def OnStart():
    app.ShowCheckList( "Select Animals", "Sheep:true,Cows:false,Pigs:false", OnFinish, 0.8, 0.5 )

def OnFinish(data):
    if data:
        app.ShowPopup( JSON.stringify(data) )
    else:
        app.ShowPopup( "Cancelled" )
 */
    
            