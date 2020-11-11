class ground{
    constructor(x, y, width, height)
    {
        var opt = {
            isStatic: true,
            
        }
        this.body = Bodies.rectangle(x, y, width, height, opt);
        this.height = height;
        this.width = width;
        World.add(world, this.body);
        

    }
 
    display(){
        var p = this.body.position;
        rectMode(CENTER);
        fill(135);
        rect(p.x, p.y, this.width, this.height);

    }
}