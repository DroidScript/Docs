
# Editing Docs using raw JSON files

Open a plain text editor of your choice on your desktop PC.<br>
Personally I use the [https://atom.io](Atom editor) available for Linux, Windows or OS X, because it has any feature you'll need to comfortably edit the docs. This guide will focus on Atom as well.


## Setup

- Open the 'Docs' Project folder
- Open all **files/*.json** files by double-clicking on them in the file tree view
    - for functions.json click **Edit/Folding/Fold Level 2** in the toolbar to get a comfortable overview over all functions
    - Optionally split your view vertically - on the right side you can open temporary needed files like **files/samples/***
- Enable _'Soft Wrap'_ in the Settings/Editor tab


## Additional Views

### Git
press **Ctrl-Shift-9** to open the **git tab** in a new pane on the right.<br>
There you can easily add, commit and even push changes to your repository

### Terminal
- download '**platformio-ide-terminal**' from Settings/Packages
- press **Alt-Shift-T** to open the terminal pane on the bottom


## Resulting view

![Screenshot](Screenshot_Atom.png)


## Generating

- in a terminal navigate to _'files'_ by executing `$ cd files`
- execute `$ node generate.js` to generate all docs
- execute `$ node generate.js [function ...]` to generate specific docs
    - ie. `$ node generate.js Alert CreateLayout` will generate docs for _app.Alert_ and _app.CreateLayout_


## Update Github Pages

Execute following commands to update the GitHub Pages Docs preview:
```shell
# remove old docs from pages
rm -rdf ../docs/docs/

# copy new docs to pages
cp -r docs/ ../docs/
```
Alternatively update them manually with the atom tree view or a filebrowser of your choice
