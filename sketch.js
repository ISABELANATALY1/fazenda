//Meu projeto é sobre uma colheita de grama, em um dia de sol e bonito.

let xSol = 0;
let xNuvem = 0;
let xPassaro = 600;
let xTrator = 210;
let sentidoTrator = 1;
let gramaCortada = [];
function setup() {
  createCanvas(600, 400);
  // A grama agora cobre uma área maior (40 blocos de 10px = 400px)
  for (let i = 0; i < 40; i++) {
    gramaCortada[i] = true;
  }
}
function draw() {
  background(135, 206, 235); // Céu
  // Sol
  fill(255, 204, 0);
  ellipse(xSol, 80, 60, 60);
  xSol += 0.5;
  if (xSol > width + 30) xSol = -30;
  // Nuvem
  fill(255);
  ellipse(xNuvem, 100, 60, 40);
  ellipse(xNuvem + 30, 100, 60, 40);
  ellipse(xNuvem + 15, 85, 60, 40);
  xNuvem += 0.3;
  if (xNuvem > width + 60) xNuvem = -60;
  // Passarinho
  fill(0);
  triangle(xPassaro, 150, xPassaro - 10, 145, xPassaro - 10, 155);
  xPassaro -= 1;
  if (xPassaro < -20) xPassaro = width + 20;
  // Campo
  fill(34, 139, 34);
  rect(0, 300, width, 100);
  // Casa
  fill(210, 180, 140);
  rect(100, 220, 100, 80);
  fill(165, 42, 42);
  triangle(100, 220, 150, 170, 200, 220);
  // Árvore
  fill(139, 69, 19);
  rect(400, 250, 20, 50);
  fill(34, 139, 34);
  ellipse(410, 230, 80, 80);
  // Grama (mais larga)
  for (let i = 0; i < gramaCortada.length; i++) {
    if (gramaCortada[i]) {
      fill(0, 100, 0);
      rect(210 + i * 10, 280, 10, 20);
    }
  }
  // Trator
  drawTrator(xTrator, 270);
  // Corta a grama onde passa
  for (let i = 0; i < gramaCortada.length; i++) {
    let blocoX = 210 + i * 10;
    if (xTrator + 30 > blocoX && xTrator < blocoX + 10) {
      gramaCortada[i] = false;
    }
  }
  // Movimento do trator ajustado para percorrer toda a grama
  xTrator += 1.5 * sentidoTrator;
  if (xTrator > 210 + (gramaCortada.length - 4) * 10 || xTrator < 210) {
    sentidoTrator *= -1;
  }
  // Flores
  for (let i = 0; i < width; i += 60) {
    drawFlor(i + 20, 340);
  }
}
function drawFlor(x, y) {
  fill(255, 0, 0);
  ellipse(x, y, 10, 10);
  ellipse(x + 5, y - 5, 10, 10);
  ellipse(x - 5, y - 5, 10, 10);
  fill(255, 255, 0);
  ellipse(x, y - 2, 5, 5);
}
function drawTrator(x, y) {
  fill(255, 0, 0);
  rect(x, y, 40, 20);
  fill(200);
  rect(x + 10, y - 15, 20, 15);
  fill(0);
  ellipse(x + 10, y + 20, 15, 15);
  ellipse(x + 30, y + 20, 15, 15);
}
