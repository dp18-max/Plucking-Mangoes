const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var stone;
var boy;
var mango;
var tree;
var launcher;

function preload(){
	boy = loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stone = new stone(235,420,30); 

	mango = new mango(1100,100,30);
    mango = new mango(1170,130,30);
	mango = new mango(1010,140,30);
	mango = new mango(1000,70,30);
	mango = new mango(1100,70,30);
	mango = new mango(1000,230,30);
	mango = new mango(900,230,40);
	mango = new mango(1140,150,40);
	mango = new mango(1100,230,40);
	mango = new mango(1200,200,40);
	mango = new mango(1120,50,40);
	mango = new mango(900,160,40);

	tree = new tree(1050,580);
	ground = new ground(width/2,600,width,20);
	launcher = new launcher(stone.body,{x:235,y:420})
  
	Engine.run(engine);
 
}

function draw() {

  background("skyblue");
  textSize(30);
  fill('purple');
  textFont("Broadway");
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);
  
  

  tree.display();
  stone.display();
  mango.display();

  ground.display();
  launcher.display();
  detectollision(stone,mango);
  detectollision(stone,mango);
  detectollision(stone,mango);
  detectollision(stone,mango);
  detectollision(stone,mango);
  detectollision(stone,mango);
  detectollision(stone,mango);
  detectollision(stone,mango);
  detectollision(stone,mango);
  detectollision(stone,mango);
  detectollision(stone,mango);
  detectollision(stone,mango);
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcher.fly();
    
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  launcher.attach(stone.body);
 } 
}