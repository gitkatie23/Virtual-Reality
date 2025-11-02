// Get a reference to the actual <a-scene> element in the HTML
const scene = document.querySelector('a-scene');

class rocket {
  constructor(x, y, z) {
    this.obj = document.createElement("a-entity");

    let cone = document.createElement("a-cone");
    cone.setAttribute("color", "yellow");
    cone.setAttribute("position", "0 1.5 0");
    cone.setAttribute("height", "2");
    this.obj.append(cone);

    let body = document.createElement("a-cylinder");
    body.setAttribute("position", "0 0 0");
    body.setAttribute("color", "red");
    body.setAttribute("radius", "0.25");
    this.obj.append(body);

    this.obj.setAttribute("position", {
      x: x,
      y: y,
      z: z
    });
    // This will now work because 'scene' is defined
    scene.append(this.obj);
  }
  scale(size) {
    this.obj.setAttribute("scale", {
      x: size,
      y: size,
      z: size
    });
  }
}

// Example of how to use it (make sure you have A-Frame in your HTML):
// let myRocket = new rocket(0, 0, -5); 
// myRocket.scale(0.5); 
