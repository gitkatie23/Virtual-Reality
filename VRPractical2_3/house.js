class house{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let room = document.createElement("a-box");
    room.setAttribute("color","white");
    room.setAttribute("position","1 1.5 1");
    room.setAttribute("height","3");
    this.obj.append(room);

    let wall = document.createElement("a-box");
    wall.setAttribute("color","white");
    wall.setAttribute("position","0 1.5 0");
    wall.setAttribute("height","10");

    this.obj.append(wall);
      
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  
}
}