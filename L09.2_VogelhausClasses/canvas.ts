window.addEventListener("load", handleLoad);
let crc2: CanvasRenderingContext2D;
let canvas: HTMLCanvasElement;
let background: ImageData;
let moveables: Moveable[] = [];
let snowman: Snowman;
let birdhouse: Birdhouse;

function handleLoad(_event: Event): void {
    canvas = <HTMLCanvasElement>document.querySelector("canvas");
    if (!canvas)
        return;

    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    background = crc2.getImageData(0, 0, canvas.width, canvas.height);
    drawSky();
    drawSun();
    drawMountain(0, 1000, 1000, 1000, 500, 100, "#A9A9A9");
    drawMountain(500, 1000, 1200, 100, 2000, 1000, "#808080");
    drawTree(400, 500)
    drawTree(600, 620)
    drawTree(900, 700)
    drawTree(1200, 600)
    drawTree(1500, 760)

    background = crc2.getImageData(0, 0, canvas.width, canvas.height)
    moveables.push(new Cloud(600, 200))
    moveables.push(new Cloud(1300, 300))
    new Birdhouse();
    new Snowman();
    moveables.push(new Bird(700, 600))
    moveables.push(new Bird(800, 350))
    moveables.push(new Bird(1200, 750))
    moveables.push(new Bird(300, 580))
    moveables.push(new Bird(1400, 450))

    snowman = new Snowman()
    birdhouse = new Birdhouse()

    for (let i = 0; i < 30; i++) {
        moveables.push(new Snowflake(Math.random() * canvas.width, Math.random() * canvas.height));
    }

    window.setInterval(function () {

        crc2.putImageData(background, 0, 0);
        moveables.forEach(element => {
            element.draw()
            element.move()
        });
        snowman.draw()
        birdhouse.draw()



    }, 25)
}


function drawSky() {
    const gradient = crc2.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "#87CEEB");
    gradient.addColorStop(1, "#f0f8ff");
    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSun() {
    crc2.beginPath();
    crc2.arc(150, 150, 100, 0, Math.PI * 2);
    crc2.fillStyle = "yellow";
    crc2.globalAlpha = 0.8;
    crc2.fill();
    crc2.globalAlpha = 1;
}


function drawTree(x: number, y: number) {
    crc2.fillStyle = "green";
    crc2.beginPath();
    crc2.moveTo(x, y);
    crc2.lineTo(x + 25, y - 100);
    crc2.lineTo(x + 50, y);
    crc2.closePath();
    crc2.fill();
}

function drawMountain(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, color: string) {
    crc2.beginPath();
    crc2.moveTo(x1, y1);
    crc2.lineTo(x2, y2);
    crc2.lineTo(x3, y3);
    crc2.closePath();
    crc2.fillStyle = color;
    crc2.fill();
}



