var chao;
var bloco1;
var bloco2;
var bloco3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    var plane_options ={
		isStatic: true

	}
	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	Engine.run(engine);
   bloco1_options = {
   restitution:0.5,
   friction:0.02,
   frictionAir:0
   }
   bloco2_options = {
	restitution:0.7,
	friction:0.01,
	frictionAir:0.1
	}
	bloco3_options = {
		restitution:0.1,
		friction:1,
		frictionAir:0.1
		}

    chao = Bodies.rectangle(200,560,400,20,plane_options) ;
	bloco1 = Bodies.circle(220,20,20,bloco1_options);
	World.add(world,bloco1)
	bloco2 =Bodies.rectangle(110,50,40,20,bloco2_options);
	World.add(world,bloco2)
	bloco3 =Bodies.rectangle(350,50,20,20,bloco3_options);
	World.add(world,bloco3)


}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  drawSprites();
 
  rect(chao.position.x,chao.position.y,1210,20);
  ellipse(bloco1.position.x,bloco1.position.y,20,20);
  rect(bloco2.position.x,bloco2.position.y,40,20);
  rect(bloco3.position.x,bloco3.position.y,20,20);

  
}



