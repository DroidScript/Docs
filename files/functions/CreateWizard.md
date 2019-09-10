The wizard is supposed to simplify a configuration progress which requires several inputs and decisions by the user.
These can be settings and usage terms on first startup or an installation process as you might know from desktop applications.
%c
The callback function will be called each time the user changes the wizard page.
The functions gets the current wizard layout and the page index (starting from 1) to identify the current progress.

### Page Initialisation
On the very first call the page index is **0** which means 'initialisation'.
Then you have to create and add all wizard pages to the passed (frame) layout.

In case the user cancels the wizard the index is **-1**.

<premium>