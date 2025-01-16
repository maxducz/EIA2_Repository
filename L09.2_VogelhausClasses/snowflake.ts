class Snowflake extends Moveable {

    draw(): void {
        crc2.fillStyle = "white";
        crc2.beginPath();
        crc2.arc(this.x, this.y, 5, 0, Math.PI * 2);
        crc2.fill();
    }
    move(): void {
        super.move()
        this.y += 0.3
    }

    constructor(_x: number, _y: number) {
        super(_x, _y)
    }
}