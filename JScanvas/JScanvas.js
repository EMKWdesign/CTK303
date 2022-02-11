let dim;

function setup() {
  let cnv = createCanvas(910 , 700);
  cnv.id('canvas3');
  cnv.parent('movecanvas');
  dim = (width / 7);
  background(0);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  ellipseMode(RADIUS);
  frameRate(1.5);
}

function draw() {
  background(0);
  // distance between squares
 let jump = width / 7;

 // two for loops are needed to make a grid of squares
 // the outer loop controls how many rows are made
 // the inner loop controls how many columns are made
 for (let y = 0; y < 10; y++) {
   for (let x = 0; x < 10; x++) {

     drawGradient(x * jump + 10, y * jump + 10, 20, 20);

   }
 }
}

function drawGradient(x, y) {
  let radius = dim / 2;
  let h = random(0, 360);
  for (let r = radius; r > 0; --r) {
    fill(h, 90, 90);
    ellipse(x, y, r, r);
    h = (h + .50) % 360;
  }
}
