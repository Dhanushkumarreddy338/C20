var fixedrectangle, movingrectangle;
function setup() {
  createCanvas(800,400);
  fixedrectangle = createSprite(400, 200, 50, 50);
  movingrectangle  = createSprite(200, 100, 20, 20);
}

function draw() {
  background(255,255,255);  
  fixedrectangle.shapeColor = "red";
  movingrectangle.shapeColor = "red"
  movingrectangle.x = World.mouseX;
  movingrectangle.y = World.mouseY;
  console.log(fixedrectangle.x-movingrectangle.x);
  if(fixedrectangle.x-movingrectangle.x===35){
    fixedrectangle.shapeColor = "blue";
    movingrectangle.shapeColor = "blue";
  }
  if(fixedrectangle.x-movingrectangle.x===-35){
    fixedrectangle.shapeColor = "blue";
    movingrectangle.shapeColor = "blue";
  }
  if(fixedrectangle.y-movingrectangle.y===-35){
    fixedrectangle.shapeColor = "blue";
    movingrectangle.shapeColor = "blue";
  }
  if(fixedrectangle.y-movingrectangle.y===35){
    fixedrectangle.shapeColor = "blue";
    movingrectangle.shapeColor = "blue";
  }
  drawSprites();
}