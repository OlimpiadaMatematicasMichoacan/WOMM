
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