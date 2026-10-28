class Snowflake{
  constructor(x,y,z){
    // Challenge 5: Create animation variables y and dy for the Snowflake to fall.  Set them to appropriate values.
    this.y=rnd(10,15);
    this.x = rnd(-15,15);
    this.z = rnd(-15,15);
    this.dy = -0.01;

    this.obj = document.createElement("a-sphere");

    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("radius","0.05");

    scene.append(this.obj);
  }
  //Challenge 6: Create a function fall() which decreases y by dy and updates the Snowflake object to that y position

  fall(){
  this.y+=this.dy;
  this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
}
}