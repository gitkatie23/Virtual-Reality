let rnd = (l,u) => Math.random() * (u-l) + l
let scene;
let people = [];
let spiders = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");

  // spawn some people (Grudespicable models)
  for(let i = 0; i < 40; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let animal = document.createElement("a-gltf-model");
    animal.setAttribute("src","#Grudespicable");
    animal.setAttribute("animation-mixer","");
    animal.setAttribute("position", x + " 0 " + z);
    animal.setAttribute("scale", "0.5 0.5 0.5");
    animal.addEventListener("click", function(){
      this.setAttribute("scale","0 0 0");
    })
    people.push(animal);
    scene.append(animal);
  }

  // spawn multiple small spiders using the big spider asset
  for (let i = 0; i < 20; i++) {
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let spider = document.createElement("a-gltf-model");
    spider.setAttribute("src","#spider");
    spider.setAttribute("animation-mixer","");
    spider.setAttribute("position", x + " 0 " + z);
    spider.setAttribute("scale", "0.1 0.1 0.1");
    spider.addEventListener("click", function(){
      this.setAttribute("scale","0 0 0");
    });
    scene.append(spider);
    spiders.push(spider);
  }

  loop();
})

function loop(){
  // move the little spiders slowly forward and wrap around
  for(let sp of spiders){
    sp.object3D.position.z += 0.01;
    if(sp.object3D.position.z > 20) {
      sp.object3D.position.z = -20;
    }
  }

  window.requestAnimationFrame(loop);
}
