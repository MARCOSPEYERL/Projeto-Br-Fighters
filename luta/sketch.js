var btnChar
var backgroundImage
var form
// possiveis gameState = tela personagens, tela jogo, tela perdeu, tela venceu
var gameState = "tela inicial"

function preload(){
  
  

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  form = new Form();

}

function draw() {
  background(255); 

  form.display();

  drawSprites();

}
