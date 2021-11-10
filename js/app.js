const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const openBtn = document.getElementById("jsOpen");
const saveBtn = document.getElementById("jsSave");
const resetBtn = document.getElementById("jsReset");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

let painting, filling;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

const resetCanvas = () => {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

  ctx.strokeStyle = "INITIAL_COLOR";
  ctx.fillStyle = "INITIAL_COLOR";
  ctx.lineWidth = 2.5;

  painting = filling = false;
};

function startPainting() {
  painting = true;
}

function stopPainting() {
  painting = false;
}

function onMouseMove(event) {
  const x = event.offsetX,
    y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick() {
  if (filling) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

function handleCanvasClick() {
  if (filling) ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
}

const handleImageOpenchange = ({ target: { files } }) => {
  const file = files[0],
    url = URL.createObjectURL(file),
    img = new Image();

  img.onload = function () {
    URL.revokeObjectURL(this.src);
    ctx.drawImage(this, 0, 0);
  };
  img.src = url;
};

const handleSaveClick = () => {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "Paint";
  link.click();
};

function handleCM(event) {
  event.preventDefault();
}

if (canvas) {
  resetCanvas();

  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);

if (openBtn) openBtn.addEventListener("change", handleImageOpenchange);
if (saveBtn) saveBtn.addEventListener("click", handleSaveClick);
if (resetBtn) resetBtn.addEventListener("click", () => resetCanvas());

if (range) range.addEventListener("input", handleRangeChange);
if (mode) mode.addEventListener("click", handleModeClick);
