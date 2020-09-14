class Ball{
    constructor(x, y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body = Bodies.circle(x, y, 10, options);
        this.radius =20;
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        
        push();
        strokeWeight(4);
        stroke(192,192,192);
        fill(192,192,192);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(50,650,this.radius);
        pop();
    }
}