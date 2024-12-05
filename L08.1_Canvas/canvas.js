"use strict";
window.addEventListener("load", handleLoad);
let cr2;
function handleLoad(_event) {
    let canvas = document.querySelector("canvas");
    if (!canvas)
        return;
    crc2 = canvas.getContext("2d");
    drawLinearGradient();
}
function drawLinearGradient() {
    const gradient = crc2.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0.2, "black");
    gradient.addColorStop(0.4, "red");
    gradient.addColorStop(0.8, "gold");
    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, 200, 100);
}
