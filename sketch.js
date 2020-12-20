const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var world
var enginee
var bodiess
var ball, slongshot, stand1, stand2, block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16 
var groundD;

function setup(){
createCanvas(800,400)
background(134)
enginee = Engine.create()
world = enginee.world
groundD = new Ground()
stand1 = new Stand(350,300,250,10)
stand2 = new Stand(700,200,250,10)
block1 = new Block(425,265)
block2 = new Block(375,265)
block3 = new Block(325,265)
block4 = new Block(275,265)
block5 = new Block(400,215)
block6 = new Block(350,215)
block7 = new Block(300,215)
block8 = new Block(375,165)
block9 = new Block(325,165)
block10 = new Block(350,115)
block11 = new Block(750,160)
block12 = new Block(700,160)
block13 = new Block(650,160)
block14 = new Block(725,110)
block15 = new Block(675,110)
block16 = new Block(700,60)
ball = Bodies.circle(50,200,20)
World.add(world,ball)
slongshot = new SlongShot(ball.body,{x: 100,y: 200})
}

function draw(){

groundD.display();
stand1.display();
stand2.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
slongshot.display();
ellipseMode(center)
ellipse(ball.position.x,ball.position.y,20,20,20,20)
}
