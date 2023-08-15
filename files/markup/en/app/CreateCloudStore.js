
/** # CreateCloudStore #
 * @abbrev cld
 * 
 * $$ cld = app.CreateCloudStore(apiKey) $$ 
 * @param {str} apiKey 
 * @returns dso-CloudStore
*/


// CreateCloudStore.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
The CloudStore component allows you to easily store and retrieve app data (as a simple or complex JSON object) from a cloud.
This is useful for game high scores, IOT sensor data storage etc. which should be shared across all user devices even if they're not in the same local network.
Also have look at the [CloudStore Dashboard and API documentation](https://droidscript.github.io/CloudStore/#dashboard)

<premium>

CloudStore has the following limitations:-

	- once every 3 seconds max read/write
	- 300 read/writes per day per file
	- 3 files per user
	- 3k max file size.

To sign up for your free CloudStore key, please contact [support\@droidscript.org](mailto:support\@droidscript.org)
More files/space can be provided for a small fee

**Note:** CloudStore is still in beta, so don't rely on it to store any important data.

## Building APK

If you decide to share your CloudStore app with someone else it is perfectly possible to build an APK of the app.

However, please be aware that the apiKey is included in plain text unless you **obfuscate
your app**.
For extra security, you can split your key string into 2 or 3 parts (use obscurely
named global variables or functions) and put them in separate parts of your code, then
combine the parts only when making CloudStore API calls.

 */

/** ## Methods ##
 * These are the methods available for CreateCloudStore
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ cld.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ cld.GetType() $$
 * @returns str-CloudStore
 */


/** ### Delete ###
 * Deletes a file in the cloud.
 * $$ cld.Delete(file, callback) $$
 * @param {str_ptf} file 
 * @param {fnc_json} callback {"pNames":["success","result","status"],"pTypes":["bin","obj-{data:str,error:str}","num_int"]}
 */


/** ### List ###
 * Lists files of the cloud.
 * $$ cld.List(filter, callback) $$
 * @param {str} filter 
 * @param {fnc_json} callback {"pNames":["error","result","status"],"pTypes":["bin","obj-{data:str_com,error:str}","num_int"]}
 */


/** ### Load ###
 * Loads data from the cloud.
 * $$ cld.Load(file, callback, options) $$
 * @param {str_ptf} file 
 * @param {str} callback 
 * @param {fnc_json} options {"pNames":["error","result","status"],"pTypes":["bin","obj-{data:all,error:str}","num_int"]}
 */


/** ### Merge ###
 * Merges an object with an already existing in the cloud.
 * $$ cld.Merge(file, data, callback) $$
 * @param {str_ptf} file 
 * @param {obj} data 
 * @param {fnc_json} callback {"pNames":["success","result","status"],"pTypes":["bin","obj-{data:str-Entry Saved,error:str}","num_int"]}
 */


/** ### _Method ###
 * Allows access to other functions defined on the object in Java via reflection. *  * <premium>
 * $$ cld._Method(name, types, p1, p2, p3, p4) $$
 * @param {str} name 
 * @param {lst} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
 * @param {str} p1 
 * @param {str} p2 
 * @param {str} p3 
 * @param {str} p4 
 * @returns all
 */


/** ### Save ###
 * Saves data in the cloud.
 * $$ cld.Save(file, data, callback, options) $$
 * @param {str_ptf} file 
 * @param {all} data 
 * @param {fnc_json} callback {"pNames":["success","result","status"],"pTypes":["bin","obj-{data:str,error:str}","num_int"]}
 * @param {str} options 
 */


/** ### SetDescription ###
 * Set a control description for accessibility
 * $$ cld.SetDescription(desc) $$
 * @param {str} desc 
 */


/** ### Upload ###
 * Upload a file to the cloud.
 * $$ cld.Upload(data, name, type, callback, password) $$
 * @param {str} data 
 * @param {str} name 
 * @param {str_mim} type 
 * @param {fnc_json} callback {"pNames":["response"],"pTypes":["obj-{error:str,name:str,folder:str,id:str,mimetype:str_mim,size:num}"]}
 * @param {str} password 
 */

// CreateCloudStore.txt --> All the sample codes

/** @Sample
 
 */

