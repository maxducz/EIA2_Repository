"use strict";
class Birdhouse {
    draw() {
        crc2.fillStyle = "#8B4513";
        crc2.fillRect(700, 1400, 80, 120);
        crc2.fillStyle = "#A0522D";
        crc2.beginPath();
        crc2.moveTo(750, 800);
        crc2.lineTo(850, 730);
        crc2.lineTo(950, 800);
        crc2.closePath();
        crc2.fill();
        crc2.fillStyle = "black";
        crc2.beginPath();
        crc2.arc(850, 770, 25, 0, Math.PI * 2);
        crc2.fill();
        crc2.strokeStyle = "brown";
        crc2.lineWidth = 5;
        crc2.beginPath();
        crc2.moveTo(845, 800);
        crc2.lineTo(820, 900);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(855, 800);
        crc2.lineTo(890, 900);
        crc2.stroke();
    }
}
