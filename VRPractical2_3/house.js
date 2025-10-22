class house{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let wall = document.createElement("a-box");
    wall.setAttribute("color","white");
    wall.setAttribute("position","0 1.5 0");
    wall.setAttribute("height","2");
    this.obj.append( wall );

    let wall = document.createElement("a-box");
    wall.setAttribute("color","white");
    wall.setAttribute("position","0 1.5 0");
    wall.setAttribute("height","10");

    this.obj.append( wall );
      
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  
}