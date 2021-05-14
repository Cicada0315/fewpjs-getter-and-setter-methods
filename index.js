// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius=radius;
    }
    get diameter(){
        return this.radius*=2;
    }
    get circumference(){
        return 2*Math.PI*this.radius;
    }

    get area(){
        return this.radius**2*Math.PI;
    }

    set diameter(newdiameter){
        this.radius=newdiameter/2;
    }
    set circumference(newcircumference){
        this.radius=newcircumference/(2*Math.PI);
    }

    set area(newarea){
        this.radius=Math.sqrt(newarea/Math.PI);
    }
}