var bgImg;
var pizza;

function preload(){
  bgImg = loadImage("download.png");
 pizzaImg = loadImage("Burger.png");
}

function setup() {
  createCanvas(700,400);

  pizza = createSprite(100,300,20,20);
  pizza.addImage(pizzaImg);
  pizza.scale = 0.05;

}

function draw() {
 background(bgImg);
 stroke(10);
 fill("black");
 textSize(34);
 text("Better than Sanjeev Kapoor haha", 100,30);
 
  
  drawSprites();
}