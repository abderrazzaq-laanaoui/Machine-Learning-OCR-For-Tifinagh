const CATEGORIES = ['ⴰ', 'ⴱ', 'ⵛ', 'ⴷ', 'ⴹ', 'ⵄ', 'ⴼ', 'ⴳ', 'ⵖ', 'ⴳⵯ', 'ⵀ', 'ⵃ', 'ⵊ', 'ⴽ', 'ⴽⵯ',
'ⵍ','ⵎ','ⵏ', 'ⵇ', 'ⵔ', 'ⵕ', 'ⵙ', 'ⵚ', 'ⵜ', 'ⵟ', 'ⵡ', 'ⵅ', 'ⵢ', 'ⵣ','ⵥ', 'ⴻ', 'ⵉ', 'ⵓ'];
(function () {
// Creates a new canvas element and appends it as a child
// to the parent element, and returns the reference to
// the newly created canvas element
var model;
async function loadModel() {
model = await tf.loadLayersModel('model/model.json');
}

function createCanvas(parent, width, height) {
var canvas = {};
canvas.node = document.createElement('canvas');
canvas.node.setAttribute('id', 'canvas');
canvas.context = canvas.node.getContext('2d');
canvas.node.width = width || 100;
canvas.node.height = height || 100;
parent.appendChild(canvas.node);
return canvas;
}

async function init(container, width, height, fillColor) {
var canvas = createCanvas(container, width, height);
var ctx = canvas.context;
//define a custom fillCircle method
ctx.fillCircle = function (x, y, radius, fillColor) {
this.fillStyle = fillColor;
this.beginPath();
this.moveTo(x, y);
this.arc(x, y, radius, 0, Math.PI * 2, false);
this.fill();
};
ctx.clearTo = function (fillColor) {
ctx.fillStyle = fillColor;
ctx.fillRect(0, 0, width, height);
};
ctx.clearTo(fillColor || "#ffffff");

// bind mouse events
canvas.node.onmousemove = function (e) {
if (!canvas.isDrawing) {
    return;
}
var x = e.pageX - this.offsetLeft;
var y = e.pageY - this.offsetTop;
var radius = 10; // or whatever
var fillColor = '#000000';
ctx.fillCircle(x, y, radius, fillColor);
};
canvas.node.onmousedown = function (e) {
canvas.isDrawing = true;
};
canvas.node.onmouseup = function (e) {
canvas.isDrawing = false;
};
loadModel();
}

function predict(tfImage) {
var output = model.predict(tfImage);
var result = Array.from(output.dataSync());
console.log('Output is : ', Array.from(output.dataSync()));
var maxPossibility = result.reduce(function (a, b) { return Math.max(a, b) });
console.log(maxPossibility);
document.getElementById('resultat').innerText =
 CATEGORIES[result.indexOf(maxPossibility)];
}
function clear() {
console.log('clear canvas');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.clearTo('#ffffff');
document.getElementById('resultat').innerText = '';
}
function recogniseNumber() {
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// console.log(ctx.getImageData(0,0, 100, 100));
var imageData = ctx.getImageData(0, 0, 350, 350);
var tfImage = tf.browser.fromPixels(imageData, 1);

//Resize to 50X50
var tfResizedImage = tf.image.resizeBilinear(tfImage, [50, 50]);
//Since white is 255 black is 0 so need to revert the values
//so that white is 0 and black is 255
tfResizedImage = tf.cast(tfResizedImage, 'float32');
tfResizedImage = tf.abs(tfResizedImage.sub(tf.scalar(255)))
.div(tf.scalar(255)).flatten();
tfResizedImage = tfResizedImage.reshape([-1,50, 50,1]);

//Make another dimention as the model expects
console.log(tfResizedImage.dataSync());
predict(tfResizedImage);
}

var container = document.getElementById('canvas-container');
init(container, 350, 350, '#ffffff');
document.getElementById('clear').addEventListener('click', clear);
document.getElementById('cnvrtBtn').addEventListener('click', recogniseNumber);

})();
document.addEventListener('keydown', function(event) {
if (event.code == 'Escape') {
  document.getElementById("clear").click();
}
});