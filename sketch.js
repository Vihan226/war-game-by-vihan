var soldier1;
var enemy1;
var enemy2;
var blast;
var score;
var instructions;
var enemy1image
var enemy3;
var enemy4;
var e5;
var e6;
var e7;
var e8;
var backgroundImage;
var backgroundImage2
var backgroundImage3;
var gameState=0;
var base;
var base2;
var f1;
var mission;
var f2,f3,f4,f5,f6,f7,f8,f9,f10;
var farmyImages;
var bulletImage;
var soldierImage;
var sidewayImage;
//var dies;

function preload(){
enemy1image = loadImage("Screenshot (22).png")
backgroundImage = loadImage("Screenshot (23).png")
backgroundImage2 = loadImage("Screenshot (24).png")
farmyImages= loadImage("Screenshot (25).png")
bulletImage= loadImage("Screenshot (26).png")
soldierImage= loadImage("Screenshot (27).png")
sidewayImage= loadImage("Screenshot (28).png")
backgroundImage3= loadImage("Screenshot (29).png")
}

function setup() {
  createCanvas(1360,580);

soldier1=createSprite(655,540,50,50)
soldier1.addImage("soldier",soldierImage)
soldier1.scale=.5
  //soldier1.shapeColor="red"
  
  blast=createSprite(668,520,5,10)
  blast.addImage("bullet",bulletImage)
  blast.scale=.05;
  //blast.shapeColor="black"

  enemy1=createSprite(655,20,50,50)
  enemy1.addImage("enemey1",enemy1image);
 enemy1.scale=.2

  enemy2=createSprite(780,-300,50,50)
  enemy2.addImage("enemey1",enemy1image);
  enemy2.scale=.2
  //enemy2.shapeColor="orange"

  enemy3=createSprite(600,-550,50,50)
  enemy3.addImage("enemey1",enemy1image);
  enemy3.scale=.2
  //enemy3.shapeColor="black"

  enemy4=createSprite(800,-850,50,50)
  enemy4.addImage("enemey1",enemy1image);
  enemy4.scale=.2
  //enemy4.shapeColor="pink"

  e5=createSprite(750,-1050,50,50)
  e5.addImage("enemey1",enemy1image);
  e5.scale=.2
  //e5.shapeColor="orange"

  e6=createSprite(3000,300,50,50)
  e6.addImage("enemey1",enemy1image);
  e6.scale=.2
  //e6.shapeColor="orange"

  e7=createSprite(600,-2550,50,50)
  e7.addImage("enemey1",enemy1image);
  e7.scale=.2
  //e7.shapeColor="green"

  e8=createSprite(4500,300,50,50)
  e8.addImage("enemey1",enemy1image);
  e8.scale=.2
  //e8.shapeColor="black"

  base=createSprite(670,570,1300,5)
  base.shapeColor="blue"

  base2=createSprite(10,300,5,500)
  base2.shapeColor="blue"

  f1=createSprite(355,-1000,60,60)
  f1.addImage("farmy",farmyImages)
  f1.scale=.2
  //f1.shapeColor="green"

  f2=createSprite(655,-1500,60,60)
  f2.addImage("farmy",farmyImages)
  f2.scale=.2
  //f2.shapeColor="yellow"
  f3=createSprite(855,-2000,60,60)
  f3.addImage("farmy",farmyImages)
  f3.scale=.2

  f4=createSprite(4200,330,60,60)
  f4.addImage("sideway",sidewayImage)
  f4.scale=.2

  f5=createSprite(5200,130,60,60)
  f5.addImage("sideway",sidewayImage)
  f5.scale=.2

  f6=createSprite(325,-3500,60,60)
  f6.addImage("farmy",farmyImages)
  f6.scale=.2

  f7=createSprite(555,-4400,60,60)
  f7.addImage("farmy",farmyImages)
  f7.scale=.2

  f8=createSprite(6500,400,60,60)
  f8.addImage("sideway",sidewayImage)
  f8.scale=.2

  f9=createSprite(7500,100,60,60)
  f9.addImage("sideway",sidewayImage)
  f9.scale=.2

  score=0
  dies=0
  mission=1
  instructions=""
}



function draw() {   
  background("white");
  
  fill("blue")
  //text("To move your soldier you have to press the left and the right arroy keys"+ instructions, 20,100);
fill("blue")
    text("Score:"+score, 100,50);
    fill("blue")
    text("Mission:"+mission,160,50);

  if(keyDown("space")){
  blast.velocityY=-20;
  }
  
  if(keyDown("LEFT_ARROW")){
    soldier1.velocityX=-13;
  }
  if(keyDown("RIGHT_ARROW")){
    soldier1.velocityX=13;
  }
  if(keyDown("space")){
   blast.x=soldier1.x
   blast.y=soldier1.y;
  }
  //velocities for the enemies
  enemy1.velocityY=10
  enemy2.velocityY=10
  enemy3.velocityY=8
  enemy4.velocityY=7
  e5.velocityY=7
  e6.velocityX=-7
  e7.velocityY=7
  e8.velocityX=-7
  //if functions against the blast variable

if(blast.isTouching(enemy1)){
  enemy1.x=-100;
  enemy1.y=-200;
  score=score+1
}

if(blast.isTouching(enemy2)){
  enemy2.x=-100;
  enemy2.y=-100;
  score=score+1
}
//base touchinh game end

if(enemy1.isTouching(base)){
  alert("game over: Refresh the game and press the Ok button below")
}
if(enemy2.isTouching(base)){
  alert("game over: Refresh the game and press the Ok button below")
}

if(enemy3.isTouching(base)){
  alert("game over: Refresh the game and press the Ok button below")
}

if(enemy4.isTouching(base)){
  alert("game over: Refresh the game and press the Ok button below")
}
if(e5.isTouching(base)){
  alert("game over: Refresh the game and press the Ok button below")
}
if(e6.isTouching(base2)){
  alert("game over: Refresh the game and press the Ok button below")
}
if(e7.isTouching(base)){
  alert("game over: Refresh the game and press the Ok button below")
}
if(e8.isTouching(base2)){
  alert("game over: Refresh the game and press the Ok button below")
}

if(f1.isTouching(base)){
  alert("game over: Refresh the game and press the Ok button below")
}
if(f2.isTouching(base)){
  alert("game over: Refresh the game and press the Ok button below")
}
if(f3.isTouching(base)){
  alert("game over: Refresh the game and press the Ok button below")
}
if(f4.isTouching(base2)){
  alert("game over: Refresh the game and press the Ok button below")
}
if(f5.isTouching(base2)){
  alert("game over: Refresh the game and press the Ok button below")
}
if(f6.isTouching(base)){
  alert("game over: Refresh the game and press the Ok button below")
}
if(f7.isTouching(base)){
  alert("game over: Refresh the game and press the Ok button below")
}
if(f8.isTouching(base2)){
  alert("game over: Refresh the game and press the Ok button below")
}
if(f9.isTouching(base2)){
  alert("game over: Refresh the game and press the Ok button below")
}
//mission 2
if(score>7){
background(backgroundImage2)
fill("blue")
text("Score:"+score, 100,50);
text("Mission:2"+mission,160,50);
mission=""
f1.velocityY=7;
f2.velocityY=8;
f3.velocityY=8;
f4.velocityX=-10;
f5.velocityX=-12;
f6.velocityY=8;
f7.velocityY=9;
f8.velocityX=-10;
f9.velocityX=-10;
}
if(score>16){
  background(backgroundImage3)
  fill("blue")
text("Score:"+score, 100,50);
text("Mission:3"+mission,160,50);
mission=""
}




if(blast.isTouching(enemy3)){
  enemy3.x=-100;
  enemy3.y=-200;
  score=score+1
}
if(blast.isTouching(enemy4)){
  enemy4.x=-100;
  enemy4.y=-200;
  score=score+1
}
if(blast.isTouching(e5)){
  e5.x=-100;
  e5.y=-200;
  score=score+1
}
if(blast.isTouching(e6)){
  e6.x=-100;
  e6.y=-200;
  score=score+1
}
if(blast.isTouching(e7)){
  e7.x=-100;
  e7.y=-200;
  score=score+1
}
if(blast.isTouching(e8)){
  e8.x=-100;
  e8.y=-200;
  score=score+1
}
if(blast.isTouching(f1)){
  f1.x=-100;
  f1.y=-200;
  score=score+1
}
if(blast.isTouching(f2)){
  f2.x=-100;
  f2.y=-200;
  score=score+1
}
if(blast.isTouching(f3)){
  f3.x=-100;
  f3.y=-200;
  score=score+1
}
if(blast.isTouching(f4)){
  f4.x=-100;
  f4.y=-200;
  score=score+1
}
if(blast.isTouching(f5)){
  f5.x=-100;
  f5.y=-200;
  score=score+1
}
if(blast.isTouching(f6)){
  f6.x=-100;
  f6.y=-200;
  score=score+1
}
if(blast.isTouching(f7)){
  f7.x=-100;
  f7.y=-200;
  score=score+1
}
if(blast.isTouching(f8)){
  f8.x=-100;
  f8.y=-200;
  score=score+1
}
if(blast.isTouching(f9)){
  f9.x=-100;
  f9.y=-200;
  score=score+1
}

//if(score>200){
//  alert("Done- Completed Mission, Refresh the game to play again and then press OK button below")

//}



  blast.velocityX=soldier1.velocityX
  //edges=createEdgeSprites();
   
  
/*if((touches.length > 0 || keyDown("SPACE")) && trex.y >= height+20) {
trex.velocityY = -10;
touches = [];
}
  
  trex.velocityY = trex.velocityY + 0.8*/
  

 
  drawSprites();
}






