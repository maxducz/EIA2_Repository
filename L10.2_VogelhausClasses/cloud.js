"use strict";
class Cloud extends Moveable {
    draw() {
        crc2.beginPath();
        crc2.ellipse(this.x, this.y, 200, 155, 0, 0, Math.PI * 2);
        crc2.fillStyle = "white";
        crc2.globalAlpha = 0.9;
        crc2.fill();
        crc2.globalAlpha = 1;
    }
    move() {
        super.move();
        this.x += 0.1;
    }
    constructor(_x, _y) {
        super(_x, _y);
    }
}
