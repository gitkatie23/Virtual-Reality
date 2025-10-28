class rocket{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let box = document.createElement("a-box");
    box.setAttribute("color","red");
    box.setAttribute("position","0 0 0");
    box.setAttribute("height","2");
    this.obj.append( box );
  
    let tube = document.createElement("a-cylinder");
    tube.setAttribute("position","0 0 0");
    tube.setAttribute("color","grey");
    tube.setAttribute("radius","0.25");
    this.obj.append( tube );

    let top = document.createElement("a-cone");
    top.setAttribute("color","red");
    top.setAttribute("position","0 5 0");
    top.setAttribute("height","2");
    this.obj.append( top );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }