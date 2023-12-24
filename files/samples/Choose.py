def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY")	 
    btnFile = app.CreateButton("Choose File", 0.5, 0.1)
    btnFile.SetMargins(0, 0.05, 0, 0)
    btnFile.SetOnTouch(btnFile_OnTouch)
    lay.AddChild(btnFile)
    btnPhone = app.CreateButton("Choose Phone", 0.5, 0.1)
    btnPhone.SetMargins(0, 0.05, 0, 0)
    btnPhone.SetOnTouch(btnPhone_OnTouch)
    lay.AddChild(btnPhone)
    btnEmail = app.CreateButton("Choose Email", 0.5, 0.1)
    btnEmail.SetMargins(0, 0.05, 0, 0)
    btnEmail.SetOnTouch(btnEmail_OnTouch)
    lay.AddChild(btnEmail)
    btnAccount = app.CreateButton("Choose Account", 0.5, 0.1)
    btnAccount.SetMargins(0, 0.05, 0, 0)
    btnAccount.SetOnTouch(btnAccount_OnTouch)
    lay.AddChild(btnAccount)
    app.AddLayout(lay)

def btnFile_OnTouch():
    app.ChooseFile("Choose a file", "*/*", OnFileChoose)

def OnFileChoose(fileName):
    app.ShowPopup(fileName)

def btnPhone_OnTouch():
    app.ChooseContact("phone", OnPhoneChoose)

def OnPhoneChoose(name, number):
    app.ShowPopup(name + " " + number)

def btnEmail_OnTouch():
    app.ChooseContact("email", OnEmailChoose)

def OnEmailChoose(name, email):
    app.ShowPopup(name + " " + email)

def btnAccount_OnTouch():
    app.ChooseAccount(OnAccountChoose)

def OnAccountChoose(email):
    app.ShowPopup(email)