var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    
    block2 = createSprite(285,580,200,30);
    block2.shapeColor = "orange";


  
    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    //create two more blocks i.e. block3 and block4 here

    block3 = createSprite(490,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(695,580,200,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);

    //write code to add velocityX and velocityY

    ball.velocityY = 4;
    ball.velocityX = 5;
}

function draw() {
    background(0);
    edges=createEdgeSprites();
    
    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityY = 0;
        ball.velocityX = 0;

        //write code to stop music
        
    }

    //write code to bounce off ball from the block3
    if(block3.isTouching(ball)){
        ball.shapeColor = "red";
        music.play();
    }

    //write code to bounce off ball from the block4
    if(block4.isTouching(ball)){
        ball.shapeColor = "green";
        music.play();
    }

    ball.bounceOff(edges);
    ball.bounceOff(block1);
   
    ball.bounceOff(block3);
    ball.bounceOff(block4);
    drawSprites();
}
