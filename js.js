var timeoutId = 0;
var elem = document.getElementById("sosi");
elem.onkeyup = keyUpHandler;
function keyUpHandler() {
    if(timeoutId != 0) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(doIt,1000);
};
function doIt() {
    console.log('did');
}
