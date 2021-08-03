class Slingshot{
    constructor(body,anchor){
        var options={
            bodyA: body,
            pointB: anchor,
            length: 1,
            stiffness: 0.4,
        }

        this.bodyA = body;
        this.pointB = anchor;
        this.slingShot = Constraint.create(options);
        World.add(world,this.slingShot);
    }

    fly(){
        this.slingShot.bodyA = null;
    }

    attach(polygon){
        this.slingShot.bodyA = body;
    }

    display(){
        if(this.slingShot.bodyA){
			var pointA=this.bodyA.position;
			var pointB=this.pointB;

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}