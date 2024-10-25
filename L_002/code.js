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
    function setInfoBox(_event) {
        // console.log(`Mouse moved: X=${event.clientX}, Y=${event.clientY}`);
        let span = document.querySelector("span");
        let box = "";
        span.innerText = box;
        span.style.top = _event.clientY + "px";
        span.style.left = _event.clientX + "px";
    }
    function handleClick(event) {
        console.log(`Click event: Target=${event.target}`);
    }
    function handleKeyUp(event) {
        console.log(`Keyup event: Key=${event.key}`);
    }
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
    const button = document.getElementById('CustomEventButton');
    button.addEventListener('click', () => {
        // Erzeuge das Custom-Event
        const customEvent = new CustomEvent('myCustomEvent', {
            detail: { message: 'Der Button wurde geklickt!' },
            bubbles: true, // Event soll durch den DOM aufsteigen
            cancelable: true
        });
        // Custom-Event vom Button auslösen
        button.dispatchEvent(customEvent);
    });
    // Abfangen des Custom-Events auf document-Ebene
})(L_002EventsExcersice || (L_002EventsExcersice = {}));
//# sourceMappingURL=code.js.map