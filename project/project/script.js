let rnd = (l,u) => Math.random() * (u-l) + l
let scene;
let people = [];
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");

  for(let i = 0; i < 40; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let animal = document.createElement("a-gltf-model");
    animal.setAttribute("src","#donkey");
    animal.setAttribute("animation-mixer","");
    animal.setAttribute("position", x + " 0 " + z);
    animal.setAttribute("scale", "0.5 0.5 0.5");
    animal.addEventListener("click",function(){
      this.setAttribute("scale","0 0 0");
    })
    people.push(animal);
    scene.append(animal);
  }
  
  loop();
})

function loop(){
  for(let animal of people){
    animal.object3D.position.z += 0.005;
  }
  
  window.requestAnimationFrame(loop);
}