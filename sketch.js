const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder, ball, ground;
var stand1, stand2;
var ball;
var slingShot;
var fruit;

//função de carregamento de imagens e de som 
function preload() {
  backgroundImg = loadImage("background.png");
  fruit = loadImage("melon.png");
  g = loadImage("basket.png")
}

//função de configuração
function setup() {
  //tamanho da tela do jogo/projeto
  createCanvas(900, 400);

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

  ground = new Ground();

  //Desafio1: explicar e analisar a bola que será a fruta
  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);

  //Desafio2: criar o estilingue


}


function draw() {
  background(backgroundImg);

  Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);

  //exibindo chão
  ground.display();
  //scale da imagem da cesta
  g.scale = .025;


  //fruta feita e colocada na ball 
  imageMode(CENTER)
  image(fruit, ball.position.x, ball.position.y, 40, 40);
  image(g, 450, 270)

  //exibindo a restrição


}

//para mover o corpo com o mouse 
function mouseDragged() {
  //passar parâmetros dentro de parênteses
  Matter.Body.setPosition();
}


function mouseReleased() {
  //programar

}
