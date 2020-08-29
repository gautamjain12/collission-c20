var fixedrect,movingrect;

function setup() {
  createCanvas(1200,400);
  
 fixedrect= createSprite(600, 200, 50, 80);
 fixedrect.shapeColor="red";
 movingrect=createSprite(400,200,80,30);
 movingrect.shapeColor="red";
}

function draw() {
  background(0); 
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 &&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 &&
    fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2 &&
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2){
      movingrect.shapeColor="blue";
      fixedrect.shapeColor="blue";
    } 
    else{
      fixedrect.shapeColor="red";
      movingrect.shapeColor="red";
    }
  drawSprites();
}