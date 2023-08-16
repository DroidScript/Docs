
//Allow anchor book marks to work in JQM
$(document).ready(function()
{
	try 
	{
	    var anchor_id = window.location.hash;
	    if(anchor_id != ""){
			var new_position = $(anchor_id).offset();
			setTimeout(function(){window.scrollTo(new_position.left,new_position.top-50)}, 100);
	    }
	}
	catch(e) {}
})
