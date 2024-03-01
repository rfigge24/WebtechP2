function navMenuClickHandler() {
var x = document.getElementsByTagName("nav")[0];
if (x.className === "nav") {
    x.className += "--menu-open";
} else {
    x.className = "nav";
}
}

