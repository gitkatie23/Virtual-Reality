
class enemy{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.01;
  
    this.obj = document.createElement("a-cone");
    this.obj.setAttribute("height",2);
    this.obj.setAttribute("radius-bottom",0.25);
    this.obj.setAttribute("color","red");
    this.obj.setAttribute("position",{x:this.x, y:this.y, z: this.z})
    scene.append(this.obj);
  } 
}