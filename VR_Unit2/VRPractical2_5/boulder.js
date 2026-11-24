class Boulder{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;
    this.a=0;
    this.da=1;

    this.obj = document.createElement("a-dodecahedron");
    this.obj.setAttribute("src","#boulder");
    this.obj.setAttribute("radius",0.5);
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);

  }
  spin(){
    this.a += this.da;
    this.obj.setAttribute("rotation",{x:this.a*1.5, y:this.a, z:this.a*0.9});
  }
}