/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/

let maze = [
  "xxx-xxxxxxxxxxxxxxxxx",
  "x-x-----------------x",
  "x-xxxxxxxxxxx-xxxxxxx",
  "x-------------xS----x",
  "x-xxxxxxxxxxx-xxxxx-x",
  "x--x---x----------x-x",
  "x--xxx-x-xxxxxxxxxx-x",
  "x------x-x----x------",
  "x-xxxxxx-x-xxxx-xxxxx",
  "x------xxx-xo-x-x---x",
  "xxxxxx-----xx-x-x---x",
  "x-x--x-x----x-x-xxx-x",
  "x-x--x-xxxx-x-x---x-x",
  "x-x--x----x-x-x---x-x",
  "x----xxxx-xxx-xxx-x-x",
  "x-xx----x-------x---x",
  "x-x--x-----x--x-xxx-x",
  "x-xxxxxxxxxx-xx-x---x",
  "x---x--x--------x---x",
  "x-x-x--xxxxxxxxxx-xxx",
  "x-x-----------------x",
  "xxxxxxxxxxxxxxxxxxxxx",
];

/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/

let scene, boulders=[];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
    /* Challenge 3
      Choose a technique to traverse the each character in the string.
    */ 
    /* Challenge 4
       Make an appropriate decision based on the characters you chose to enter 
       in the maze.  Create an instance of the corresponding object.
    */
    for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,0.5,r)
      }else if(cols[c]=="S"){
        new Snowman(c,0.5,r);
      }else if(cols[c]=="o"){
        boulder = new Boulder(c,0.5,r);
        boulders.push(boulder);
      }
    }
  }
  loop();
})
function loop(){
  for(let boulder of boulders){
    boulder.spin();
  }

  window.requestAnimationFrame(loop);
}