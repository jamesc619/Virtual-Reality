let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rockets=[], ufos=[];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");

  for(let i=0;i<100;i++){
    let x=rnd(-100, 100);
    let y=rnd(-3,-5);
    let z=rnd(-100,100)
    rocket = new Rocket(x,y,z);
    rockets.push(rocket);
  }
  for(let i=0;i<50;i++){
    let x=rnd(-100,100);
    let y=rnd(100,200);
    let z=rnd(-100,100);
    ufo = new Ufo(x,y,z);
    ufos.push(ufo);
  }
  
  loop();
})

function loop(){
  for(let rocket of rockets){
   rocket.launch();
  }
  for(let ufo of ufos){
    ufo.invade();
  }
  window.requestAnimationFrame( loop );
}
