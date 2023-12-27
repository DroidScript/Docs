from native import app

# Called when application is started.
def OnStart():
    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    # Create a choose file button.
    btnFile = app.CreateButton("Choose File", 0.5, 0.1)
    btnFile.SetMargins(0, 0.05, 0, 0)
    btnFile.SetOnTouch(btnFile_OnTouch)
    lay.AddChild(btnFile)

    # Create a choose phone number button.
    btnPhone = app.CreateButton("Choose Phone", 0.5, 0.1)
    btnPhone.SetMargins(0, 0.05, 0, 0)
    btnPhone.SetOnTouch(btnPhone_OnTouch)
    lay.AddChild(btnPhone)

    # Create a choose email button.
    btnEmail = app.CreateButton("Choose Email", 0.5, 0.1)
    btnEmail.SetMargins(0, 0.05, 0, 0)
    btnEmail.SetOnTouch(btnEmail_OnTouch)
    lay.AddChild(btnEmail)

    # Create a choose Google account.
    btnAccount = app.CreateButton("Choose Account", 0.5, 0.1)
    btnAccount.SetMargins(0, 0.05, 0, 0)
    btnAccount.SetOnTouch(btnAccount_OnTouch)
    lay.AddChild(btnAccount)

    # Add layout to app.
    app.AddLayout(lay)

# Called when user touches our 'Choose File' button.
def btnFile_OnTouch():
    app.ChooseFile("Choose a file", "*/*", OnFileChoose)

# Called when a file is chosen.
def OnFileChoose(fileName):
    app.ShowPopup(fileName)

# Called when user touches our 'Choose Phone' button.
def btnPhone_OnTouch():
    app.ChooseContact("phone", OnPhoneChoose)

# Called when an phone contact is chosen.
def OnPhoneChoose(name, number):
     app.ShowPopup(name + " " + number)

# Called when user touches our Choose Email button.
def btnEmail_OnTouch():
    app.ChooseContact("email", OnEmailChoose)

# Called when an email is chosen.
def OnEmailChoose(name, email):
     app.ShowPopup(name + " " + email)

# Called when user touches our 'Choose Account' button.
def btnAccount_OnTouch():
    app.ChooseAccount(OnAccountChoose)

# Called when an account is chosen.
def OnAccountChoose(email):
     app.ShowPopup(email)