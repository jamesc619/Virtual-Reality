class Ufo{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");
        this.x = x;
        this.z = z;
        this.y=y;
        this.divisor=1;
        this.ddy=0.1;
        this.rx = 0;
        this.ry = 0;
        this.rz = 0;
        this.drx = rnd(1,2);
        this.dry = rnd(1,2);
        this.drz = rnd(1,2);

        let disc = document.createElement("a-torus");
        disc.setAttribute("position",{x:0,y:1,z:0});
        disc.setAttribute("rotation",{x:90,y:0,z:0});
        disc.setAttribute("radius","3");
        this.obj.append(disc);

        let window = document.createElement("a-sphere");
        window.setAttribute("color","cyan");
        window.setAttribute("side", "double");
        window.setAttribute("radius",2.75);
        window.setAttribute("position",{x:0,y:1,z:0});
        window.setAttribute("rotation",{x:-90});
        window.setAttribute("phi-length", "180");
        window.setAttribute("opacity","0.5");
        this.obj.append(window);

        let base = document.createElement("a-sphere");
        base.setAttribute("color","gray");
        base.setAttribute("side", "double");
        base.setAttribute("radius",2.75);
        base.setAttribute("position",{x:0,y:1,z:0});
        base.setAttribute("rotation",{x:90});
        base.setAttribute("phi-length", "180");
        this.obj.append(base);

        this.obj.setAttribute("position",{x:x, y:y, z:z});

        scene.append(this.obj);
    }
    invade(){
        this.divisor+=(this.ddy/6969);
        this.y/=this.divisor;
        this.obj.setAttribute("position",{x:this.x,y:this.y, z:  this.z});
        // console.log(this.y)
        if(this.y<0){
            this.y=0;
            this.dy=0;
            this.ddy=0;
        }
    }
    rotate(){
        this.rx += this.drx;
        this.ry += this.dry;
        this.rz += this.drz;
        this.obj.setAttribute("rotation",{x:this.rx,y:this.ry, z:this.rz});
        if(this.y<3){
            this.drx = 0;
            this.dry = 0;
            this.drz = 0;
            this.rx= 0;
            this.ry= 0;
            this.rz= 0;
            
            
        }

    }
}