let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mech = document.getElementById("mech-1");
  mech1 = new Mech(15, 10, 10);
  loop();
})
function loop(){
  mech1.launch();

  window.requestAnimationFrame( loop );
}
