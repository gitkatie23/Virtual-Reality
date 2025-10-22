 class cloud{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let circle = document.createElement("a-sphere");
    circle.setAttribute("color","white");
    circle.setAttribute("position","0 1.5 0");
    circle.setAttribute("radius","0.25");
    this.obj.append( circle );
    
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
}
