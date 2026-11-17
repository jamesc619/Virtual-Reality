let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let target, targets=[];

window.addEventListener("DOMContentLoaded",function() {
  target = document.querySelector("#target");
  for(let i=0;i<10;i++){
  target1 = target.cloneNode(true);
  targets.push(target1);
  }
  target.a = 0;
  target.da = -2;
  loop();
})

function loop(){
  target.a += target.da;

  target.setAttribute("rotation",{x:target.a, y:0, z: 0});
  if(target.a<-90){
    target.da=0;
  }
  for(let i=0;i<targets.length;i++){
    targets[i].setAttribute("rotation",{x:target.a, y:0, z: 0});

  }
  window.requestAnimationFrame( loop );
}