// ------------- HEADER SECTION -------------


/** # CreateFile #
 * @abbrev fil
 * @brief Returns a new File object
 * Returns a File object.
 * $$ fil = app.CreateFile(file, mode) $$ 
 * @param {str_ptf} file 
 * @param {str} mode r|w|rw
 * @returns dso-File
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern Batch */

/** ### Close ###
 * Close File
 * $$ fil.Close() $$
 */


/** ### GetLength ###
 * @brief Get file size in bytes
 * Returns the file size in bytes.
 * $$ fil.GetLength() $$
 * @returns num_byt
 */


/** ### GetPointer ###
 * @brief Get pointer position
 * Returns the current pointer position in the file.
 * $$ fil.GetPointer() $$
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ fil.GetType() $$
 * @returns str-File
 */


/** ### ReadData ###
 * @brief Read data from file
 * Reads a amount of bytes from the file.
 * $$ fil.ReadData(len, mode) $$
 * @param {num_int} len 
 * @param {str} mode Int|Text|Hex
 */


/** ### ReadNumber ###
 * Read numeric data from file.
 * $$ fil.ReadNumber(type) $$
 * @param {str} type Byte|UByte|Bool|Float|FloatLE|Long|LongLE|Short|UShort|ShortLE|UShortLE|Int|UInt|IntLE
 * @returns num
 */


/** ### ReadText ###
 * @brief Read data as text
 * Read data from the file as text.
 * $$ fil.ReadText(type) $$
 * @param {str} type UTF:read UTF-8 string with 2 byte header,Line:"read one line terminated by &bsol;&bsol;n&comma; &bsol;&bsol;r or &bsol;&bsol;r&bsol;&bsol;n"|Char:read big-endian 16-bit character
 * @returns str
 */


/** ### ReadTextAsync ###
 * @brief Asynchronously read data as text
 * Asynchronously reads a single character or a line as text.
 * $$ fil.ReadTextAsync(type, callback) $$
 * @param {str} type Line:"read one line terminated by &bsol;&bsol;n&comma; &bsol;&bsol;r or &bsol;&bsol;r&bsol;&bsol;n"|Char:read big-endian 16-bit character
 * @param {fnc_json} callback {"pNames":["data"],"pTypes":["str"]}
 */


/** ### Seek ###
 * CHange pointer position to a given byte in the file.
 * $$ fil.Seek(offset) $$
 * @param {num_int} offset 
 */


/** ### SetLength ###
 * Allocate memory for a file.
 * $$ fil.SetLength(len) $$
 * @param {num_int} len 
 */


/** ### Skip ###
 * @brief Let the pointer skip some bytes
 * Let the pointer skip a given number of bytes.
 * $$ fil.Skip(bytes) $$
 * @param {num_int} bytes 
 */


/** ### WriteData ###
 * Write data to the file.
 * $$ fil.WriteData(data, mode) $$
 * @param {str} data FA\,FB\,FC|250\,251\,252|abc46:low order 8-bit bytes
 * @param {str} mode Hex|Int|Text
 */


/** ### WriteNumber ###
 * @brief Write number to the file
 * Writes a number to the file.
 * $$ fil.WriteNumber(data, type) $$
 * @param {num} data 
 * @param {str} type Byte|UByte|Bool|Float|FloatLE|Long|LongLE|Short|UShort|ShortLE|UShortLE|Int|UInt|IntLE
 */


/** ### WriteText ###
 * writes text to file
 * $$ fil.WriteText(data, type) $$
 * @param {str||lst} data [ bytes:num_int ]
 * @param {str} type UTF:write UTF-8 encoded text,Bytes:8-bit bytes|Char:Write big-endian 16-bit characters
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Example
function btn_OnTouch()
{
	var file = app.CreateFile( "/sdcard/test.txt", "rw" );

	file.WriteText( "Hello", "Char" );
	var len = file.GetLength();
	console.log( "file len: " + len );

	file.Seek( len );
	file.WriteNumber( 77, "Byte" );
	file.WriteData( "66,121,101", "Int" );

	file.Seek( 0 );
	var data = file.ReadData( 2 );
	console.log( "first two bytes:" + data[0] + "," + data[1] );

	file.Seek( 0 );
	alert( file.ReadText( "Line" ) );

	file.Close();
}
 */
    
            
    
/**
@sample Python Example
from native import app

def btn_OnTouch():
    file = app.CreateFile( "/sdcard/test.txt", "rw" )

    file.WriteText( "Hello", "Char" )
    len = file.GetLength()
    print( "file len: " + len )

    file.Seek( len )
    file.WriteNumber( 77, "Byte" )
    file.WriteData( "66,121,101", "Int" )

    file.Seek( 0 )
    data = file.ReadData( 2 )
    print( "first two bytes:" + data[0] + "," + data[1] )

    file.Seek( 0 )
    app.Alert( file.ReadText( "Line" ) )

    file.Close()
 */
    
            