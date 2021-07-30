const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var hero,  backgound , backgoundImg;



function preload(){
  backgroundImg = loadImage("funny wallpaper background.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  // creating a monster
  monster = new Monster(900,100,150);


  ground = new Ground(500, 400, 1000, 15);

  box1 = new Box(800, 100, 50, 50);
  box2 = new Box(800, 100, 50, 50);
  box3 = new Box(800, 100, 50, 50);
  box4 = new Box(800, 100, 50, 50);
  box5 = new Box(800, 100, 50, 50);
  box6 = new Box(800, 100, 50, 50);
  box7 = new Box(700, 100, 50, 50);
  box8 = new Box(700, 100, 50, 50);
  box9 = new Box(700, 100, 50, 50);
  box10 = new Box(700, 100, 50, 50);
  box11 = new Box(700, 100, 50, 50);
  box12 = new Box(700, 100, 50, 50);
  box13 = new Box(600, 100, 50, 50);
  box14 = new Box(600, 100, 50, 50);
  box15 = new Box(600, 100, 50, 50);
  box16 = new Box(600, 100, 50, 50);
  box17 = new Box(600, 100, 50, 50);
  box18 = new Box(600, 100, 50, 50);
  box19 = new Box(600, 100, 50, 50);

  box20 = new Box(650, 340, 45, 45);
  box21 = new Box(650, 350, 45, 45);
  box22 = new Box(650, 330, 45, 45);
  box23 = new Box(650, 350, 45, 45);
  box24 = new Box(650, 350, 45, 45);
  box25 = new Box(650, 350, 45, 45);
  box26 = new Box(650, 350, 45, 45);

  box27 = new Box(750, 350, 45, 45);
  box28 = new Box(750, 350, 45, 45);
  box29 = new Box(750, 350, 45, 45);

  hero = new Hero(200, 200, 80, 80);
  // rope = new Rope(hero.body, { x: 200, y: 50 });

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();


  hero.display();
  // rope.display();
  monster.display();




}


function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}


