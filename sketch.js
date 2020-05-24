const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform1,platform2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;

var ball;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  platform1=new Ground(550,200,150,10);
  platform2=new Ground(850,300,150,10);

  box1=new Box(550,180,20,30);
  box2=new Box(850,280,20,30);
  box3=new Box(530,180,20,30);
  box4=new Box(830,280,20,30);
  box5=new Box(570,180,20,30);
  box6=new Box(870,280,20,30);
  box7=new Box(510,180,20,30);
  box8=new Box(810,280,20,30);
  box9=new Box(590,180,20,30);
  box10=new Box(890,280,20,30);
  box11=new Box(540,150,20,30);
  box12=new Box(840,250,20,30);

  ball = new Ball(30,30,30,30);

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  platform1.display();
  platform2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  ball.display();
  
  drawSprites();
}