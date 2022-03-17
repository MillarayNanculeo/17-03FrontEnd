var botoncito;

function setup() {
  createCanvas(windowWidth, windowHeight);
  /*frameRate(3);*/
  background(   random(0, 255), random(0, 255), random(0, 255));
  botoncito = createButton ('Descargar');
  botoncito.position(0,0);
  botoncito.mousePressed(impresora);
}

function draw() {

  fill(random(100, 255), random(100, 255), random(100, 255));
  ellipse(mouseX, mouseY, 20, 20 );
}

function impresora () {
  saveCanvas("imagen", "png");
}
