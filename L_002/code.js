"use strict";
var L_002EventsExcersice;
(function (L_002EventsExcersice) {
    console.log("Start");
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        document.addEventListener('mousemove', setInfoBox);
        document.addEventListener('click', logInfo);
        document.body.addEventListener('click', logInfo);
        const divs = document.querySelectorAll("div");
        divs.forEach(div => {
            div.addEventListener('click', handleClick);
        });
        document.addEventListener("keyup", handleKeyUp);
        document.body.addEventListener("keyup", handleKeyUp);
        divs.forEach(div => {
            div.addEventListener("keyup", handleKeyUp);
        });
    }
    function setInfoBox(event) {
        console.log(`Mouse moved: X=${event.clientX}, Y=${event.clientY}`);
    }
    function handleClick(event) {
        console.log(`Click event: Target=${event.target}`);
    }
    function handleKeyUp(event) {
        console.log(`Keyup event: Key=${event.key}`);
    }
})(L_002EventsExcersice || (L_002EventsExcersice = {}));
//# sourceMappingURL=code.js.map