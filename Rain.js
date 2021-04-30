class Rain{
    constructor(x,y){
        var options={
            isStatic:false,           
            restitution:0.1,
            friction:0.1
        }
       
        this.body = Bodies.circle(x,y,3.5,options);
        this.r=3.5;
        World.add(world, this.body);
        
      
    }
    display(){
       var pos=this.body.position;
    
        ellipseMode(RADIUS);
        fill("skyblue");
        ellipse(pos.x,pos.y,this.r,this.r);
    }
    positionup(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
        }
    }
};