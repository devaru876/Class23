const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball, box; 

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    var box_options ={
        isStatic: true 
    }
    
    box = Bodies.rectangle(200,300,50,50,box_options);
    World.add(world,box);

    var ball2_options ={
        restitution: 1.5
    }

    ball2 = Bodies.circle(100,50,30, ball2_options);
    World.add(world,ball2);

    




    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);

    rectMode(CENTER);
    rect(box.position.x,box.position.y,50,50);

    ellipseMode(RADIUS);
    ellipse(ball2.position.x, ball2.position.y,30,30);

}