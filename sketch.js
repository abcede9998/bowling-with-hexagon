const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var g1,g2;
var backgroundImg,platform;
var bird, slingShot;
var b1,b2;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,900);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    g1 = new Ground(500,550,350,10)
    g2 = new Ground(900,400,350,10)
    strokeWeight(2);
    stroke("black");
    fill("blue");
    box3 = new Box(500,500,50,70);
    fill("red");
    box4 = new Box(550,500,50,70);
    box5 = new Box(600,500,50,70);
    b6 = new Box(450,500,50,70);
    b7 = new Box(400, 500, 50, 70);
    b8 = new Box(350, 500,50,70);
    b13 = new Box(650,500,50,70)
    
    b9 = new Box(550, 400,50,70);
    b10 = new Box(500,400,50,70);
    b11= new Box(450, 400,50,70);
    b12= new Box(400, 400,50,70);
    b14= new Box(600, 400,50,70);

    b15=new Box( 550, 300,50, 70);
    b16=new Box( 500, 300,50, 70);
    b17=new Box( 450, 300,50, 70);

    b18=new Box(500, 200, 50, 70)

    bird = new Bird(200,450);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:450});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);


    ground.display();


    box3.display();
    box4.display();
    box5.display();
    b6.display();
    b7.display();
    b8.display();

    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();

    b15.display();
    b16.display();
    b17.display();

    b18.display();

g1.display();
g2.display();

    


    bird.display();


    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}