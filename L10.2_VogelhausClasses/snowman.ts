class Snowman {
    

    draw(): void{
        crc2.fillStyle = "white";
        crc2.beginPath();
        crc2.arc(200, 800, 100, 0, Math.PI * 2);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(200, 650, 80, 0, Math.PI * 2);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(200, 520, 60, 0, Math.PI * 2);
        crc2.fill();
    
        crc2.fillStyle = "black";
        crc2.beginPath();
        crc2.arc(180, 490, 10, 0, Math.PI * 2);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(230, 490, 10, 0, Math.PI * 2);
        crc2.fill();
        crc2.fillStyle = "orange";
        crc2.beginPath();
        crc2.moveTo(200, 500);
        crc2.lineTo(200, 520);
        crc2.lineTo(340, 530);
        crc2.closePath();
        crc2.fill();
    
        crc2.fillStyle = "brown";
        crc2.beginPath();
        crc2.arc(200, 610, 10, 0, Math.PI * 2);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(200, 650, 10, 0, Math.PI * 2);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(200, 690, 10, 0, Math.PI * 2);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(200, 760, 10, 0, Math.PI * 2);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(200, 800, 10, 0, Math.PI * 2);
        crc2.fill();
    
        crc2.strokeStyle = "brown";
        crc2.lineWidth = 5;
        crc2.beginPath();
        crc2.moveTo(120, 650);
        crc2.lineTo(20, 600);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(280, 650);
        crc2.lineTo(380, 600);
        crc2.stroke();
    }
}