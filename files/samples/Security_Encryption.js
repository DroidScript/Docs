
//Called when application is started.
function OnStart()
{
    //Create a layout with objects vertically centered.
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )    

    //Create an text edit box for password.
    edtPass = app.CreateTextEdit( "myPass1", 0.4 )
    lay.AddChild( edtPass )

    //Create an text edit box for message
    edt = app.CreateTextEdit( "Hello World!", 0.8, 0.3 )
    edt.SetMargins( 0,0.1,0,0 )
    lay.AddChild( edt )
    
    //Create an 'Encrypt' button..
    btnEncrypt = app.CreateButton( "Encrypt", 0.3 )
    btnEncrypt.SetOnTouch( btnEncrypt_OnTouch )
    lay.AddChild( btnEncrypt )

    //Create an 'Decrypt' button..
    btnDecrypt = app.CreateButton( "Decrypt", 0.3 )
    btnDecrypt.SetOnTouch( btnDecrypt_OnTouch )
    lay.AddChild( btnDecrypt )
    
    //Create a 'Hash' button..
    btnHash = app.CreateButton( "Hash", 0.3 )
    btnHash.SetOnTouch( btnHash_OnTouch )
    lay.AddChild( btnHash )
    
    //Add layout to app.    
    app.AddLayout( lay )
    
    //Create Cryptography object.
    crypt = app.CreateCrypt()
}

//Called when user touches 'Encrypt' button.
function btnEncrypt_OnTouch()
{ 
    //Get password and text.
    var pass = edtPass.GetText()
    var txt = edt.GetText()
    
    //Encrypt text.
    var txt = crypt.Encrypt( txt, pass )
    edt.SetText( txt )
}

//Called when user touches 'Decrypt' button.
function btnDecrypt_OnTouch()
{
    //Get password and text.
    var pass = edtPass.GetText()
    var txt = edt.GetText()
    
    //Decrypt text.
    txt = crypt.Decrypt( txt, pass )
    edt.SetText( txt )
}

//Genrate MD5 Hash of password.
function btnHash_OnTouch()
{
    var pass = edtPass.GetText()
    var md5 = crypt.Hash( pass, "MD5") 
    app.ShowPopup( md5 )
}


