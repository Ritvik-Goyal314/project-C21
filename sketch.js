var canvas;
var music;
var surface1, surface2, surface3, surface4, topwall, bottomwall, leftwall, rightwall;
var box;
var edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

 // 4 different surfaces

surface1=createSprite(80,580,150,20)
surface1.shapeColor="yellow"

surface2=createSprite(280,580,150,20)
surface2.shapeColor="green"

surface3=createSprite(480,580,150,20)
surface3.shapeColor="orange"

surface4=createSprite(680,580,150,20)
surface4.shapeColor="red"



//create box sprite and give velocity
box=createSprite(random(50,750))
box.velocityY=7
box.velocityX=2



console.log(box)
}

function draw() {
    background(rgb(169,169,169));

//create edgeSprite
    edges=createEdgeSprites();


//bouncing off surfaces
box.bounceOff(surface1)
box.bounceOff(surface2)
box.bounceOff(surface3)
box.bounceOff(surface4)

//bouncingOff walls
box.bounceOff(edges)



//add condition to check if box touching surface and make it box
if(box.isTouching(surface1)){
    box.shapeColor="yellow"
}

if(box.isTouching(surface2)){
    box.shapeColor="green"
}

if(box.isTouching(surface3)){
    box.shapeColor="orange"
}

if(box.isTouching(surface4)){
    box.shapeColor="red"
}

    drawSprites();
}
