let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

  box = document.querySelector("a-box");
  box.a = 0;
  box.da = 1;
  
  loop();
})

function loop(){
  box.a += box.da;
  box.setAttribute("rotation",{x:0, y:box.a, z:0});
  window.requestAnimationFrame(loop);
}

let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);

  
  window.requestAnimationFrame( loop );
}




