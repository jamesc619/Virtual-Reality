let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, snowman, clouds=[], snowflakes=[];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 20; i++){
    let tree = new Tree(rnd(-20,20), 0 , rnd(-20,20));
    tree.scale(rnd(1,4));
  }
  snowman = new Snowman(-5,0);
  //Challenge 3: Create a cloud at some high position. Don't forget to declare the variable up top.
  for(let i=0;i<=10;i++){
  a = new Cloud(0,0,0);
  clouds.push(a);
  }
  //Challenge 7: Create a snowflake at some high position. Don't forget to declare the variable up top.
  for(let i=0;i<=1000;i++){
  b = new Snowflake(0, 0, 0);
  snowflakes.push(b);
  }
  loop();
})

function loop(){
  snowman.spin();
  //Challenge 4: Make the cloud fly
  for(let a of clouds){
  a.fly();
  }
  //Challenge 8: Make the snowflake fall
  for(let b of snowflakes){
  b.fall();
  }
  window.requestAnimationFrame(loop);
}
