const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var boxes = [];
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  for(var i = 100; i <=height-100; i=i+75){
    boxes.push(new Box(600, i, 70, 70));
  }

  for(var i = 0; i <=height-100; i=i+80){
    boxes.push(new Box(900, i, 70, 70));
  }

  for(var i = 150; i <=height-110; i=i+75){
    boxes.push(new Box(700, i, 70, 70));
  }

  for(var i = 250; i <=height-110; i=i+80){
    boxes.push(new Box(800, i, 70, 70));
  }

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();

  hero.display();
  rope.display();
  monster.display();

  for(var i = 0; i < boxes.length; i++){
    boxes[i].display();
  }

  //console.log(boxes[i]);

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}
