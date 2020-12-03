const Engine=Matter.Engine;
const World=Matter.World;       
const Bodies=Matter.Bodies;

 var box1 ;
 var box2;
 var bird;
 var ground;
function setup() {

  engine = Engine.create();
  world = engine.world;
createCanvas(1200,800);

ground = new Ground(500, 700, 1000, 20)
rect1 = new Box(500,500,50,50)
}

function draw() {

  background("purple"); 
  Engine.update(engine);
 
  ground.display();
  rect1.display();
}
