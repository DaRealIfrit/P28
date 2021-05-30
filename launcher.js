class Launcher{
    constructor(body, Anchor){
        var options={
            bodyA: body,
            pointB: Anchor,
            stifness: 0.04,
            length: 1
        }
        this.bodyA = body
        this.pointB = Anchor
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
    attach(body){
        this.launcher.bodyA = body;
    }
    
    fly(){
        this.launcher.bodyA = null;
    }

    display(){
        var pointA = this.bodyA.position;
        var pointB = this.pointB;

        strokeWeight (5)
        line (pointA.x, pointA.y, pointB.x, pointB.y)
    }
    
}