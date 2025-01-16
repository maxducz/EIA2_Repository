"use strict";
class Snowflake extends Moveable {
    draw() {
        crc2.fillStyle = "white";
        crc2.beginPath();
        crc2.arc(this.x, this.y, 5, 0, Math.PI * 2);
        crc2.fill();
    }
    move() {
        super.move();
        this.y += 0.3;
    }
    constructor(_x, _y) {
        super(_x, _y);
    }
}
