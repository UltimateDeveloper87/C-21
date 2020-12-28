//Program to make algorithm for bouncing sprites
var car, wall;
var carImage;

function preload()
{
    carImage=loadImage("car.png");
}
function setup()
{
    createCanvas(1000,600)

    car=createSprite(100,100,50,50);
    car.addImage(carImage)
    car.scale=0.7;
    wall=createSprite(500,200,60,300)
    car.shapeColor=wall.shapeColor="yellow"
    car.velocityX=20;
     

}

function draw()
{
    background(0);

bouncing(car,wall)

    drawSprites();
}