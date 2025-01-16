class Moveable {
    x: number;
    y: number;

    move(): void {
        if (this.x > canvas.width){
            this.x = 0;
        }

        if (this.y > canvas.height) {
            this.y = 0;
        }


    }

    constructor(_x: number, _y: number) {
        this.x = _x;
        this.y = _y;
    }

    draw(): void {}
}