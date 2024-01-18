// ------------- HEADER SECTION -------------


/** # AddDataTable #
 * @abbrev tbl
 * @brief Adds a new DataTable Control.
 * Adds a table control on a given layout. See @CreateDataTable for a full documentation.
 * $$ tbl = MUI.AddDataTable(parent, columns, values, width=-1, height=-1, options?) $$
 * @param {dso} parent @../app/CreateLayout
 * @param {lst} columns An array of strings of the form Name:Type for column header. Where 'Name' is the column name and 'Type is the column type [Can be Sortable or Numeric]'
 * @param {lst} values An array of strings of the form Val1:Val2:Val3...
 * @param {num} [width=-1] Fraction of the screen width
 * @param {num} [height=-1] Fraction of the screen height
 * @param {str_com} [options] Selectable
 * @returns obj
*/
