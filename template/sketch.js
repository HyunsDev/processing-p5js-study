let x;
let easing = 0.01;
let diameter = 12;

function setup() {
    createCanvas(800, 800);
    background(255);
    smooth();
}

function draw() {
    let targetX = mouseX;
    x += (targetX - x) * easing;
    ellipse(x, 40, 12, 12);
}