class Box {
    constructor(x,y,width,height)
    {
    var option = {
        density : 1.5,
        friction : 0.3,
        restitution : 0.4
    }
        
     this.body = Bodies.rectangle(x,y,width,height,option);
     this.width = width;
     this.height = height;
     World.add(world,this.body)
    }

    display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push(); // Enabling a new drawing state
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    rect(0,0,this.width,this.height) ;
    pop(); //End of new t  

    }
}

