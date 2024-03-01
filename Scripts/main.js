function navMenuClickHandler() {
var x = document.getElementsByTagName("nav")[0];
if (x.className === "nav--menu-closed") {
    x.className = "nav--menu-open";
} else {
    x.className = "nav--menu-closed";
}
}

