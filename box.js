class Box{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.4,
            'friction':0.4,
            'density':0.5
        }
     this.body  = Bodies.rectangle(x,y,width,height,options)  
     this.width = width;
     this.height = height;
        World.add(world,this.body)
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(2);
        stroke(0)
        fill("lightpink")
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }





}