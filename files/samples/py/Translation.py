from native import app

#Translated Python code :

#Called when application is started.
def OnStart():
    global lay, spinLang
    #Set the current language.
    language = app.LoadText("Language", "English")
    app.SetAppLanguage(language)

    #Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    #Add text.
    txt = app.AddText(lay, T("SelectLang"), 0.8, -1, "MultiLine")
    txt.SetTextSize(16)
    txt.SetMargins(0, 0, 0, 0.02)

    #Add language spinner.
    spinLang = app.AddSpinner(lay, app.GetAppLanguages(), 0.4)
    spinLang.SelectItem(language)
    spinLang.SetOnChange(spinLang_OnChange)

    #Add text.
    txt = app.AddText(lay, T("SupportPremium"), 0.8, 0.3, "MultiLine")
    txt.SetMargins(0, 0.1)
    txt.SetTextSize(22)

    #Add layout to app.
    app.AddLayout(lay)

#Handle language spinner.
def spinLang_OnChange():
    #Set chosen language.
    language = spinLang.GetText()
    app.SaveText("Language", language)
    app.SetAppLanguage(language)

    #Re-create app with new language.
    #(alternatively you could ask the user to restart the app)
    app.DestroyLayout(lay)
    OnStart()