from native import app, ui

# Translated Python Code

# Called when application is started.
def OnStart():
    global edtPass, edt, crypt
    # Create a layout with objects vertically centered.
    lay = ui.createLayout( "linear", "vc, fillxy" )

    # Create a text edit box for password.
    edtPass = ui.createTextEdit( "myPass1", 0.4 )
    lay.addChild( edtPass )

    # Create a text edit box for message.
    edt = ui.createTextEdit( "Hello World!", 0.8, 0.3 )
    edt.setMargins( 0, 0.1, 0, 0 )
    lay.addChild( edt )

    # Create an 'Encrypt' button.
    btnEncrypt = ui.createButton( "Encrypt", 0.3 )
    btnEncrypt.setOnTouch( btnEncrypt_OnTouch )
    lay.addChild( btnEncrypt )

    # Create a 'Decrypt' button.
    btnDecrypt = ui.createButton( "Decrypt", 0.3 )
    btnDecrypt.setOnTouch( btnDecrypt_OnTouch )
    lay.addChild( btnDecrypt )

    # Create a 'Hash' button.
    btnHash = ui.createButton( "Hash", 0.3 )
    btnHash.setOnTouch( btnHash_OnTouch )
    lay.addChild( btnHash )

    # Add layout to app.
    app.addLayout( lay )

    # Create Cryptography object.
    crypt = native.createCrypt()

# Called when user touches 'Encrypt' button.
def btnEncrypt_OnTouch():
    # Get password and text.
    passw = edtPass.getText()
    txt = edt.getText()

    # Encrypt text.
    txt = crypt.encrypt( txt, passw )
    edt.setText( txt )

# Called when user touches 'Decrypt' button.
def btnDecrypt_OnTouch():
    # Get password and text.
    passw = edtPass.getText()
    txt = edt.getText()

    # Decrypt text.
    txt = crypt.decrypt( txt, passw )
    edt.setText( txt )

# Generate MD5 Hash of password.
def btnHash_OnTouch():
    passw = edtPass.getText()
    md5 = crypt.hash( passw, "md5" )
    app.showPopup( md5 )