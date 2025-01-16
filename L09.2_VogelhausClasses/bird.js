"use strict";
class Bird extends Moveable {
    draw() {
        crc2.fillStyle = "brown";
        crc2.beginPath();
        crc2.arc(this.x, this.y, 30, 10, Math.PI * 2);
        crc2.fill();
    }
    move() {
        super.move();
        this.x += 0.5;
        this.y += 0.5;
    }
    constructor(_x, _y) {
        super(_x, _y);
    }
}
