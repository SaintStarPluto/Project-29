const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,height,1200,20);
    ground2 = new Ground(740,250,300,10);

    block1 = new Block(660,215,40,60);
    block2 = new Block(700,215,40,60);
    block3 = new Block(740,215,40,60);
    block4 = new Block(780,215,40,60);
    block5 = new Block(820,215,40,60);
    block6 = new Block(700,155,40,60);
    block7 = new Block(740,155,40,60);
    block8 = new Block(780,155,40,60);
    block9 = new Block(740,95,40,60);
    
}

function draw(){
    Engine.update(engine);
    
    textSize(25);
    text("Drag the Hexagon and release it to launch towards the block", 50, 50);

    ground1.display();
    ground2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
   

}
