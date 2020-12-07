var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var b1,b2,b3;
var b1s,b2s,b3s;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//var static_ob,gravity_ob;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	

	  var gravity_ob = {

	 restitution: 0.5,
	 isStatic: true

	}


b1s = createSprite(width/2,630,200,20);
b2s = createSprite(350,580,20,100);
b3s = createSprite(450,580,20,100);
b1s.shapeColor = "red";
b2s.shapeColor = "red";
b3s.shapeColor = "red";


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;
	//.visible = false;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(width/2 , 200 , 50 ,50, gravity_ob);
	World.add(world, packageBody);
	
	fill("red")
	b1 = Bodies.rectangle(width/2,650,200,20,gravity_ob);
	World.add(world, b1);
	b3 = Bodies.rectangle(300,620,20,100,gravity_ob);
	World.add(world, b3);
	b2 = Bodies.rectangle(500,620,20,100,gravity_ob);
	World.add(world, b2);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
	//World.add(world,packageBody);
	//World.add(world,ground);


  
}


function draw() {
  
	
	
	//rectMode(CENTER);
	//rect(b1.position.x,b1.position.y,100,10);
  
	
	background(0);
  packageSprite.x=packageBody.position.x 
   packageSprite.y=packageBody.position.y 
 b1s.x = b1.position.x;
 b1s.y = b1.position.y;
 b2s.x = b2.position.x;
 b2s.y = b2.position.y;
 b3s.x = b3.position.x;
 b3s.y = b3.position.y;

 
   //keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	//Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key
	Body.setStatic(packageBody,false);
	//Matter.Body.applyForce(packageBody.body,packageBody.body.position,{x:0,y:85});
	//	packageBody.ignoreGravity = false;  
	//packageBody = {isStatic: false}
}
}



