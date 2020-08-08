
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy;
var boyImage

function preload()
{
boyImage = loadImage("Plucking mangoes/boy.png");	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	stoneObj = new Stone(75,450,50,50);

	boy = createSprite(170,500,10,10);
	boy.scale = 0.2;
	boy.addImage("boy",boyImage);

	tree = new Tree(790,400,400,500);

	mango1 = new Mango(670,370,40);

	mango2 = new Mango(790,310,40);

	mango3 = new Mango(720,230,40);

	mango4 = new Mango(890,280,40);


	slingShot = new SlingShot(stoneObj.body,{x:75,y:390});


	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);

 text("PRESS SPACE TO TRY AGAIN",100,200)
 textSize(100)

  drawSprites();

  tree.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  slingShot.display();

  
  detectCollision(stoneObj,mango1);

  detectCollision(stoneObj,mango2);

  detectCollision(stoneObj,mango3);

  detectCollision(stoneObj,mango4);

}

function mouseDragged(){
Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
slingShot.fly()	;
}

function detectCollision(stone,mango){
mangoBodyPosition = mango.body.position
stoneBodyPosition = stone.body.position

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<= mango.radius + stone.radius){
	Matter.Body.setStatic(mango.body,false);

}
}

function keyPressed(){
if(keyCode === 32){
Matter.Body.setPosition(stoneObj.body , {x:75,y:400});
slingShot = new SlingShot(stoneObj.body,{x:75,y:390});
}	
}