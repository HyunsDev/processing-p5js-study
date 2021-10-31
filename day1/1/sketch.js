function setup() {
    createCanvas(500, 500);
    background(255);
    smooth();
}

function draw() {
    if (mousePressed) {
        fill(0);
    } else {
        fill(255);
    }
    // ellipse(mouseX, mouseY, 80, 80);
    // point(mouseX, mouseY, 250);
    // line(mouseX, mouseY, mouseX+10, mouseY+10);
    rect(100, 200, 100, 100);
}