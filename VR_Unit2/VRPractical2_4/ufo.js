class Ufo{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");
        this.y=y;
        this.divisor=1;
        this.ddy=0.1;
        this.ry = 0;
        this.rz = 0;
        this.dry = 1;
        this.drz = 1;

        let disc = document.createElement("a-torus");
        disc.setAttribute("position",{x:x,y:1,z:z});
        disc.setAttribute("rotation",{x:90,y:0,z:0});
        disc.setAttribute("radius","3");
        this.obj.append(disc);

        let window = document.createElement("a-sphere");
        window.setAttribute("color","cyan");
        window.setAttribute("side", "double");
        window.setAttribute("radius",2.75);
        window.setAttribute("position",{x:x,y:1,z:z});
        window.setAttribute("rotation",{x:-90});
        window.setAttribute("phi-length", "180");
        window.setAttribute("opacity","0.5");
        this.obj.append(window);

        let base = document.createElement("a-sphere");
        base.setAttribute("color","gray");
        base.setAttribute("side", "double");
        base.setAttribute("radius",2.75);
        base.setAttribute("position",{x:x,y:1,z:z});
        base.setAttribute("rotation",{x:90});
        base.setAttribute("phi-length", "180");
        this.obj.append(base);

        this.obj.setAttribute("position",{x:x, z:z});

        scene.append(this.obj);
    }
    invade(){
        this.divisor+=(this.ddy/6969);
        this.y/=this.divisor;
        this.obj.setAttribute("position",{y:this.y});
        // console.log(this.y)
        if(this.y<0){
            this.y=0;
            this.dy=0;
            this.ddy=0;
        }
    }
    rotate(){
        this.ry += this.dry;
        this.rz += this.drz;
        this.obj.setAttribute("rotation",{z:this.rz});
        // if(this.ry>30){
        //     this.dry = -1;
        // }
        // if(this.ry<-30){
        //     this.dry = 1;
        // } Makes the ufos ORBIT the center instead of spinning
        if(this.rz>30){
            this.drz = -1;
        }
        if(this.rz<-30){
            this.drz = 1;
        }
    }
}