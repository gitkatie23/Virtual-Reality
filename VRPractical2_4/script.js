let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, UFO;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let rocket = new rocket(x, 0 , z);
  }
    UFO = new UFO(-5,0);
  loop();

})

function loop(){
  UFO.spin();
  window.requestAnimationFrame( loop );
}