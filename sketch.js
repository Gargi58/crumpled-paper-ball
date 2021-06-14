
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var ball;
var engine , world;

function preload()
{
	bg = loadImage("city.jpg");
	bin = loadImage("dustbingreen.png")
}
function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
	
	ball = new Paper(100,600,30);

	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1290,600,15,173);
	dustbinObj2=new dustbin(1410,600,15,173);
	dustbinObj3=new dustbin2(1350,670,120,15);
	
	
  
}


function draw() {
  
  background(bg);
 Engine.update(engine);


 ball.display();
  groundObject.display();
  dustbinObj.display();
  dustbinObj2.display();
  dustbinObj3.display();
 

}
function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball.body,ball.body.position,{x:6,y:-6});
	}
}

