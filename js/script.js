let canvasHeader = document.getElementById("canvas_header");
let cth = canvasHeader.getContext("2d");
cth.beginPath();
cth.moveTo(0, 400);
cth.lineTo(700, 580);
cth.lineTo(1400, 400);
cth.lineTo(1400, 580);
cth.lineTo(0, 580);
cth.fillStyle = "#F8F5F2";
cth.fill();
cth.closePath();

let canvasWorks = document.getElementById("canvas_works");
let ctw = canvasWorks.getContext("2d");
ctw.beginPath();
ctw.moveTo(0, 0);
ctw.lineTo(50, 50);
ctw.lineTo(0, 100);
ctw.fillStyle = "#F8F5F2";
ctw.fill();
ctw.closePath();

let canvasWorksDown = document.getElementById("canvas_works_down");
let ctd = canvasWorksDown.getContext("2d");
ctd.beginPath();
ctd.moveTo(50, 0);
ctd.lineTo(0, 50);
ctd.lineTo(50, 100);
ctd.fillStyle = "#F8F5F2";
ctd.fill();
ctd.closePath();

let canvasPriseList = document.getElementById("canvas_price");
let ctp = canvasPriseList.getContext("2d");
ctp.beginPath();
ctp.moveTo(0, 0);
ctp.lineTo(700, 500);
ctp.lineTo(1400, 0);
ctp.fillStyle = "#F8F5F2";
ctp.fill();
ctp.closePath();

let canvasFooter = document.getElementById("canvas_footer");
let ctf = canvasFooter.getContext("2d");
ctf.beginPath();
ctf.moveTo(0, 0);
ctf.lineTo(700, 500);
ctf.lineTo(1400, 0);
ctf.fillStyle = "#353535";
ctf.fill();
ctf.closePath();

function tick() {
  const d = new Date();
  const m = document.getElementById("minuteHand");
  const h = document.getElementById("hourHand");

  const degH = 30 * (d.getHours() % 12 + d.getMinutes() / 60);
  const degM = 6 * (d.getMinutes() + d.getSeconds() / 60);

  m.style.transform = "rotate(" + degM + "deg)";
  h.style.transform = "rotate(" + degH + "deg)";

  requestAnimationFrame(tick);
}
tick();
