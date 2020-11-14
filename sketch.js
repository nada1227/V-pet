//Create variables here
var dogImg, happyDogImg, dog, foodS, database, foodStock; 


function preload()
{
  //load images here
  
  dogImg= loadImage("images/Dog.png")
  happyDogImg = loadImage("images/happydog.png")
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database(); 

  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg); 
  dog.scale = 0.2;
  foodStock = database.ref('food'); 
  foodStock.on("value",readStock)

}


function draw() {  
background(46,139,87); 
 if(keyWentDown(UP_ARROW)){
writeStock(foodS); 
dog.addImage(happyDogImg); 

 }


drawSprites();
  //add styles here
  fill("white");
  stroke("black");
text("Food Remaning"+foodS,250,50);
text("click on up_arrow to feed the dog", 250,80); 
}

function readStock(data) {
foodS = data.val(); 

}

function writeStock(x){
if (x<=0){
x = 0; 

}
else{
x = x-1

}
database.ref('/').update({
  food:x 
})




}