let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rocket;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  
  snowman = new Snowman(-5,0);
  loop();
})

function loop(){
  snowman.spin();
  window.requestAnimationFrame( loop );
}

