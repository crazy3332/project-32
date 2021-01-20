const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world; 
var polygon1, Slingshot;
var score = 0;
function preload(){
polygonIMG = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1800,800);
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(900,725,300,50);
    ground2 = new Ground(750,375,300,50);

    box1 = new Box(800,675,50,50);
    box2 = new Box(850,675,50,50);
    box3 = new Box(900,675,50,50);
    box4 = new Box(950,675,50,50);
    box5 = new Box(1000,675,50,50);
    box6 = new Box(850,625,50,50);
    box7 = new Box(900,625,50,50);
    box8 = new Box(950,625,50,50);
    box9 = new Box(900,575,50,50); 
    box10 = new Box(650,325,50,50);
    box11 = new Box(700,325,50,50);
    box12 = new Box(750,325,50,50);
    box13 = new Box(800,325,50,50);
    box14 = new Box(850,325,50,50);
    box15 = new Box(700,275,50,50);
    box16 = new Box(750,275,50,50);
    box17 = new Box(800,275,50,50);
    box18 = new Box(750,225,50,50);

    polygon1 = Bodies.circle(300,600,40);
    World.add(world,polygon1);
    Slingshot = new SlingShot(this.polygon1,{x:200,y:500});
}

function draw(){
    background(255);
    Engine.update(engine);
    imageMode(CENTER);
    image(polygonIMG,polygon1.position.x,polygon1.position.y,100,100);
    text("score:"+score,900,100)
    if(score===360){
        text("YAY! You win",900,500);
    }
    ground1.display();
    ground2.display();
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
    box13.display();
    box14.display();
    box15.display();    
    box16.display();
    box17.display();
    box18.display(); 
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();    
    box16.score();
    box17.score();
    box18.score();    
    Slingshot.display();
    
}

function mouseDragged(){
    
    Matter.Body.setPosition(polygon1, {x: mouseX, y: mouseY});
    return false;
}


function mouseReleased(){
    Slingshot.fly()
}

function keyPressed(){
    if(keyCode === 32){
        Slingshot.attach(polygon1);
        
    } 
 }