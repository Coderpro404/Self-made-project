const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ball, ballImg;
var hoop, hoopImg;
var bk, backgroundImg;

function preload(){
    backgroundImg = loadImage("bk.png");
    hoopImg = loadImage("hoop.png");
    ballImg = loadImage("ball.png");
}

function setup(){
    createCanvas(900,500);

    ball = createSprite(400,399,10,10);
    ball.addImage('ball',ballImg);
    ball.scale = 0.05;


    

    hoop = createSprite(400,400,10,10);
    hoop.addImage('basket', ballImg);



    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,450,600,20);

    console.log(canvas.width)

}

function draw(){
    image(backgroundImg,0,0,900,500 );
    imageMode(CENTER);

    Engine.update(engine);
    ground.show();

    drawSprites();
}