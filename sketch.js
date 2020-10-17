
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
bob1=new paper(200,350,50);
bob2=new paper(280,350,50);	
bob3=new paper(320,350,50);
bob4=new paper(360,350,50);
bob5=new paper(400,350,50);
roof=new Ground(400,100,450,30)
s1=new SlingShot(bob1.body,{x:200,y:100})
s2=new SlingShot(bob2.body,{x:300,y:100})
s3=new SlingShot(bob3.body,{x:400,y:100})
s4=new SlingShot(bob4.body,{x:500,y:100})
s5=new SlingShot(bob5.body,{x:600,y:100})
	Engine.run(engine);
	
}


function draw() {
  
  background(200);
  
 bob1.display();
 bob2.display();
bob3.display();
bob4.display();
bob5.display();
roof.display();
s1.display();
s2.display();
s3.display();
s4.display();
s5.display();
KeyPressed();
}

function KeyPressed() {

	if (keyDown(UP_ARROW)){

		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:200,y:-10});
	}

}

