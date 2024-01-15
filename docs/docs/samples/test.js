class Main extends App {
    onStart() {
        // Creates a fullscreen main layout.
        this.main = ui.addLayout("main", "Linear", "VCenter")

        var items = ["Accordion 1", "Accordion 2", "Accordion 3"]
        var texts = ["Description for item 1", "Description for item 2", "Description for item 3"];

        // Adds an accordion to the main layout
        this.acc = ui.addAccordion(this.main, items, "", 0.9)
        this.acc.setSecondaryText(texts)

        // Sets the background color
        this.acc.backColor = "#b2dfdb"

        // Sets the text-sizes
        this.acc.textSize1 = 18
        this.acc.textSize2 = 14

        // Sets the text colors
        this.acc.textColor1 = "#00695c"
        this.acc.textColor2 = "#009688"

        // Sets the corner radius
        this.acc.cornerRadius = 14

        // Sets the expand icon
        this.acc.expandIcon = "favorite"
    }
}