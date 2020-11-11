const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var groune;
var box1,box2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  
  
  World.add(world,ground);

  box1 = new Box(250,100,50,50);
  box2 = new Box(220, 30, 50, 50);
  grounde = new ground(200, 350, 500, 10);
  console.log(ground);
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  box1.display();
  box2.display();
  grounde.display();
 
}