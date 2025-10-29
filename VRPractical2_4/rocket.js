class rocket{
  constructor(x,z){
    this.a = 0;
    this.da = 1;
    
    this.obj = document.createElement("a-entity")
    for(let i = 0; i < 3; i++){
      let body = document.createElement("a-cylinder");
      body.setAttribute("position",{x:0,y:0.5 + 1.5 * i,z:0});
      body.setAttribute("radius",1.25 - 0.20 * i);
      this.obj.append(body)
    }
    for(let i = 0; i < 2; i++){
      let top = document.createElement("a-cylinder);
      top.setAttribute("position",{x:-0.25 + 0.50 * i,y:3.5,z:0.85});
      top.setAttribute("height",2);
      top.setAttribute("color","yellow")
      this.obj.append(top)
    }
    
    this.obj.setAttribute("position",{x:x,y:0,z:z});
    scene.append(this.obj);
  }

  }
