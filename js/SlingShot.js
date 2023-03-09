class Slingshot {
    constructor(bodyA, pointB) {
        //propriedades do estilingue
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 100
        }

        this.sling = Constraint.create(options);
        this.pointB = pointB;

        World.add(world, this.sling);

    }

    //para separar a fruta
    fly() {
        this.sling.bodyA = null;
    }

    display() {
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(4);
            //trocar a cor do estilingue
            stroke("turquoise");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

}
