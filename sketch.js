var  ball;
var side1,side2,bottom;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500,680,1200,20);
    World.add(world,ground);
	//Create the Bodies Here.

	console.log(Side)
	ball=new Ball(100,600,40);
   
	side1=new Side(630,620,10,100);
	
	side2=new Side(790,620,10,100);

	bottom=new Side(710,660,150,20);
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
ball.display();
ground.display();
side1.display();
side2.display();
bottom.display();
  drawSprites();
 
}
function keypressed(){
	if(keycode ===UP_ARROW){
		isStatic:false
		Matter.Body.applyForce(body, position, force,{x:85,y:-85});
	
	}
}


