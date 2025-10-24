let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let tree = new tree(x, 0 , z);
  }


  for(let i = 0; i < 100; i++){

      let x = rnd(-20,-20);
      let z = rnd(-20,-20);
     let  cloud = new cloud(x,5,z);
  }

       for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let house = new house(x,0,z);
     }
  }

)
