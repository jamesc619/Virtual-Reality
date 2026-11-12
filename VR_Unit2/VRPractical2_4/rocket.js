class Rocket{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");
        this.y = y;
        this.dy = rnd(0,2)/10;
        this.ddy= (rnd(2,4))/1000;
        
        let shaft = document.createElement("a-cylinder");
        shaft.setAttribute("height","3.5");
        shaft.setAttribute("radius","0.75");
        shaft.setAttribute("color","#FFF8E8");
        shaft.setAttribute("position",{x:x, y:2.5,z:z})
        this.obj.append(shaft);

        let cone = document.createElement("a-cone");
        cone.setAttribute("radius-top","0");
        cone.setAttribute("height","1.5");
        cone.setAttribute("color","red");
        cone.setAttribute("position",{x:x,y:5,z:z});
        this.obj.append(cone);

        let cone2 = document.createElement("a-cone");
        cone2.setAttribute("radius-top","0");
        cone2.setAttribute("radius-bottom","0.5");
        cone2.setAttribute("height","2");
        cone2.setAttribute("color","orange");
        cone2.setAttribute("position",{x:x,y:0,z:z});
        cone2.setAttribute("rotation","-180 0 0");
        this.obj.append(cone2);

        let fin1 = document.createElement("a-triangle");
        fin1.setAttribute("color","red");
        fin1.setAttribute("position",{x:x+1, y:1.5, z:z});
        fin1.setAttribute("rotation","0 0 -90");
        fin1.setAttribute("side","double");
        this.obj.append(fin1);

        let fin2 = document.createElement("a-triangle");
        fin2.setAttribute("color","red");
        fin2.setAttribute("position",{x:x-1, y:1.5, z:z});
        fin2.setAttribute("rotation","0 0 90");
        fin2.setAttribute("side","double");
        this.obj.append(fin2);

        let fin3 = document.createElement("a-triangle");
        fin3.setAttribute("color","red");
        fin3.setAttribute("position",{x:x, y:1.5, z:z+1});
        fin3.setAttribute("rotation","0 -90 -90");
        fin3.setAttribute("side","double");
        this.obj.append(fin3);

        let fin4 = document.createElement("a-triangle");
        fin4.setAttribute("color","red");
        fin4.setAttribute("position",{x:x, y:1.5, z:z-1});
        fin4.setAttribute("rotation","0 -90 90");
        fin4.setAttribute("side","double");
        this.obj.append(fin4);

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