
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rain=[];
var tillwhen=100;
var drops=[];
var ground;
var umbrella;

function setup(){
    createCanvas(400,650);

    engine = Engine.create();
    world = engine.world;

   
   if(frameCount%100===0){
   for(i=0;i<tillwhen;i++){
    drops.push(new Rain(random(200,300),-100))
   }
}
  umbrella=new Umbrella(200,460)

}


function draw(){
    Engine.update(engine);
    background("black")
  
    for(i=0;i<tillwhen;i++){
        drops[i].display();
        drops[i].positionup();
    }
    
    drawSprites();
    umbrella.display();
}   

