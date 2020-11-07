
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,redb,redb2,redb3,ground;
// function preload()
// {
	
// }

function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper=new Paper(200,200,15);
	ground=new Ground(600,height-20,1200,20);

	redb=createSprite(width-90,height-50,130,11);
	redb.shapeColor="red";

	redb2=createSprite(redb.x+65,510,11,90);
	redb2.shapeColor="red";

	redb3=createSprite(redb2.x-133,510 ,11,90);
	redb3.shapeColor="red";

	Engine.run(engine);
  
}


function draw() {
	background("yellow");
	Engine.update(engine);
	paper.display();
	ground.display();
	keyPressed()
	drawSprites();
 console.log(paper.body.position)
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-10})
	}
}



