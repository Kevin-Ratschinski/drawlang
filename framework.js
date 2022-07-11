const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 1000;

let x = 0;
let y = 0;
let lastX = 0;
let lastY = 0;
let color = 'transparent';

function setX(newX) {
  x = newX;
}

function setY(newY) {
  y = newY;
}

function _center() {
  setX(canvas.width / 2);
  setY(canvas.height / 2);
}

ctx.beginPath();

function _draw() {
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.strokeStyle = color;
  ctx.stroke();

  lastX = x;
  lastY = y;
}

function _left(distance) {
  setX(x - distance);
}

function _right(distance) {
  setX(x + distance);
}

function _top(distance) {
  setY(y - distance);
}

function _bottom(distance) {
  setY(y + distance);
}

function _setColor(newColor) {
  color = newColor;
}
