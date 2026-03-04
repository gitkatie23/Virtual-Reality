let rnd = (l,u) => Math.random() * (u-l) + l
let scene, balls = [];
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  mainCamera = document.getElementById("mainCamera");
  
  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let y = rnd(5, 10);
    let z = rnd(-20,20);
    balls.push( new Ball(x,y,z) );
  }

  /* Challenge 2
     Set the mainCamera as active while turning off all the
     cameras in the balls when the user presses the space bar.
  */

  // Spacebar: activate main camera and disable ball cameras
  window.addEventListener("keydown", function(e){
    if(e.code === "Space"){
      turnOffBallCameras();
      if(mainCamera) mainCamera.setAttribute("active", true);
    }
  });

  loop();
})

function loop(){
  for(let ball of balls){
    ball.bounce();
  }

  window.requestAnimationFrame(loop);
}

/* Challenge 1
   Create a function to turn off the cameras in all the balls. This 
   is needed for the rest of the challenges.
*/

function turnOffBallCameras(){
  for(let b of balls){
    if(b && b.camera){
      b.camera.setAttribute("active", false);
    }
  }
}
