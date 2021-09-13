var road 
var car 
var opponentcar
var opponentcargroup
var score=0
var highscore=0
var gameState= 'PLAY'


function  preload() {
  roadImage=loadImage("Road.png")  
  carImage=loadImage("Screenshot (59).png")
  opponentcarImage=loadImage("Screenshot (61).png")
  accidentSound=loadSound("CarCrashSkid PE809001.mp3")
  
}
function setup() {
createCanvas(windowWidth,windowHeight)
road=createSprite(width/2,200)
road.addImage(roadImage)
road.velocityY=8
car = createSprite(width/2,height-20,20,20);
car.addImage(carImage);
car.scale =0.8
opponentcargroup=new Group()

}
function draw() {
  if (gameState==='PLAY'){
    background(0)
    
    car.x=World.mouseX
   edges= createEdgeSprites();
  car.collide(edges);
  if(road.y > height){
    road.y = height/2;
  }
   Opponentcar()
drawSprites()
text("Score:"+score,100,100)
text ("highScore:"+highscore,100,50)
score = score + Math.round(getFrameRate()/60);

if (opponentcargroup.isTouching(car))
{
  gameState="over"
  accidentSound.play()
}
}
if(gameState === "over") {
  textSize(50);
  fill("skyblue");
  text("GAME OVER",250,200);
  textSize(25);
  fill ("yellow")
  text("Press space to restart the game",700,230);
if (keyDown("SPACE"))
{
  reset();
}
  
  if (score>highscore)
  {
    highscore=score
  }

}
}
function Opponentcar() {
  if (World.frameCount % 120== 0) {
    opponentcar  = createSprite(Math.round(random(50, width-50),height-20, 100, 100));
      opponentcar.addImage(opponentcarImage);
    opponentcar.scale=1
    opponentcar.velocityY = 7;
    car.depth = opponentcar.depth;

    opponentcar.lifetime = 300;
    opponentcargroup.add(opponentcar);
    }
}
function reset() {
  gameState='PLAY';
  score=0
  opponentcargroup.destroyEach();


}