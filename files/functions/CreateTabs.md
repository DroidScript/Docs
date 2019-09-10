Tabs are useful if you have multiple subsections in your app. The user can then press the title of a tab and the control will automatically switch to the corresponding layout.
%c
To add children to a tab layout you have to retreive it first (because they were already created by the control):
<js>var layTab1 = tab.GetLayout( "TabName1" );</js>
Then you canuse it as every normal layout:dso-"CreateLayout" control