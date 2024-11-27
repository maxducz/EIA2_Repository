const canvas = document.querySelector("canvas") as HTMLCanvasElement;
const crc2 = canvas.getContext("2d") as CanvasRenderingContext2D;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function random(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

function randomColor(): string {
    const h = Math.floor(random(0, 360));
    const s = Math.floor(random(50, 100));
    const l = Math.floor(random(40, 70));
    return `hsl(${h}, ${s}%, ${l}%)`;
}

function drawBackground() {
    const gradient = crc2.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, randomColor());
    gradient.addColorStop(1, randomColor());
    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, canvas.width, canvas.height);
}

function drawCircles(count: number) {
    for (let i = 0; i < count; i++) {
        const x = random(0, canvas.width);
        const y = random(0, canvas.height);
        const radius = random(20, 100);

        crc2.beginPath();
        crc2.arc(x, y, radius, 0, 2 * Math.PI);
        crc2.fillStyle = randomColor();
        crc2.globalAlpha = random(0.3, 0.8);
        crc2.fill();
    }
}

function drawLines(count: number) {
    for (let i = 0; i < count; i++) {
        crc2.beginPath();
        crc2.moveTo(random(0, canvas.width), random(0, canvas.height));
        for (let j = 0; j < random(3, 7); j++) {
            crc2.lineTo(random(0, canvas.width), random(0, canvas.height));
        }
        crc2.strokeStyle = randomColor();
        crc2.lineWidth = random(1, 5);
        crc2.globalAlpha = random(0.5, 1);
        crc2.stroke();
    }
}

function drawRectangles(count: number) {
    for (let i = 0; i < count; i++) {
        const x = random(0, canvas.width);
        const y = random(0, canvas.height);
        const width = random(50, 200);
        const height = random(50, 200);

        crc2.save();
        crc2.translate(x, y);
        crc2.rotate(random(0, Math.PI / 2));
        crc2.fillStyle = randomColor();
        crc2.globalAlpha = random(0.4, 0.9);
        crc2.fillRect(-width / 2, -height / 2, width, height);
        crc2.restore();
    }
}

function drawEllipses(count: number) {
    for (let i = 0; i < count; i++) {
        const x = random(0, canvas.width);
        const y = random(0, canvas.height);
        const radiusX = random(30, 100);
        const radiusY = random(30, 100);

        crc2.beginPath();
        crc2.ellipse(x, y, radiusX, radiusY, random(0, Math.PI), 0, 2 * Math.PI);
        crc2.fillStyle = randomColor();
        crc2.globalAlpha = random(0.2, 0.8);
        crc2.fill();
    }
}

function generateArt() {
    drawBackground();
    drawCircles(50);
    drawLines(30);
    drawRectangles(20);
    drawEllipses(20);
}

generateArt();
