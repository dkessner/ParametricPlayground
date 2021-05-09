//
// studentExamples.js
//


const exampleEllie = `// Ellie '21

let xyPlane = {
    xFunction: (x,y)=>x,
    yFunction: (x,y)=>y,
    zFunction: (x,y)=>0,    // z = 0
    uRange: [-10, 10],
    vRange: [-10, 10],
    stroke: 128,
  fill: [165, 42, 42],
    sampleCount: 20,
  texture: "dirt"
};

// add your surface to the list of surfaces

surfaces.push(xyPlane);

// add more!

let paraboloid = {
    xFunction: (u, v)=> cos(v),
    yFunction: (u, v)=> sin(v),
    zFunction: (u, v) =>  u,
    uRange: [0,5],
    vRange: [0,2*PI],
    stroke: [0, 0, 255],
  fill: [255, 0, 0],
    sampleCount: 20,
  texture: "wood"
};

surfaces.push(paraboloid);

let treetwo = {
    xFunction: (u, v)=> cos(v)-7,
    yFunction: (u, v)=> sin(v),
    zFunction: (u, v) =>  u,
    uRange: [0,2],
    vRange: [0,2*PI],
    stroke: [0, 0, 255],
  fill: [255, 0, 0],
    sampleCount: 20,
  texture: "wood"
};

surfaces.push(treetwo);

let sphere = {
  xFunction: (u, v)=> 3*cos(v),
    yFunction: (u, v)=> 3*sin(v),
    zFunction: (u, v) =>  u,
    uRange: [5,11],
    vRange: [0,2*PI],
    stroke: [0, 240, 15],
  fill: [0, 255, 0],
    sampleCount: 20
};

surfaces.push(sphere);
`; // Ellie


const exampleAnjali = `// Anjali '21

let xyPlane = {
    xFunction: (x,y)=>x,
    yFunction: (x,y)=>y,
    zFunction: (x,y)=>0,    // z = 0
    uRange: [-10, 10],
    vRange: [-10, 10],
    stroke: 128,
    sampleCount: 20
};

surfaces.push(xyPlane);

let bottomsphere = {
xFunction: (u,v)=>5*sin(v)*cos(u),
  yFunction: (u,v)=>5*sin(v)*sin(u),
  zFunction: (u,v)=>4.5 - 5*cos(v),
    uRange: [0, 2*PI],
    vRange: [0, PI],
    stroke: [255, 0, 0],
    texture: "earth"
 
};

surfaces.push(bottomsphere);

let middlesphere = {
xFunction: (u,v)=>3.5*sin(v)*cos(u),
  yFunction: (u,v)=>3.5*sin(v)*sin(u),
  zFunction: (u,v)=>11.5 - 3.5*cos(v),
    uRange: [0, 2*PI],
    vRange: [0, PI],
    stroke: [255, 0, 0],
    texture: "earth"
 
};

surfaces.push(middlesphere);

let topsphere = {
xFunction: (u,v)=>2*sin(v)*cos(u),
  yFunction: (u,v)=>2*sin(v)*sin(u),
  zFunction: (u,v)=>16 - 2*cos(v),
    uRange: [0, 2*PI],
    vRange: [0, PI],
    stroke: [255, 0, 0],
    texture: "earth"
 
};

surfaces.push(topsphere);

let nose = {
  xFunction: (u,v)=>.2*u,
  yFunction: (u,v)=>4-sqrt(u*u+ v*v),
    zFunction: (u,v)=>16 + .2*v,
uRange: [-3, 3],
    vRange: [-3, 3],
    stroke: [0, 0, 255],
  texture: "fur1"

};

surfaces.push(nose);
`; // Anjali


const exampleSidney = `// Sidney '21

let xyPlane = {
    xFunction: (x,y)=>x,
    yFunction: (x,y)=>y,
    zFunction: (x,y)=>0,    // z = 0
    uRange: [-10, 10],
    vRange: [-10, 10],
    stroke: 128,
    sampleCount: 20
};

surfaces.push(xyPlane);

// class & loop

class Person {
    constructor(centerX, centerY, centerZ, a, b) {
        this.xFunction = (u,v) => centerX + 2*sin(u)*cos(v);
        this.yFunction = (u,v) => centerY + 2*sin(u)*sin(v);
        this.zFunction = (u,v) => centerZ + 2*cos(u);
        this.uRange = [0,PI];
        this.vRange = [0,2*PI];
        this.sampleCount = 15;
    }
}

let i = 0;

for (let theta=0; theta<=2*PI; theta+=(PI/8))
{
  for(let phi = 0; phi<=PI; phi+=(PI/8))
  {
    let person = new Person(15*cos(theta)*sin(phi), 15*sin(theta)*sin(phi), 15*cos(phi), 2, 1);
    person.fill = [0, 255*(i/128), 255*(i/16)];
    surfaces.push(person);
    i++;
  }
}
`; // Sidney


const exampleCatherine = `// Catherine '21

let xyPlane = {
    xFunction: (x,y)=>x,
    yFunction: (x,y)=>y,
    zFunction: (x,y)=>0,    // z = 0
    uRange: [-10, 10],
    vRange: [-10, 10],
    stroke: 128,
    sampleCount: 20
};
surfaces.push(xyPlane);

let a = 9;
let b = 3;

let torus = {
    xFunction: (u,v)=>(a+b*cos(v))*cos(u),
    yFunction: (u,v)=>(a+b*cos(v))*sin(u),
    zFunction: (u,v) => b*sin(v),
    uRange: [0, 2*PI],
    vRange: [0, 2*PI],
    stroke: [0, 0, 255],
    sampleCount: 20
};

surfaces.push(torus);

class Sphere {
    constructor(centerX, centerY, centerZ, r) {
        this.xFunction = (u,v) => centerX + sin(u)*cos(v);
        this.yFunction = (u,v) => centerY + sin(u)*sin(v);
        this.zFunction = (u,v) => centerZ + cos(u);
        this.uRange = [0,2*PI];
        this.vRange = [0,PI];
        this.sampleCount = 15;
    }
}
let n = 30;
let z = 3;
let d = 9;
for (let j = 0; j<10; j++)
{
  z+=1;
  for (let i=0; i<n; i++)
  {
      let x = d*cos(2*PI*(i/n));
      let y = d*sin(2*PI*(i/n));
      let sphere = new Sphere(x, y, z, 1);
      sphere.fill = [0, 255 - 255*(x+10)/20, 255*(x+10)/20];
      surfaces.push(sphere);
  }
  d-=1;
  n-=3;
}
`; // Catherine


const studentExamples = [
    {name: "hello", code: exampleHello},
    {name: "Ellie '21", code: exampleEllie},
    {name: "Anjali '21", code: exampleAnjali},
    {name: "Sidney '21", code: exampleSidney},
    {name: "Catherine '21", code: exampleCatherine},
];



