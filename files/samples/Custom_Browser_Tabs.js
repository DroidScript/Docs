
//Custom browser tabs allow you to use the
//security features of Google Chrome, such
//as Google account logins (OAuth) that are not
//available in WebViews.

function OnStart()
{
   lay = app.CreateLayout("linear", "VCenter, FillXY")
   btn = app.AddButton(lay, "Open Browser Tab")
   btn.SetOnTouch( btn_OnTouch )
   app.AddLayout(lay)

   tabs = app.CreateCustomTabs()
}

function btn_OnTouch( )
{
   tabs.OpenUrl( "http://droidscript.org" )
}
