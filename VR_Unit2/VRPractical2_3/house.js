class House{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");
    
        let base = document.createElement("a-box");
        base.setAttribute("color","yellow");
        base.setAttribute("scale","1.5 1.5 1.5");
        this.obj.append(base);

        let roof = document.createElement("a-cone");
        roof.setAttribute("segments-radial","4");
        roof.setAttribute("scale","1.5 1 1.5");
        roof.setAttribute("position","0 1.25 0");
        roof.setAttribute("rotation","0 45 0");
        roof.setAttribute("color","#d8432f");
        this.obj.append(roof);

        this.obj.setAttribute("position", {x:x, y:0.5, z:z});
        this.obj.setAttribute("scale","2 2 2");
        scene.append(this.obj);
    }
}