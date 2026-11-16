let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, dudeTemplate, dudes=[];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  dudeTemplate = document.querySelector("#dudeTemplate");

  //Challenge 4: Create an array of dudes at random locations.
  for(let i=0;i<100;i++){
  dude = new Dude(rnd(-25,25),rnd(5,10),rnd(-25,25));
  dudes.push(dude);
  }
  dude1 = new Dude(0,9,0);
  loop();  
})
function loop(){
  // Challenge 5: Make all the dudes jump.
  for(dude of dudes){
    dude.jump();
  }
  dude1.jump();
  window.requestAnimationFrame( loop );
}