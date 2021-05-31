var score= 0;

var dog,bone;
var dogImg,boneImg;
var ground, invisibleGround;
var bonesGroup;
var bg,bgImg;

function preload(){
  dogImg = loadImage("dog.png");
  boneImg = loadImage("bone.png");
  bgImg = loadImage("dog house.webp");
}

function setup() {
  createCanvas(600, 200);

  bg = createSprite(300,100,600,200);
  bg.addImage(bgImg);
  
  dog = createSprite(550,130,20,50);
  dog.addImage(dogImg);
  dog.scale =0.4;
  
  ground = createSprite(200,180,800,20);
  ground.shapeColor="brown";
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  bonesGroup = new Group();
}

function draw() {
  
  background(255);

  ground.velocityX = 6;
  
    if (ground.x > 390){
      ground.x = ground.width/2;
    }
  
    dog.collide(invisibleGround);

    spawnBones();

    if(bonesGroup.isTouching(dog)){
    score=score+2;
    }
  
  drawSprites();
  
  if(bonesGroup.isTouching(dog)){
    textSize(25);
    fill("red");
    text("Bone eaten :) ", 350,40);
  }
  textSize(23);
  fill("black");
  text("Score: " + score,30,40);
}

function spawnBones() {
  //write code here to spawn the bones
  if (frameCount % 90 === 0) {
    bone = createSprite(30,160,40,10);
    bone.addImage(boneImg);
    bone.scale =0.1 ;
    bone.velocityX = 3;
    
     //assign lifetime to the variable
    bone.lifetime = 155;

    bonesGroup.add(bone);
  }
}
