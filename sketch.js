var squarebox;

var surface1;

var surface2;

var surface3;

var surface4;

var  edge;

var canvas;

var music;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){

    canvas = createCanvas(800,600); 

    //create 4 different surfaces
    surface1 = createSprite(100,590,190,20);
    surface1.shapeColor = "red";

    surface2 = createSprite(300,590,190,20);
    surface2.shapeColor = "green";

    surface3 = createSprite(500,590,190,20);
    surface3.shapeColor = "yellow";
    
    surface4 = createSprite(700,590,190,20);
    surface4.shapeColor = "blue";

    squarebox = createSprite(400,200,30,30);
    squarebox.x = Math.round(random(20,375));
    squarebox.shapeColor = "white";
    squarebox.velocityX = -3;
    squarebox.velocityY = 9;

    music.play();
    //create box sprite and give velocity
    
}

function draw() {
    background("black");
    
    //add condition to check if box touching surface and make it box
    Bounce(canvas,squarebox);

    if(istouching(surface1,squarebox)){
       squarebox.shapeColor = surface1.shapeColor;
       Bounce(surface1,squarebox);
    }

    if(istouching(surface2,squarebox)){
        squarebox.shapeColor = surface2.shapeColor;
        //Bounce(surface2,squarebox);
        squarebox.velocityX = 0;
        squarebox.velocityY = 0;
        music.stop();
     }

     if(istouching(surface3,squarebox)){
        squarebox.shapeColor = surface3.shapeColor;
        Bounce(surface3,squarebox);

     }

     if(istouching(surface4,squarebox)){
        squarebox.shapeColor = surface4.shapeColor;
        Bounce(surface4,squarebox);

     }

    drawSprites();
}

