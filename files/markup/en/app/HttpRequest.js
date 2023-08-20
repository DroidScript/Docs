// ------------- HEADER SECTION ------------- 


/** # HttpRequest #
 * @brief Send Http request
 * HttpRequest sends a request to a server. baseUrl and path will just be added to one string to get the address.
 * Multiple parameters are available using pipes:
 * 	“param1=value1|param2=value2”
 * $$ app.HttpRequest(type, baseUrl, path, params, callback, headers) $$ 
 * @param {str} type GET:retrieve data|POST:submit data|JSON:post json data|PUT:replace target resource|DELETE:deletes the resource|HEAD:omit body
 * @param {str_url} baseUrl 
 * @param {str} path 
 * @param {str} params 
 * @param {fnc_json} callback {"pNames":["error","reply","status"],"pTypes":["bin","str","num_int"]}
 * @param {str} headers 
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Get Funfact
var address = "http://www.randomfunfacts.com";

<b>app.HttpRequest( "GET", address, null, null, handleReply );</b>

function handleReply( error, reply )
{
	if( error ) alert( reply );
	else
	{
		var funfact = reply.slice( reply.indexOf("<i>") + 3, reply.indexOf("</i>") );
		alert( funfact );
	}
}
 */
    
            