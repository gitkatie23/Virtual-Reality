let rnd = (l,u) => Math.random() * (u-l) + l
let scene;
let donkeys = [];
let spiders = [];
let bacon = [];
let glowBall = document.querySelector("#glow-ball");



window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");

  for(let i = 0; i < 40; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let animal = document.createElement("a-gltf-model");
    animal.setAttribute("src","#donkey");
    animal.setAttribute("animation-mixer","");
    animal.setAttribute("position", x + " 0 " + z);
    animal.setAttribute("scale", "0.3 0.3 0.3");
    animal.addEventListener("click", function(){
      this.setAttribute("scale","0 0 0");
    })
    donkeys.push(animal);
    scene.append(animal);
  }

 
  for (let i = 0; i < 20; i++) {
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let spider = document.createElement("a-gltf-model");
    spider.setAttribute("src","#spider");
    spider.setAttribute("animation-mixer","");
    spider.setAttribute("position", x + " 0 " + z);
    spider.setAttribute("scale", "0.1 0.1 0.1");
    spider.addEventListener("click", function(){

      this.setAttribute("scale","2 5 0");
    });
    scene.append(spider);
    spiders.push(spider);
  }
   
  for (let i = 0; i < 20; i++) {
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let guy = document.createElement("a-gltf-model");
    guy.setAttribute("src","#bacon");
    guy.setAttribute("animation-mixer","");
    guy.setAttribute("position", x + " 0 " + z);
    guy.setAttribute("scale", "0.1 0.1 0.1");
    guy.addEventListener("click", function(){

      this.setAttribute("scale","2 5 0");
    });
    scene.append(guy);
    bacon.push(guy);
  }


  loop();
})

function loop(){
  
  for(let sp of bacon){
    sp.object3D.position.z += 0.05;
    if(sp.object3D.position.z > 20) {
      sp.object3D.position.z = -20;
    }
  }

  for(let sp of spiders){
    sp.object3D.position.z += 0.04;
    if(sp.object3D.position.z > 20) {
      sp.object3D.position.z = -20;
    }
  }

  for(let sp of donkeys){
    sp.object3D.position.z += 0.03;
    if(sp.object3D.position.z > 10) {
      sp.object3D.position.z = -10;
    }
  }

  window.requestAnimationFrame(loop);
}