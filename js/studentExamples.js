//
// studentExamples.js
//

const exampleDelia22 = `// Delia '22

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

let pencil = {
    xFunction: (u, v)=> cos(v),
    yFunction: (u, v)=> sin(v),
    zFunction: (u, v) =>u,
    uRange: [0,15],
    vRange: [0,2*PI],
    stroke: [237, 164, 55],
  fill: [237, 164, 55],
    sampleCount: 20,
   texture: "yellow"
};

surfaces.push(pencil);

;
 
let tip = {
  xFunction: (u,v)=> .17*u*cos(v),
  yFunction: (u,v)=> .17*u*sin(v),
    zFunction: (u,v)=> -.3*u +16.75,
uRange: [0, 2*PI],
    vRange: [0, 2*PI],
    stroke: [200, 200, 255],
  texture: "fur1"

};

surfaces.push(tip)

`; // Delia '22


const exampleAva22 = `// Ava '22

let mouth = {
    zFunction: (u,v)=>.1*sin(v),
    xFunction: (u,v)=>(12 + .1*cos(v))*cos(u),
    yFunction: (u,v)=>(12 + .1*cos(v))*sin(u),
    uRange: [0, 2*PI],
    vRange: [0, 2*PI],
    stroke: [0, 0, 255],
    sampleCount: 20,
    fill: [255, 0, 255],
    texture: "snow",
};

surfaces.push(mouth);

let o5 = {
    zFunction: (u,v)=>.1*sin(v),
    xFunction: (u,v)=>(15.5 + .1*cos(v))*cos(u),
    yFunction: (u,v)=>(15.5 + .1*cos(v))*sin(u),
    uRange: [0, 2*PI],
    vRange: [0, 2*PI],
    stroke: [0, 0, 255],
    sampleCount: 20,
    fill: [255, 0, 255],
    texture: "snow",
};

surfaces.push(o5);

let o1 = {
    zFunction: (u,v)=>.1*sin(v),
    xFunction: (u,v)=>(10 + .1*cos(v))*cos(u),
    yFunction: (u,v)=>(10 + .1*cos(v))*sin(u),
    uRange: [0, 2*PI],
    vRange: [0, 2*PI],
    stroke: [0, 0, 255],
    sampleCount: 20,
    fill: [255, 0, 255],
    texture: "snow",
};

surfaces.push(o1);

let o2 = {
    zFunction: (u,v)=>.1*sin(v),
    xFunction: (u,v)=>(8 + .1*cos(v))*cos(u),
    yFunction: (u,v)=>(8 + .1*cos(v))*sin(u),
    uRange: [0, 2*PI],
    vRange: [0, 2*PI],
    stroke: [0, 0, 255],
    sampleCount: 20,
    fill: [255, 0, 255],
    texture: "snow",
};

surfaces.push(o2);
let sphere1 = {
    xFunction: (u,v)=>2.5*sin(u)*cos(v),
    yFunction: (u,v)=>2.5*sin(u)*sin(v),
    zFunction: (u,v)=>2.5*cos(u),
    uRange: [0, PI],
    vRange: [0, 2*PI],
    stroke: [255, 255, 0],
    fill: [255, 255, 0],
    sampleCount: 20,
   
};

surfaces.push(sphere1);

let sphere2 = {
    xFunction: (u,v)=>8.5 + sin(u)*cos(v),
    yFunction: (u,v)=>8 + sin(u)*sin(v),
    zFunction: (u,v)=>cos(u),
    uRange: [0, PI],
    vRange: [0, 2*PI],
    stroke: [0, 255, 0],
    fill: 200,
    sampleCount: 20,
    texture: "earth",
};

surfaces.push(sphere2);

let sphere3 = {
    xFunction: (u,v)=>.7*sin(u)*cos(v),
    yFunction: (u,v)=>8 + .7*sin(u)*sin(v),
    zFunction: (u,v)=>.7*cos(u),
    uRange: [0, PI],
    vRange: [0, 2*PI],
    stroke: [205, 187, 170],
    fill: [205, 187, 170],
    sampleCount: 20,
   
};

surfaces.push(sphere3);

let sphere5 = {
    xFunction: (u,v)=>-15.5 + sin(u)*cos(v),
    yFunction: (u,v)=>sin(u)*sin(v),
    zFunction: (u,v)=>cos(u),
    uRange: [0, PI],
    vRange: [0, 2*PI],
    stroke: [149, 45, 35],
    fill: [149, 45, 35],
    sampleCount: 20,
   
};

surfaces.push(sphere5);

let sphere6 = {
    xFunction: (u,v)=>.8*sin(u)*cos(v),
    yFunction: (u,v)=> -10 + .8*sin(u)*sin(v),
    zFunction: (u,v)=>.8*cos(u),
    uRange: [0, PI],
    vRange: [0, 2*PI],
    stroke: [215, 108, 42],
    fill: [215, 108, 42],
    sampleCount: 20,
   
};

surfaces.push(sphere6);


`; // Ava '22

const exampleCharlotte22 = `// Charlotte '22

let xyPlane = {

    xFunction: (x,y)=>x,

    yFunction: (x,y)=>y,

    zFunction: (x,y)=>0,    // z = 0

    uRange: [-20, 20],

    vRange: [-20, 20],

    stroke: 128,

    sampleCount: 20,

  	texture: "snow"

};



// add your surface to the list of surfaces



surfaces.push(xyPlane);



// add more!



let bottomSphere = {

    xFunction: (p,t)=>9*sin(p)*cos(t),

    yFunction: (p,t)=>9*sin(p)*sin(t),

    zFunction: (p,t) => 7+9*cos(p),

    uRange: [0, 0.75*PI],

    vRange: [0, 2*PI],

    fill: [0, 0, 255]

};



surfaces.push(bottomSphere);





let middleSphere = {

    xFunction: (p,t)=>6*sin(p)*cos(t),

    yFunction: (p,t)=>6*sin(p)*sin(t),

    zFunction: (p,t) => 20+6*cos(p),

    uRange: [0, PI],

    vRange: [0, 2*PI],

    fill: [0, 0, 155]

};



surfaces.push(middleSphere);





let topSphere = {

    xFunction: (p,t)=>4*sin(p)*cos(t),

    yFunction: (p,t)=>4*sin(p)*sin(t),

    zFunction: (p,t) => 28+4*cos(p),

    uRange: [0, PI],

    vRange: [0, 2*PI],

    fill: [0, 0, 55]

};



surfaces.push(topSphere);





let topHat = {

    xFunction: (u,v)=>3*cos(u),

    yFunction: (u,v)=>3*sin(u),

    zFunction: (u,v) => 7+v,

    uRange: [0, 2*PI],

    vRange: [25, 30],

    fill: [250, 250, 250]

};



surfaces.push(topHat);



let brim = {

    xFunction: (u,v)=>7*cos(u),

    yFunction: (u,v)=>7*sin(u),

    zFunction: (u,v) => 7+v,

    uRange: [0, 2*PI],

    vRange: [24, 25],

    fill: [250, 250, 250]

};



surfaces.push(brim);



let button1 = {

    xFunction: (p,t)=>6+1*sin(p)*cos(t),

    yFunction: (p,t)=>1*sin(p)*sin(t),

    zFunction: (p,t) => 21+1*cos(p),

    uRange: [0, PI],

    vRange: [0, 2*PI],

    fill: [0, 0, 0]

};



surfaces.push(button1);





let button2 = {

    xFunction: (p,t)=>6+1*sin(p)*cos(t),

    yFunction: (p,t)=>1*sin(p)*sin(t),

    zFunction: (p,t) => 18+1*cos(p),

    uRange: [0, PI],

    vRange: [0, 2*PI],

    fill: [0, 0, 0]

};



surfaces.push(button2);





let hatTop = {

    xFunction: (u,v)=>u*cos(v),

    yFunction: (u,v)=>u*sin(v),

    zFunction: (u,v) => 37,

    uRange: [0, 3],

    vRange: [0, 2*PI],

    fill: [255, 255, 255]

};



surfaces.push(hatTop);





let brimTop = {

    xFunction: (u,v)=>u*cos(v),

    yFunction: (u,v)=>u*sin(v),

    zFunction: (u,v) => 32,

    uRange: [0, 7],

    vRange: [0, 2*PI],

    fill: [255, 255, 255]

};

surfaces.push(brimTop);

`; // Charlotte '22

const exampleHannah22 = `// Hannah '22

let xyPlane = {
    xFunction: (x,y)=>x,
    yFunction: (x,y)=>y,
    zFunction: (x,y)=>0,    // z = 0
    uRange: [-10, 10],
    vRange: [-10, 10],
    stroke: 128,
    sampleCount: 20
};

// add your surface to the list of surfaces

surfaces.push(xyPlane);

let handle = {
    xFunction: (u,v)=>.2*sin(v),
    yFunction: (u,v)=>2.7+(1 + .3*cos(v))*cos(u),
    zFunction: (u,v)=>13+(1 + .3*cos(v))*sin(u),
    uRange: [3*PI/2, 5*PI/2],
    vRange: [0, 2*PI],
    stroke: [59, 56, 53],
    sampleCount: 20,
    fill: [59, 56, 53],
};

surfaces.push(handle);

let bottle = {
    xFunction: (u, v)=> 3*cos(v),
    yFunction: (u, v)=> 3*sin(v),
    zFunction: (u, v) =>  u,
    uRange: [0,12],
    vRange: [0,5*PI],
    stroke: [240, 103, 149],
  fill: [240, 103, 149],
    sampleCount: 40,
};

surfaces.push(bottle);

let base = {
    xFunction: (u, v)=> 3.2*cos(v),
    yFunction: (u, v)=> 3.2*sin(v),
    zFunction: (u, v) =>  u,
    uRange: [0,3],
    vRange: [0,5*PI],
    stroke: [250, 151, 45],
  fill: [250, 151, 45],
    sampleCount: 40,
};

surfaces.push(base);

let top1 = {
    xFunction: (u, v)=> 2.9*cos(v),
    yFunction: (u, v)=> 2.9*sin(v),
    zFunction: (u, v) =>  u,
    uRange: [12,13],
    vRange: [0,5*PI],
    stroke: [240, 103, 149],
  fill: [40, 103, 149],
    sampleCount: 40,
};

surfaces.push(top1);

let top2 = {
    xFunction: (u, v)=> 2.7*cos(v),
    yFunction: (u, v)=> 2.7*sin(v),
    zFunction: (u, v) =>  u,
    uRange: [13,15],
    vRange: [0,5*PI],
    stroke: [153, 149, 145],
  fill: [153, 149, 145],
    sampleCount: 40,
};

surfaces.push(top2);

let top3 = {
    xFunction: (u, v)=> 2*cos(v),
    yFunction: (u, v)=> 2*sin(v),
    zFunction: (u, v) =>  u,
    uRange: [15,17],
    vRange: [0,5*PI],
    stroke: [59, 56, 53],
  fill: [59, 56, 53],
    sampleCount: 40,
};

surfaces.push(top3);

let straw = {
    xFunction: (u, v)=> .3*cos(v)-1,
    yFunction: (u, v)=> .3*sin(v)-1,
    zFunction: (u, v) =>  u,
    uRange: [17,21],
    vRange: [0,5*PI],
    stroke: [59, 56, 53],
  fill: [59, 56, 53],
    sampleCount: 40,
};

surfaces.push(straw);

`; // Hannah '22

const exampleLayla22 = `// Layla '22

let xyPlane = {
    xFunction: (x,y)=>x,
    yFunction: (x,y)=>y,
    zFunction: (x,y)=>0,    // z = 0
    uRange: [-10, 10],
    vRange: [-10, 10],
    stroke: 128,
    sampleCount: 20
};

// add your surface to the list of surfaces

surfaces.push(xyPlane);

// add more!

let floor = {
    xFunction: (x,y)=>x,
    yFunction: (x,y)=>y,
    zFunction: (x,y) => 0,
    uRange: [-10, 10],
    vRange: [-10, 10],
    stroke: [30, 200, 35],
    sampleCount: 20
};

surfaces.push(floor);


let sun = {
    xFunction: (u,v)=>3*sin(u)*cos(v),
    yFunction: (u,v)=>5 + 3*sin(u)*sin(v),
    zFunction: (u,v)=>10 + 3*cos(u),
    uRange: [0, PI],
    vRange: [0, 2*PI],
    stroke: [200, 200, 0],
    fill: [200,200,0],
    sampleCount: 20,
};

surfaces.push(sun);

let treeStump1 = {
    xFunction: (u,v)=>0.8*cos(u),
    yFunction: (u,v)=>0.8*sin(u),
    zFunction: (u,v)=>v,
    uRange: [0, 2*PI],
    vRange: [0, 5],
    stroke: [153, 102, 51],
    fill: [153, 102, 51],
    sampleCount: 20,
};

surfaces.push(treeStump1);


let treeLeaves1 = {
    xFunction: (u,v)=>2*sin(u)*cos(v),
    yFunction: (u,v)=>2*sin(u)*sin(v),
    zFunction: (u,v)=>5 + 2*cos(u),
    uRange: [0, PI],
    vRange: [0, 2*PI],
    stroke: [255, 153, 0],
    fill: [255, 153, 0],
    sampleCount: 20,
};

surfaces.push(treeLeaves1);

let treeStump2 = {
    xFunction: (u,v)=>5+0.8*cos(u),
    yFunction: (u,v)=>2+0.8*sin(u),
    zFunction: (u,v)=>v,
    uRange: [0, 2*PI],
    vRange: [0, 5],
    stroke: [102, 51, 0],
    fill: [102, 51, 0],
    sampleCount: 20,
};

surfaces.push(treeStump2);


let treeLeaves2 = {
    xFunction: (u,v)=>5+2*sin(u)*cos(v),
    yFunction: (u,v)=>2+2*sin(u)*sin(v),
    zFunction: (u,v)=>5 + 2*cos(u),
    uRange: [0, PI],
    vRange: [0, 2*PI],
    stroke: [0, 128, 0],
    fill: [0, 128, 0],
    sampleCount: 20,
};

surfaces.push(treeLeaves2);


let treeStump3 = {
    xFunction: (u,v)=>-6+0.8*cos(u),
    yFunction: (u,v)=>3+0.8*sin(u),
    zFunction: (u,v)=>v,
    uRange: [0, 2*PI],
    vRange: [0, 5],
    stroke: [153, 102, 51],
    fill: [153, 102, 51],
    sampleCount: 20,
};

surfaces.push(treeStump3);


let treeLeaves3 = {
    xFunction: (u,v)=>-6+2*sin(u)*cos(v),
    yFunction: (u,v)=>3+2*sin(u)*sin(v),
    zFunction: (u,v)=>5 + 2*cos(u),
    uRange: [0, PI],
    vRange: [0, 2*PI],
    stroke: [255, 102, 0],
    fill: [255, 102, 0],
    sampleCount: 20,
};

surfaces.push(treeLeaves3);


let treeStump4 = {
    xFunction: (u,v)=>3+0.8*cos(u),
    yFunction: (u,v)=>-7+0.8*sin(u),
    zFunction: (u,v)=>v,
    uRange: [0, 2*PI],
    vRange: [0, 5],
    stroke: [102, 51, 0],
    fill: [102, 51, 0],
    sampleCount: 20,
};


surfaces.push(treeStump4);


let treeLeaves4 = {
    xFunction: (u,v)=>3+2*sin(u)*cos(v),
    yFunction: (u,v)=>-7+2*sin(u)*sin(v),
    zFunction: (u,v)=>5 + 2*cos(u),
    uRange: [0, PI],
    vRange: [0, 2*PI],
    stroke: [153, 0, 0],
    fill: [153, 0, 0],
    sampleCount: 20,
};

surfaces.push(treeLeaves4);

let treeStump5 = {
    xFunction: (u,v)=>-5+0.8*cos(u),
    yFunction: (u,v)=>-4+0.8*sin(u),
    zFunction: (u,v)=>v,
    uRange: [0, 2*PI],
    vRange: [0, 5],
    stroke: [102, 51, 0],
    fill: [102, 51, 0],
    sampleCount: 20,
};

surfaces.push(treeStump5);


let treeLeaves5 = {
    xFunction: (u,v)=>-5+2*sin(u)*cos(v),
    yFunction: (u,v)=>-4+2*sin(u)*sin(v),
    zFunction: (u,v)=>5 + 2*cos(u),
    uRange: [0, PI],
    vRange: [0, 2*PI],
    stroke: [0, 153, 51],
    fill: [0, 153, 51],
    sampleCount: 20,
};

surfaces.push(treeLeaves5);
`; // Layla '22



const exampleShine22 = `// Shine '22

let xyPlane = {
    xFunction: (x,y)=>x,
    yFunction: (x,y)=>y,
    zFunction: (x,y)=>0,    // z = 0
    uRange: [-10, 10],
    vRange: [-10, 10],
    stroke: 128,
    sampleCount: 20
};

// add your surface to the list of surfaces

surfaces.push(xyPlane);

// add more!

let icecream = {
  xFunction: (u,v)=>3.5*sin(v)*cos(u),
  yFunction: (u,v)=>3.5*sin(v)*sin(u),
  zFunction: (u,v)=>11.5 - 3.5*cos(v),
    uRange: [0, 2*PI],
    vRange: [0, PI],
    stroke: [149, 232, 163],
  sampleCount: 40
};

surfaces.push(icecream);

let cone = {
    xFunction: (u,v)=>0.6*u*cos(v),
    yFunction: (u,v)=>0.6*u*sin(v),
    zFunction: (u,v) => 1.7*u,
    uRange: [0, 2*PI],
    vRange: [0, 2*PI],
    stroke: [231, 181, 106],
    sampleCount: 50
};

surfaces.push(cone);
`; // Shine '22


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


const exampleAva = `// Ava W '22

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

let pringle = {
    xFunction: (x,y)=>x,
    yFunction: (x,y)=>y,
    zFunction: (x,y) => x*x - y*y,
    uRange: [-2, 2],
    vRange: [-2, 2],
    fill: [255, 0, 255],
  sampleCount: 20
};

surfaces.push(pringle);

let cone = {
    xFunction: (x,y)=>x,
    yFunction: (x,y)=>y,
    zFunction: (x,y) => sqrt (x*x + y*y),
    uRange: [-3, 3],
    vRange: [-3, 3],
    stroke: [255, 0, 255],
    sampleCount: 20
};

surfaces.push(cone);

let bigSphere = {
    xFunction: (u,v)=>3*sin(v)*cos(u),
    yFunction: (u,v)=> 3*sin(v)*sin(u),
    zFunction: (u,v)=> 6 - 3*cos(v),
    uRange: [0, 2*PI],
    vRange: [0, PI],
    stroke: [255, 0, 0],
    texture: "marble"
};

surfaces.push(bigSphere);

let mediumSphere = {
    xFunction: (u,v)=>2*sin(v)*cos(u),
    yFunction: (u,v)=> 2*sin(v)*sin(u),
    zFunction: (u,v)=>10 - 2*cos(v),
    uRange: [0, 2*PI],
    vRange: [0, PI],
    stroke: [255, 0, 0],
    texture: "marble"
};

surfaces.push(mediumSphere);

let smallSphere = {
    xFunction: (u,v)=> sin(v)*cos(u),
    yFunction: (u,v)=> sin(v)*sin(u),
    zFunction: (u,v)=> 12.5 - cos(v),
    uRange: [0, 2*PI],
    vRange: [0, PI],
    stroke: [255, 0, 0],
    texture: "marble"
};

surfaces.push(smallSphere);

let helicoid = {
    xFunction: (u,v)=>u*cos(v),
    yFunction: (u,v)=>u*sin(v),
    zFunction: (u,v)=>v,
    uRange: [0,10],
    vRange: [0,2*PI],
    stroke: 255,
    fill: [255, 0, 0],
    sampleCount: 20,
    texture: "marble"
};

surfaces.push(helicoid);
`; // Ava W


const studentExamples = [
    {name: "---", code: exampleHello},
    {name: "Ava L '22", code: exampleAva22},
    {name: "Charlotte '22", code: exampleCharlotte22},
    {name: "Delia '22", code: exampleDelia22},
    {name: "Hannah '22", code: exampleHannah22},
    {name: "Layla '22", code: exampleLayla22},
    {name: "Shine '22", code: exampleShine22},
    {name: "---", code: exampleHello},
    {name: "Ellie '21", code: exampleEllie},
    {name: "Anjali '21", code: exampleAnjali},
    {name: "Sidney '21", code: exampleSidney},
    {name: "Catherine '21", code: exampleCatherine},
    {name: "Ava W '22", code: exampleAva},
];



