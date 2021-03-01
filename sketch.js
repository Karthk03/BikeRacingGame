var gameState = 0, playerCount = 0;
var form, game, player;
var database;
var bikeIMG1, bikeIMG2,TrackFinal,FormBg,

function preload()
{
  bikeIMG1 = loadImage("Images/BikeImg.png");
  bikeIMG2 = loadImage("Images/BikeImg2.png");
  TrackFinal = loadImage("Images/TrackFinal.png");
  formBg = loadImage("Images/Form Bg.jfif");
}

function setup() 
{
  createCanvas(800,400);

  database = firebase.database();

  database.ref("gameState").on("value",function(data){
    gameState = data.val()
  })

  database.ref("playerCount").on("value",function(data){
    playerCount = data.val()
  })
  
  player = new Player();
  form = new Form();
  game = new Game();
}

function draw() 
{
  
  drawSprites();

  if(gameState == 0)
  {
    form.display();
  }
  else
  {
    game.play();
  }
}