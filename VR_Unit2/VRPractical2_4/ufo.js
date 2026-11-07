class Ufo{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");
        this.y=y;
        this.divisor=1;
        this.ddy=0.1;

        let disc = document.createElement("a-torus");
        disc.setAttribute("position",{x:x,y:1,z:z});
        disc.setAttribute("rotation",{x:90,y:0,z:0});
        disc.setAttribute("radius","3");
        this.obj.append(disc);

        let window = document.createElement("a-sphere");
        window.setAttribute("color","cyan");
        window.setAttribute("radius",2.75);
        window.setAttribute("position",{x:x,y:1,z:z});
        this.obj.append(window);

        this.obj.setAttribute("position",{x:x, z:z});

        scene.append(this.obj);
    }
    invade(){
        this.divisor+=(this.ddy/6969);
        this.y/=this.divisor;
        this.obj.setAttribute("position",{y:this.y});
        console.log(this.y)
        if(this.y<0){
            this.y=0;
            this.dy=0;
            this.ddy=0;
        }
    }
}