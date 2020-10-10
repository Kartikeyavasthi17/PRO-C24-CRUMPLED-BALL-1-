
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var rect1,rect2,rect3;
var rect1sprite,rect2sprite,rect3sprite;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200,800);


	engine = Engine.create();
	world = engine.world;
  
    paper =new Paper(200,200,20);

   ground =new Ground(600,700,1200,20);

   rect1 =new Box(width/2+190,600,20,200);

   rect2 =new Box(width/2+300,680,200,20);

   rect3 =new Box(width/2+400,600,20,200);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);

  rect1.display();
  rect2.display();
  rect3.display();

  paper.display();
  ground.display();

  drawSprites();
 
}

function keyPressed()
{

if(keyCode === UP_ARROW)
{

Matter.Body.applyForce(paper.body,paper.body.position,{x:70,y:-70});

}

}

