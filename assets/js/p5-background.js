/*
const URL  = [
    "https://coolors.co/f5b800-ffcc4d-4b8a5f-e590b8-fef9c6-df5f50-5a3034-4464a1-56a1c4-ee726b-ffc5c7",
];

var palette;

function createCols(url)
{
let slaIndex = url.lastIndexOf("/");
let colStr = url.slice(slaIndex + 1);
let colArr = colStr.split("-");
for(let i = 0; i < colArr.length; i++)colArr[i] = "#" + colArr[i];
return colArr;
}

function setup() {
var canvas = createCanvas(windowWidth, windowHeight);
canvas.parent('sketch-holder');
noLoop();
noStroke();
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}

function draw() {

palette = shuffle(createCols(URL[int(random(URL.length))]));
console.log(palette);

let s = width/5;

for (let x = 0; x < width; x += s) {
for (let y = 0; y < height; y += s) {
        if (random() < 1/2) {
            makeTile(x, y, s/2);
            makeTile(x+s/2, y, s/2);
            makeTile(x, y+s/2, s/2);
            makeTile(x+s/2, y+s/2, s/2);
        } else {
      makeTile(x, y, s);
        }
    }
}
}

function makeTile(x, y, s) {
shuffle(palette, true);
fill(palette[0]);
square(x, y, s);
push();
translate(x+s/2, y+s/2);
rotate(random([0, PI/2, PI, 3*PI/2]));
fill(palette[1]);
let r = floor(random(4));
if (r == 0) {
    arc(-s/2, 0, s, s, -PI/2, PI/2);
} else if (r == 1) {
    rect(-s/2, -s/2, s/2, s);
} else if (r == 2) {
    triangle(-s/2, -s/2, s/2, -s/2, -s/2, s/2);
}
pop();
}
*/


function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('sketch-holder');
    noLoop(); // Dibuja una sola vez
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    redraw(); // Redibuja el fondo al redimensionar
}

function draw() {
    background(20); // Fondo oscuro
    strokeWeight(2); // Grosor base de las líneas

    let gridSize = 40; // Tamaño de las celdas del patrón
    let rows = int(height / gridSize); // Filas
    let cols = int(width / gridSize); // Columnas

    let colorPalette = [
        color(255, 87, 34), // Naranja
        color(33, 150, 243), // Azul
        color(76, 175, 80), // Verde
        color(255, 235, 59), // Amarillo
        color(156, 39, 176) // Morado
    ];

    // Genera líneas para cada celda de la cuadrícula
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let x = col * gridSize;
            let y = row * gridSize;
            let colIndex = (row + col) % colorPalette.length; // Alternar colores

            // Variaciones en las líneas
            let lineType = int(random(3)); // 0: línea horizontal, 1: línea vertical, 2: diagonal
            let lineColor = colorPalette[colIndex];
            stroke(lineColor);
            
            if (lineType === 0) {
                drawHorizontalLine(x, y, gridSize);
            } else if (lineType === 1) {
                drawVerticalLine(x, y, gridSize);
            } else {
                drawDiagonalLine(x, y, gridSize);
            }
        }
    }
}

function drawHorizontalLine(x, y, size) {
    line(x, y + size / 2, x + size, y + size / 2);
}

function drawVerticalLine(x, y, size) {
    line(x + size / 2, y, x + size / 2, y + size);
}

function drawDiagonalLine(x, y, size) {
    line(x, y, x + size, y + size);
}
