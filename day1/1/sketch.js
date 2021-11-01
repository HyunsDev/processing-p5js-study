function setup() {
    createCanvas(500, 500);
    background(255);
    smooth();
    noStroke();
}

function draw() {
    // ellipse(mouseX, mouseY, 80, 80);
    // point(mouseX, mouseY, 250);
    // line(mouseX, mouseY, mouseX+10, mouseY+10);
    console.log(frameCount);
    rect(100, 200, 100, 100);
}