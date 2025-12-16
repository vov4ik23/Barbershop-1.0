let mainCanvas = document.getElementById("maincanvas");
let footerCanvas = document.getElementById("footercanvas");
let ctm = mainCanvas.getContext("2d");
let ctf = footerCanvas.getContext("2d");

ctm.beginPath();
ctm.moveTo(0, 0);
ctm.lineTo(700, 100);
ctm.lineTo(1400, 0);
ctm.fillStyle = "#4C4C4C";
ctm.stroke();
ctm.fill();
ctm.closePath();

ctf.beginPath();
ctf.moveTo(0, 0);
ctf.lineTo(700, 100);
ctf.lineTo(1400, 0);
ctf.fillStyle = "#F8F5F2";
ctf.stroke();
ctf.fill();
ctm.closePath();