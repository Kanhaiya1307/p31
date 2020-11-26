const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var d1,d2,d3,d4,d5,d6,d7,d8,d9;


function setup() {
  var canvas = createCanvas(480,400);
  engine = Engine.create();
  world = World.create();

  
  ground = new Ground(100,height,800,20)
  d1 = new Ground(0,400,10,250)
  d2 = new Ground(60,400,10,250)
  d3 = new Ground(120,400,10,250)
  d4 = new Ground(180,400,10,250)
  d5 = new Ground(240,400,10,250)
  d6 = new Ground(300,400,10,250)
  d7 = new Ground(360,400,10,250)
  d8 = new Ground(420,400,10,250)
  d9 = new Ground(480,400,10,250)
}
  

function draw() {
  background("black");  
  ground.display();
  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();
  d8.display();
  d9.display();
  drawSprites();
}