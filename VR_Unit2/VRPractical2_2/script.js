let scene, car, pokeball, sun, rocket, dude;
window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    car = document.querySelector("#car");
    pokeball = document.querySelector("#pokemonball");
    sun = document.querySelector("#sun");
    rocket = document.querySelector("#rocket");
    dude = document.querySelector("#dude");
    car.x=5;
    car.dx=-0.01;
    rocket.y=-1;
    rocket.dy=0.01;
    rocket.ddy=0.01;
    pokeball.rx=0;
    pokeball.drx=1;
    dude.scale=1;
    dude.dscale=0.01;
    sun.opac=0;
    sun.dopac=0.01;
    
    loop();
})
function loop(){
    car.x += car.dx;
    car.setAttribute("position", {x:car.x, y:1, z:-5});
    rocket.dy += rocket.ddy;
    rocket.y += rocket.dy;
    rocket.setAttribute("position",{x:0, y:rocket.y, z:-1});
    pokeball.rx += pokeball.drx;
    pokeball.setAttribute("rotation",{x:pokeball.rx, y:0, z:0});
    dude.scale+=dude.dscale;
    dude.setAttribute("scale",{x:dude.scale, y:dude.scale, z:dude.scale});
    sun.opac += sun.dopac;
    sun.setAttribute("opacity",`${sun.opac}`);

    
    window.requestAnimationFrame(loop);
}
