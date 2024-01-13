// ------------- HEADER SECTION -------------


/** # WalkFolder #
 * @brief Lists the contents of a folder recursively
 * Lists a directory recursively similar to app.@ListFolder
 * $$ app.WalkFolder(path, filter?, limit?, options?) $$ 
 * @param {str_pth} path 
 * @param {str} [filter] 
 * @param {num_int} [limit] 
 * @param {str_com} [options] Alphasort:sorts the paths in alphabetical order,FullPath:returns absolute paths to the listed items,RegEx:accepts regexp patterns,Folders:list folders only,Files:list files only,NoEmpty:hide empty folders,project:Shows DS project folders only
 * @returns lst-[ paths:str_pth ]
*/


