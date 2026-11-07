class Rocket{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");
        this.y = y;
        this.dy = rnd(0,2)/10;
        this.ddy= (rnd(2,4))/1000;
        
        let shaft = document.createElement("a-cylinder");
        shaft.setAttribute("height","2");
        shaft.setAttribute("radius","0.75");
        shaft.setAttribute("color","#FFF8E8");
        shaft.setAttribute("position",{x:x, y:2,z:z})
        this.obj.append(shaft);

        let cone = document.createElement("a-cone");
        cone.setAttribute("radius-top","0");
        cone.setAttribute("height","1.5");
        cone.setAttribute("color","red");
        cone.setAttribute("position",{x:x,y:3.5,z:z});
        this.obj.append(cone);

        let cone2 = document.createElement("a-cone");
        cone2.setAttribute("radius-top","0");
        cone2.setAttribute("radius-bottom","0.5");
        cone2.setAttribute("height","2");
        cone2.setAttribute("color","orange");
        cone2.setAttribute("position",{x:x,y:0,z:z});
        cone2.setAttribute("rotation","-180 0 0");
        this.obj.append(cone2);

        this.obj.setAttribute("position",{x:x, z:z})

        scene.append(this.obj);
    }
    launch(){
        this.dy+=this.ddy;
        this.y += this.dy;
        this.obj.setAttribute("position",{y:this.y});
        if(this.y>100){
            this.y=rnd(-5,-2);
            this.dy=rnd(0,2);
        }
    }
}