function setup() {
    createCanvas(800, 800);
    background(255);
    strokeWeight(4);
    smooth();
    noStroke();
    stroke(0, 102);
}

function draw() {
    // background(0);
    // ellipse(mouseX, mouseY, 9, 9);
    let weight = dist(mouseX, mouseY, pmouseX, pmouseY);
    strokeWeight(weight);
    line(mouseX, mouseY, pmouseX, pmouseY);
}