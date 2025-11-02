class rocket{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity")

 
      let cone = document.createElement("a-cone");
      cone.setAttribute("color","yellow")
      cone.setAttribute("position","0 1.5 0");
      cone.setAttribute("height","2");  
         this.obj.append( cone )
      
    let body = document.createElement("a-cylinder");
    body.setAttribute("position","0 0 0");
    body.setAttribute("color","red");
    body.setAttribute("radius","0.25");
    this.obj.append( body )
    
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
 scale(size){
    this.obj.setAttribute("scale",{x:size,y:size,z:size});
  }
}
  
