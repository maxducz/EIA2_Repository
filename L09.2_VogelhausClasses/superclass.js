"use strict";
class Moveable {
    move() {
        if (this.x > canvas.width) {
            this.x = 0;
        }
        if (this.y > canvas.height) {
            this.y = 0;
        }
    }
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
    }
    draw() { }
}
