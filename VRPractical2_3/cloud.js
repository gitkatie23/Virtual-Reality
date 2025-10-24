 class cloud{
  constructor(x,y,z,speed){
    this.x = x;
    this.y = y;
    this.z = z;
    this.speed = speed;
    this.obj = document.createElement("a-entity");
  
    let position = 0;
    for(let i = 0; i < 3; i++){
      let puff = document.createElement("a-dodecahedron");
      puff.setAttribute("position")
    }
  
    let circle = document.createElement("a-sphere");
    circle.setAttribute("color","white");
    circle.setAttribute("position","0 1.5 0");
    circle.setAttribute("radius","0.25");
    this.obj.append( circle );
    
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
} 
 }
