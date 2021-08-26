function preload() {
  backgroundImage = loadImage("images/background.jpg");
  pipesImage = loadImage("images/pipes.PNG");
  birdImage = loadImage("images/th-removebg-preview.png");
}

function setup() {
  createCanvas(1600,800);
  backgroundSprite = createSprite(800,400,1600,800);
  backgroundSprite.addImage(backgroundImage);
  backgroundSprite.scale = 5.5
  birdSprite = createSprite(100,400,150,150)
  birdSprite.addImage(birdImage);
}



function draw() {
  background("black")
  drawSprites();
}