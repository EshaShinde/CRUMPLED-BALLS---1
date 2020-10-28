
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var base
var side1
var side2
var paper

function preload()
{
//	paperImage = loadImage("paper.png")
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

    ground = new Ground(600,height,1300,20);

    paper = new Paper(100,100)
	//paper.addImage("paperImage")

	base = createSprite(1000,575 , 200,20);
	//base.shapecolor(225)

	side1 = createSprite(910,520,20,90);
	//side1.shapeColor("red")

	side2 = createSprite(1090,520,20,90);
	//side2.shapeColor("red")

	

	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background(0);

  //0if(paper.isTouching(side1)){
	//paper =  new Paper(100,100,50,50)
  //}
  
  drawSprites();
 
ground.display();
paper.display();
}



