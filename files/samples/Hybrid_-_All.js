
//Make this a Hybrid app.
cfg.Hybrid

//Called after application is started.
function OnStart()
{
    alert( "This demo is best viewed on a tablet" )

    mainLay = ui.addLayout( "main", "linear", "fillxy" )
    mainLay.setOnTouch(function() {
        ui.showPopup("You click the main layout")
    })

    apb = ui.addAppBar(mainLay, "My App", "menu", 1)
    apb.setOnMenu(openDrawer)
    apb.setOnTouch(function() {
        console.log("Hello world")
    })

    apbLay = ui.addLayout(null, "Linear", "Horizontal,Right,NoDom,VCenter")
    apbTextField = ui.addTextField(apbLay, "", "outlined,secondary,small", 0.2)
    apbTextField.setPlaceholder('Search something...')
    apbBadge = ui.addButton(apbLay, "notifications", "icon")
    apbBadge.setTextColor('#ffffff')
    apbBadge.setBadge(9, 'primary')
    apbBadge.setOnTouch(function() {
        console.log("badge is click")
    })

    apbBtn = ui.addButton(apbLay, "account_circle", "Icon")
    apbBtn.setTextColor('#ffffff')
    apbBtn = ui.addButton(apbLay, "more_vert", "Icon")
    apbBtn.setTextColor('#ffffff')

    apb.addLayout(apbLay)

    //Dark/light toggle button
    btnBright = ui.addButton( mainLay, "brightness_5", "icon,primary" )
    btnBright.setOnTouch(btnBright_onTouch)

    // Change the theme color of the ui~

    // btnBright.setOnTouch( function() {
    //     ui.setThemeColor( {
    //         primary: "#009688",
    //         secondary: "#673ab7"
    //     })
    // })

    var myTabs = "Layout,Text,Buttons,Forms,Slider,Dropdown,Images,Pickers,Lists,Dialogs,Progress,BottomNavbar,Stepper,Accordion,Chips"
    tab = ui.addTabs(mainLay, myTabs, "center,scrollable", 1, 1 )
    tab.setMargins(0, 0.01, 0, 0)
    tab.setTextColor('primary')

        // layout lay
        layoutLay = tab.getLayout('Layout')
        //layoutLay.setOptions('Horizontal')
        //layoutLay.setMargins(0.01, 0.01, 0, 0)
        layoutLay.setChildMargins( 0.02, 0.02, 0, 0 )

            lay12 = ui.addLayout(layoutLay, "Linear", "VCenter,ScrollX", 0.5, 0.2)
            lay12.setOnTouch( e => { console.log("Layout is click")} )
            lay12.setBackColor( "rgba(0,0,0,0.1)" )

                btn12_1 = ui.addButton(lay12, "Stop Propagation")
                btn12_1.setOnTouch( e => { console.log("Button is click")} )
                btn12_1.setOnTouchDown( e => { console.log("Button is touch down")} )

                btn12_2 = ui.addButton(lay12, "Stop Propagation" )
                btn12_2.setOnTouch( e => { console.log("Button is click")} )
                btn12_2.setOnTouchDown( e => { console.log("Button is touch down")} )

            lay13 = ui.addLayout(layoutLay, "Linear", "VCenter,left,Horiz", 0.5 )

                btn12 = ui.addButtonGroup(lay13, "Show")
                btn12.setOnTouch( () => {
                    lay12.show()
                })

                btn12 = ui.addButtonGroup(lay13, "Hide")
                btn12.setOnTouch( () => {
                    lay12.hide()
                })

                btn12 = ui.addButtonGroup(lay13, "Vertical,Horizontal")
                btn12.setOnTouch( e => { lay12.setOrientation(e) } )

                btn12 = ui.addButtonGroup(lay13, "Left,Center,Right")
                btn12.setOnTouch( e => { lay12.setAlignment(e) } )

                btn12 = ui.addButtonGroup(lay13, "Top,Center,Bottom")
                btn12.setOnTouch( e => { lay12.setAlignment(e) } )

            // Frame layout
            layFrame = ui.addLayout(layoutLay, "Frame", "", 0.3, 0.2)
            layFrame.setBackColor( "rgba(0,0,0,0.1)" )
            var image = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/220px-Hapus_Mango.jpg"
            var image2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Hornet_Mascot.png/640px-Hornet_Mascot.png"
            var img1 = ui.addImage( layFrame, image, "", null, 0.2 )
            var layVert = ui.addLayout( layFrame, "Linear", "FillXY,Left,VCenter" )
            var img2 = ui.addImage( layVert, image2, "button", null, 0.1 )
            img2.setOnTouch( ()=>{ ui.showPopup("Bzzzzzz") } )

            // Slide layout
            laySlide = ui.addLayout(layoutLay, "Slide", "VCenter", 0.3, 0.2)
            laySlide.setBackColor( "rgba(0,0,0,0.1)" )
            var img1 = ui.addImage( laySlide, image, "", null, 0.2 )
            var img2 = ui.addImage( laySlide, image2, "", null, 0.1 )
            var btn = ui.addButtonGroup(layoutLay, "Previous,Next")
            btn.setOnTouch( e => { if(e=="Next") laySlide.next(); else laySlide.previous() } )


        // text lay
        textLay = tab.getLayout('Text')
        textLay.setOptions('Horizontal')
        textLay.setMargins(0, 0.01, 0, 0)

        textLay1 = ui.addLayout(textLay, "Linear", "VCenter,Left,ScrollY", 0.48, 0.8 )
            // text styling
            h1 = ui.addText(textLay1, "This is heading", "Multiline,H1")
            h2 = ui.addText(textLay1, "This is heading", "Multiline,H2")
            h3 = ui.addText(textLay1, "This is heading", "Multiline,H3")
            h4 = ui.addText(textLay1, "This is heading", "Multiline,H4")
            h5 = ui.addText(textLay1, "This is heading", "Multiline,H5")
            h6 = ui.addText(textLay1, "This is heading", "Multiline,H6")

            // support for text truncation
            var _ss = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste amet vero obcaecati, quasi quisquam nihil soluta minima illum tempore, alias sequi tempora a porro accusamus consequatur magnam dolorum nobis possimus."
            body1 = ui.addText(textLay1, _ss, "Singleline,body1", 0.4 )
            body1.setEllipsize( "ellipsis" )

            body2 = ui.addText(textLay1, "This is body2 text", "Multiline,body2")
            buttonText = ui.addText(textLay1, "This is button text", "Multiline,button")
            caption = ui.addText(textLay1, "This is caption text", "Multiline,caption")
            overline = ui.addText(textLay1, "This is caption text", "Multiline,overline")
            subtitle1 = ui.addText(textLay1, "This is caption text", "Multiline,subtitle1")
            subtitle2 = ui.addText(textLay1, "This is caption text", "Multiline,subtitle2")

        textLay2 = ui.addLayout(textLay, "Linear", "VCenter,Left", 0.48)
            text1 = ui.addText(textLay2, "This is a sample text designing in EnjineIO", "Multiline")
            text1.setBackColor('#673ab7')
            text1.setTextColor('#ffffff')
            text1.setPadding(16, 16, 16, 16, 'px')
            text1.setCornerRadius(20)
            text1.setMargins(0,0,0,0.1)

            text = ui.addText(textLay2, "This is a <strong>strong</strong> html text with <i>italic words</i>.", "Multiline,Html")
            text.setMargins(0,0,0,0.1)
            text.setFontFile('fonts/Montserrat.ttf')

            // Change fontFile, textSize and Color
            text2 = ui.addText(textLay2, "This is a new text with setFontFile method. The textSize also is set to 25.", "Multiline")
            text2.setFontFile('fonts/ExtraBold.ttf')
            text2.setColor("#009688")
            text2.setTextSize(25)


        // buttons lay
        btnLay = tab.getLayout('Buttons')
        btnLay.setOptions("Horizontal")
        btnLay.setMargins(0, 0.01, 0, 0)

        btnLay1 = ui.addLayout(btnLay, "Linear", "VCenter", 0.48)

            changeThemeColorBtn = ui.addButton( btnLay1, "Change theme color", "primary")
            changeThemeColorBtn.setOnTouch( function() {
                ui.setThemeColor( "#009688", '#673ab7' )
            })

            btn1 = ui.addButton( btnLay1, "Primary", "primary")
            btn1.setOnTouch( function() {
                this.setText('This is another long text')
            })

            btn2 = ui.addButton( btnLay1, "Secondary", "secondary" )
            btn2.setOnTouch( function() { ui.showPopup( this.margins.top ) })

            //Text buttons
            layHoriz = ui.addLayout( btnLay1, "Linear", "Horizontal")
            btn = ui.addButton( layHoriz, "Default", "text")
            btn = ui.addButton( layHoriz, "Primary", "text,primary")
            btn = ui.addButton( layHoriz, "Secondary", "text,secondary" )

            //Outlined buttons
            layHoriz = ui.addLayout( btnLay1, "Linear", "Horizontal")
            btn = ui.addButton( layHoriz, "Default", "outlined")
            btn = ui.addButton( layHoriz, "Primary", "outlined,primary")
            btn = ui.addButton( layHoriz, "Secondary", "outlined,secondary")


            layHoriz = ui.addLayout( btnLay1, "Linear", "Horizontal" )
            btnSmall = ui.addButton( layHoriz, "Small", "small")
            btnMed = ui.addButton( layHoriz, "Medium", "medium" )
            btnLarge = ui.addButton( layHoriz, "Large", "large")

            btnUpload = ui.addButton( btnLay1, "Upload", "upload,primary")
            btnUploadIcon = ui.addButton( btnLay1, "photo_camera", "upload,icon,primary" )

        btnLay2 = ui.addLayout(btnLay, "Linear", "VCenter", 0.48)

            // ButtonGroup
            btg1 = ui.addButtonGroup(btnLay2, "Button 1, Button 2, Button 3")
            btg2 = ui.addButtonGroup(btnLay2, "Choice 1, Choice 2, Choice3", "secondary,outlined")
            btg3 = ui.addButtonGroup(btnLay2, "remove,add", "outlined,icon")
            btg4 = ui.addButtonGroup(btnLay2, "Remove 1, Remove 2, Remove 3", "vertical, primary,contained")
            btg4.setOnTouch( btg4_onTouch )

            // With badge
            txt = ui.addText(btnLay2, "Button with Badge")
            btnBadge = ui.addButton(btnLay2, "message", "icon")
            btnBadge.setBadge(5)

            btnBadge = ui.addButton(btnLay2, "notifications", "icon")
            btnBadge.setBadge(9, 'primary')

            // With badge
            txt = ui.addText(btnLay2, "Button with Tooltip")
            btnTip = ui.addButton(btnLay2, "message", "icon")
            btnTip.setToolTip("This is a tooltip")

            btnTip = ui.addButton(btnLay2, "notifications", "icon")
            btnTip.setBadge(9, 'primary')
            btnTip.setToolTip("Left Tooltip", "left")

            btnTip = ui.addButton(btnLay2, "notifications", "icon")
            btnTip.setToolTip("Yet this is another tooltip", "bottom")

        /**
            Tab layout for Forms
        */
        txtfLay = tab.getLayout('Forms')
        txtfLay.setOptions('Horizontal')
        txtfLay.setMargins(0, 0.01, 0, 0)

        frmLay1 = ui.addLayout(txtfLay, "Linear", "Left", 0.3)
        frmLay2 = ui.addLayout(txtfLay, "Linear", "Left", 0.3)
        frmLay3 = ui.addLayout(txtfLay, "Linear", "Left", 0.3)

        // TextField
        hnt = ui.addText(frmLay1, "Standard textfield")
        txf1 = ui.addTextField(frmLay1, "text", "Text")
        txf1.setLabel("Type your name")
        txf1.setMargins(0, 0, 0, 0.008)

        hnt = ui.addText(frmLay1, "Filled textfield")
        txf2 = ui.addTextField(frmLay1, "", "Password,Primary,Filled")
        txf2.setLabel("Type Password")
        txf2.setMargins(0, 0, 0, 0.008)

        hnt = ui.addText(frmLay1, "Outlined textfield")
        txf3 = ui.addTextField(frmLay1, null, "Number,Secondary,Outlined")
        txf3.setLabel("Type Age")

        // Select
        hnt = ui.addText(frmLay1, "Form Select")
        sel = ui.addSelect(frmLay1, "Filled,Outlined,Standard,Multiple,Small,Medium", "Primary,Outlined,Multiple", 0.2)
        sel.setOnChange( function( val ) {
            this.setOptions( val.join( ", " ) )
        })
        sel.setLabel("Select an option")

        // TextFiels Multiline
        hnt = ui.addText(frmLay1, "Multiline inline")
        var text = "The quick brown fox jumps over the lazy dog."
        mtxf = ui.addTextField(frmLay1, text, "multiline", 0.25)
        mtxf.setRows(1)

        hnt = ui.addText(frmLay1, "Multiline max rows 5")
        var text = "The quick brown fox jumps over the lazy dog."
        mtxf = ui.addTextField(frmLay1, text, "multiline,outlined", 0.25)
        mtxf.setRows( 3, 5 )


        // Switches
        swt = ui.addSwitch(frmLay2, "Some label here", "secondary")

            // SwitchGroup
        swtg = ui.addSwitchGroup(frmLay2, "Bluetooth:bluetooth,Wi-fi:wifi", "secondary", 0.25)
        swtg.setValueByIndex(1, true)
        swtg.setLabel("Additional settings")
        swtg.setOnTouch( (title, value, index) => { console.log(title+" - "+value) })

        // RadioGroup
        rdg = ui.addRadioGroup(frmLay2, "Banana,Mango,Orange", "Primary")
        rdg.setOnChange( v => ui.showPopup( v ) )

        btnRdg = ui.addButton( frmLay2, "Get Radio Group Value" )
        btnRdg.setOnTouch( () => ui.showPopup( rdg.getValue() ) )

        // Checkboxes
        ckb = ui.addCheckbox(frmLay2, "This is a label", "Secondary, Right", 0.3)
        ckb.setOnTouch( function( value )
        {
            ui.showPopup( "Value is " + this.props.checked )
        })

        ckb1 = ui.addCheckbox(frmLay2, "This is a label", "Secondary", 0.3)
        ckb1.setTextColor( "#009688" )

        // Checkbox Group
        ckbg = ui.addCheckboxGroup(frmLay2, "Jim, Fred, Bill", 'primary', 0.4)

        btn = ui.addButton(frmLay2, "Get CheckBox Checked Items", "primary, contained")
        btn.setOnTouch(function() {
            var checked = ckbg.getChecked()
            ui.showPopup(checked)
        })

        // TextField

        hnt = ui.addText(frmLay3, "Complete password input implementation. Click the end adornment icon to see how it works")
        txf3 = ui.addTextField(frmLay3, null, "Password,Secondary,Outlined")
        txf3.setStartAdornment("account_circle", "icon")
        txf3.setEndAdornment("visibility_off", "icon,touchable")
        txf3.setLabel("Type password")
        txf3.setEndAdornmentOnTouch( function() {
            if(this.getEndAdornment() == "visibility_off") {
                this.setEndAdornment("visibility_on", "icon,touchable")
                this.setType('text')
            }
            else {
                this.setEndAdornment("visibility_off", "icon,touchable")
                this.setType('password')
            }
        })
        txf3.setMargins(0, 0.01, 0, 0.03)


        hnt = ui.addText(frmLay3, "With start adornment")
        txf1 = ui.addTextField(frmLay3, "text", "Text")
        txf1.setStartAdornment("account_circle", "icon")
        txf1.setLabel("Type your name")
        txf1.setMargins(0, 0, 0, 0.008)

        hnt = ui.addText(frmLay3, "With end adornment")
        txf2 = ui.addTextField(frmLay3, "", "Password,Primary,Filled")
        txf2.setEndAdornment("visibility_off", "icon")
        txf2.setLabel("Type Password")
        txf2.setMargins(0, 0, 0, 0.008)

        hnt = ui.addText(frmLay3, "Start text adornment")
        txf1 = ui.addTextField(frmLay3, "", "Number")
        txf1.setStartAdornment("USD")
        txf1.setLabel("Type amount")
        txf1.setMargins(0, 0.01, 0, 0.008)

        hnt = ui.addText(frmLay3, "End text adornment")
        txf2 = ui.addTextField(frmLay3, "", "Number,Primary,Filled")
        txf2.setEndAdornment("KG")
        txf2.setLabel("Type weight")
        txf2.setMargins(0, 0, 0, 0.008)

        /**
            Tab layout for Sliders
        */
        slrLay = tab.getLayout('Slider')
        slrLay.setMargins(0, 0.01, 0, 0)
        slrLay.setOptions('Center')

        sld1 = ui.addSlider(slrLay, 10, "secondary", 0.5)
        sld1.setOnChange( value => { console.log("On change", value) })
        sld1.setOnSelect( value => { alert("Final value is "+value) })

        sld2 = ui.addSlider(slrLay, 15, "Primary", 0.5)
        sld2.setStep(10)
        sld2.setMarks(true)

        var marks = "10km:10,20km:20,50km:50";
        sld3 = ui.addSlider(slrLay, 15, "Primary", 0.5)
        sld3.setStep(10)
        sld3.setMarks(marks)
        sld3.setValueLabelDisplay("auto")

        /**
            Tab layout for Dropdown
        */
        drpLay = tab.getLayout('Dropdown')
        drpLay.setMargins(0, 0.01, 0, 0)

        //Dropdown
        drp = ui.addDropdown(drpLay, "Some choice,Another Choice,Another longer choice", "contained,secondary")
        drp.setValue(2)


        menuBtn1 = ui.addButton(drpLay, "Open Menu Here")
        menuBtn1.setMargins(0, 0.01, 0, 0.3)
        menuBtn1.setOnTouch( function() { menus.show(this) })

        // adds a menu assing a control where to anchor
        menus = ui.addMenu(menuBtn1, "Fred, Bill, James")
        menus.setOnTouch( (menu, index) =>{ ui.showPopup(menu) })

        // anchor menu to another control
        menuBtn2 = ui.addButton(drpLay, "Transfer Menu Here", "contained,secondary")
        menuBtn2.setOnTouch( function() { menus.show(this) })

        /**
            Tab layout for images
        */
        imgLay = tab.getLayout('Images')
        imgLay.setMargins(0, 0.01, 0, 0)

        var image = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/220px-Hapus_Mango.jpg"
        img1 = ui.addImage( imgLay, image, "button", 0.2)
        img1.setBorderRadius(10, 20, 10, 20, 'px')
        img1.setOnTouch( function(){ ui.showPopup( this.file ) } )
        img1.setOnLoad( () => { console.log('Image is fully loaded') } )
        img1.setOnTouchUp( () => { console.log("Image on touch up") } )
        img1.setOnTouchDown( () => { console.log("Image on touch down") } )
        getPixelBtn = ui.addButton(imgLay, "Get pixel data @ 2,2, 10,10", 'outlined')
        getPixelBtn.setOnTouch(function() {
            var data = img1.getPixelData(2, 2, 10, 10)
            console.log(data)
        })

        img2 = ui.addImage( imgLay, image, "Button", 0.1)
        img2.setOnDoubleTouch( () => { console.log("Double click") } )
        img2.enableContextMenu(true)

        getPixelBtn = ui.addButton(imgLay, "Get pixel color @ 5,5", 'outlined')
        getPixelBtn.setOnTouch(function() {
            var color = img2.getPixelColor(5,5)
            console.log(color)
        })



        /**
            Tab layout for pickers
        */

        // Date Pickers
        pkrLay = tab.getLayout('Pickers')
        pkrLayTxt = ui.addText(pkrLay, "Pickers for date, time and the like are under development...")

        // list
        lstLay = tab.getLayout('Lists')
        lstLay.setMargins(0, 0.01, 0, 0)

        lst = ui.addList(lstLay, [ "Javascript", "Python", "Java" ], "dense,selectable", 0.2)
        lst.setOnSelect(function(title, index) {
            console.log(title, index)
            console.log(this.getSelectedItems())
        })

        var myList = [
            [ "favorite", "Javascript", "Some text here" ],
            [ "delete", "Python", "Some text here" ],
            [ "star", "Java", "Some text here" ]
        ]
        lst = ui.addList(lstLay, myList, "link,icon,dense", 0.45)
        lst.setIconColor( "#009688" )
        lst.setSecondaryTextByIndex( 2, "This is the new secondary text" )

        /**
            Tab layout for Progress
        */
        progLay = tab.getLayout('Progress')
        progLay.setMargins(0, 0.01, 0, 0)

        showProg = ui.addButton(progLay, "Show Progress", "Outlined" )
        showProg.setOnTouch(function() {
            ui.showProgressDialog("Loading message...", "AutoCancel")
        })

        var progVal = 0
        prog1 = ui.addProgress(progLay, 10, "linear", 0.3)
        prog1.setMargins(0, 0, 0, 0.01)
        prog2 = ui.addProgress(progLay, 10, "linear,determinate,secondary", 0.3, 0.1)

        layHoriz1 = ui.addLayout(progLay, 'Linear', "Horizontal", 0.33)
        prog3 = ui.addProgress(layHoriz1, null, "circular")
        prog4 = ui.addProgress(layHoriz1, null, "circular,secondary")
        prog5 = ui.addProgress(layHoriz1, progVal, "circular,determinate")

        /**
            Tab layout for Dialogs
        */
        dlgLay = tab.getLayout('Dialogs')
        dlgLay.setMargins(0, 0.01, 0, 0)

        // Dialogs or Modals

        // 1. Simple dialog
        var bodyText = "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
        dlg = ui.addDialog("Use Google's location service?", bodyText, "Disagree,Agree")

        // Add a button to show dialog
        btn = ui.addButton( dlgLay, "Show Simple Dialog")
        btn.setMargins(0, 0, 0, 0.01)
        btn.setOnTouch( () => { dlg.show() } )

        // 2. Form Dailog

        bodyText = "To subscribe to this website, please enter your email address here. We will send updates occasionally."
        dlgForm = ui.addDialog("Subscribe", bodyText, "Cancel,Subscribe")

            dlgFormLay = dlgForm.getLayout()
            // Adding textfield to a dialog
            textField = ui.addTextField(dlgFormLay, "", "Filled", 0.4)
            textField.setLabel("Email Address")

        // Add a button to show dialog
        btn = ui.addButton( dlgLay, "Show Form Dialog")
        btn.setMargins(0, 0, 0, 0.01)
        btn.setOnTouch( () => { dlgForm.show() } )

        // 3. More controls dialog
        bodyText = "Do you want to get rid of this dialog? Tap outside to close this dialog. Or click the actions below."
        dlg1 = ui.addDialog("This is a title", bodyText, "Disagree,Agree", "secondary")

            // Add additional controls in a dialog like this
            dlg1Lay = dlg1.getLayout()  // get the layout from the dialog and pass the layout as parent to controls

            // Adding button to a dialog
            btn1 = ui.addButton(dlg1Lay, "Dialog Button", "contained, primary")

            // Adding textfield to a dialog
            textField = ui.addTextField(dlg1Lay, "", "Filled", 0.4)
            textField.setLabel("Type text in dialog")

            dlg1.setOnAction(function(action, index) {
                ui.showPopup(action+' , '+index)
                this.hide()
            })

        // Add a button to show dialog
        btn1 = ui.addButton( dlgLay, "Show Complex Dialog" )
        btn1.setMargins(0, 0, 0, 0.01)
        btn1.setOnTouch( () => { dlg1.show() } )

        // 4. Full Screen Dialog
        bodyText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        dlgFull = ui.addDialog("Full screen dialog", bodyText, "Close", "FullScreen")
        dlgFull.setOnAction( function() { this.hide() })
            var lay = dlgFull.getLayout()
            var closeBtn = ui.addButton(lay, "Close", "secondary")
            closeBtn.setOnTouch( function() { ui.showPopup('Nice') })

        // Add a button to show dialog
        btn = ui.addButton( dlgLay, "Show Full Screen Dialog")
        btn.setMargins(0, 0, 0, 0.01)
        btn.setOnTouch( () => { dlgFull.show() } )

        /**
            Tab layout for bottom navbar
        */
        bnavLay = tab.getLayout('BottomNavbar')
        bnavLay.setMargins(0, 0.01, 0, 0)

        bnbr = ui.addBottomNavbar(bnavLay, "Favorites:favorites,Groups:person,Folder:folder", "", 0.5)
        bnbr.setOnTouch(function(value) {
            ui.showPopup(value)
        })
        bnbr.setOnTouch( function() {
            console.log("Bottom navbar is click");
        })

        /**
            Tab layout for Stepper
        */
        stepperLay = tab.getLayout('Stepper')
        stepperLay.setMargins(0, 0.01, 0, 0)

            var steps = "Step 1, Step 2, Step 3"
            stepper = ui.addStepper(stepperLay, steps, "alternativelabel", 0.4)
            stepper.setOnComplete( () => {ui.showPopup('Complete')} )
            stepper.setOnChange( (step) => {
                if(step >= 2) btnStepNext.setText('Complete')
                else btnStepNext.setText('Next')
            } )

            btnStepLay = ui.addLayout(stepperLay, "Linear", "Horizontal")
                btnStepPrev = ui.addButton(btnStepLay, 'Previous')
                btnStepPrev.setOnTouch( () => { stepper.previousStep() })

                btnStepNext = ui.addButton(btnStepLay, 'Next')
                btnStepNext.setOnTouch( () => { stepper.nextStep() })

        /**
            Tab layout for Accordion
        */
        accordionLay = tab.getLayout('Accordion')
        accordionLay.setMargins(0, 0.01, 0, 0)

            var titles = ["Accordion 1", "Accordion 2", "Accordion 3"]
            accord = ui.addAccordion(accordionLay, titles, "", 0.7)
            accord.setSecondaryText([
                "Accordion 1 subtitle",
                "Accordion 2 subtitle",
                "Accordion 3 subtitle"
            ])
                // get the layout of Accordion 1 on the accordion component by index
                var accord1Lay = accord.getLayout(0)
                var longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
                accordText = ui.addText(accord1Lay, longText, "Left")

                // get the layout of Accordion 2 on the accordion component by title
                var accord2Lay = accord.getLayout(' Accordion 2')
                accordButton = ui.addButton(accord2Lay, "Accordion 2 Button", "Outlined")

                var accord3Lay = accord.getLayout(2)
                accordForm = ui.addTextField(accord3Lay, '', 'Text,Filled')
                accordForm.setLabel('Type something')

            var btnAccord = ui.addSwitch( accordionLay, "Add secondary text", "secondary" )
            btnAccord.setOnChange( function( v ) {
                if( v )
                    accord.setSecondaryText([
                        "Accordion 1 subtitle",
                        "Accordion 2 subtitle",
                        "Accordion 3 subtitle"
                    ])
                else
                    accord.setSecondaryText()
            })

        /**
            Chip layout for Stepper
        */
        chipLay = tab.getLayout('Chips')
        chipLay.setMargins(0, 0.01, 0, 0)
            chip1 = ui.addChip(chipLay, 'Basic Chip')
            chip2 = ui.addChip(chipLay, 'Primary Chip Small', 'Primary,Small')
            chip3 = ui.addChip(chipLay, 'Secondary Chip', 'Secondary,Touchable')

            chip4 = ui.addChip(chipLay, 'Deletable', 'Secondary,Touchable')
            chip4.setOnDelete( function() {ui.showPopup(this.text)} )

            chip5 = ui.addChip(chipLay, 'Shopping Cart')
            chip5.setIcon('shopping_cart')

            chip6 = ui.addChip(chipLay, 'Character Avatar', 'Primary,Touchable')
            chip6.setAvatar('E')

            chip7 = ui.addChip(chipLay, 'Image Avatar', 'Secondary,Touchable')
            chip7.setAvatar('Img/watch.jpg')


    // creates a drawer layout
    var drawerWidth = platform.mobile ? 0.6 : 0.2
    drawerLay = ui.addLayout(null, "Linear", "VCenter,NoDom", drawerWidth)

    drawer = ui.createDrawer(drawerLay, 'left', "persistent")
    drawer.setOnClose( () => {console.log('Close')})
    drawer.setOnOpen( () => {console.log('onOpen')} )

    var menus1 = [
        ["music_note", "Audio"],
        ["movie", "Video"],
        ["insert_drive_file", "Documents"]
    ]
    lstMenu1 = ui.addList(drawerLay, menus1, "icon", drawerWidth)
    lstMenu1.setOnTouch(closeDrawer)

    div = ui.addDivider(drawerLay, drawerWidth)

    var menus2 = [
        ["mail", "All Mail"],
        ["inbox", "Inbox"],
        ["drafts", "Outbox"],
        ["send", "Sent"]
    ]
    lstMenu2 = ui.addList(drawerLay, menus2, "icon", drawerWidth)
    lstMenu2.setOnTouch(closeDrawer)


}


function btg4_onTouch(item, index)
{
    alert(item)
}


function openDrawer()
{
    drawer.open()
}

function closeDrawer(title, body, icon, index)
{
    drawer.close()
    //ui.showPopup(title)
}

//Toggle screen lock unlock
function btnLock_onTouch()
{
    layStack.goto(1)
    setTimeout( function(){ layStack.goto(0) }, 7000 )
}

// Select
function sel_onSelect(item)
{
    if(item === "Option 1")
        this.setEnabled(false)
}


//Toggle light/dark theme.
function btnBright_onTouch()
{
    if( !ui.theme.dark )
    {
        btnBright.text = "brightness_5"
        ui.setTheme( "dark" )
    }
    else
    {
        btnBright.text = "brightness_4"
        ui.setTheme( "light" )
    }
}


