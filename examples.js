//
// examples.js
//


const exampleHello = `// hello

// clear the list of surfaces

surfaces = [];

// Define each surface by its parametric equations
//   x(u,v), y(u,v), z(u,v). 
// and the limits for u and v.

// If your surface is of the form z=f(x,y), you can let x=u and y=v.

// Optional: 
//  'stroke' is the outline color, greyscale value or color triple [R, G, B] (0-255).  
//  'fill' is the fill color, greyscale value or color triple [R, G, B] (0-255).  
//  'sampleCount' is the number of subdivisions along each segment
//
// You can call your surface (almost) anything you like.  This one is called
// 'xyPlane'.
//

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

let square = {
    xFunction: (x,y)=>x,
    yFunction: (x,y)=>y,
    zFunction: (x,y) => -3,
    uRange: [-1, 1],
    vRange: [-1, 1],
    fill: [0, 255, 0]
};

surfaces.push(square);

let paraboloid = {
    xFunction: (x,y)=>x,
    yFunction: (x,y)=>y,
    zFunction: (x,y) => x*x + y*y,
    uRange: [-3, 3],
    vRange: [-3, 3],
    stroke: [0, 0, 255],
    sampleCount: 20
};

surfaces.push(paraboloid);

`;


initializeSurfaces = new Function(exampleHello);


const exampleSimpleFace = `// simple face

surfaces = [];

let leftEye = {
    xFunction: (x,y)=>x,
    yFunction: (x,y)=>y,
    zFunction: (x,y)=>0,
    uRange: [-7, -3],
    vRange: [-7, -3],
    stroke: [255, 0, 0]
};

surfaces.push(leftEye);

let rightEye = {
    xFunction: (x,y)=>x,
    yFunction: (x,y)=>y,
    zFunction: (x,y)=>0,
    uRange: [-7, -3],
    vRange: [3, 7],
    stroke: [0, 255, 0]
};

surfaces.push(rightEye);

let mouth = {
    xFunction: (x,y)=>x,
    yFunction: (x,y)=>y,
    zFunction: (x,y)=>0,
    uRange: [3, 7],
    vRange: [-5, 5],
    stroke: [0, 0, 255],
    fill: 200
};

surfaces.push(mouth);
`;


const exampleSphereFace = `// sphere face

surfaces = [];

let leftEye = {
    xFunction: (u,v)=>3*sin(u)*cos(v),
    yFunction: (u,v)=>-5 + 3*sin(u)*sin(v),
    zFunction: (u,v)=>5 + 3*cos(u),
    uRange: [0, PI],
    vRange: [0, 2*PI],
    stroke: [255, 0, 0]
};

surfaces.push(leftEye);

let rightEye = {
    xFunction: (u,v)=>3*sin(u)*cos(v),
    yFunction: (u,v)=>5 + 3*sin(u)*sin(v),
    zFunction: (u,v)=>5 + 3*cos(u),
    uRange: [0, PI],
    vRange: [0, 2*PI],
    stroke: [0, 255, 0], 
    fill: 200,
    sampleCount: 20
};

surfaces.push(rightEye);

let mouth = {
    xFunction: (u,v)=>2*sin(v),
    yFunction: (u,v)=>(9 + 2*cos(v))*cos(u),
    zFunction: (u,v)=>(9 + 2*cos(v))*sin(u),
    uRange: [PI, 2*PI],
    vRange: [0, 2*PI],
    stroke: [0, 0, 255],
    sampleCount: 20,
    fill: [255, 0, 255]
};

surfaces.push(mouth);
`;


const exampleClass = `
class Torus {
    constructor(centerX, centerY, centerZ, a, b) {
        this.xFunction = (u,v) => centerX + (a + b*cos(v))*cos(u);
        this.yFunction = (u,v) => centerY + (a + b*cos(v))*sin(u);
        this.zFunction = (u,v) => centerZ + b*sin(v);
        this.uRange = [0,2*PI];
        this.vRange = [0,2*PI];
        this.sampleCount = 15;
    }
}

surfaces = [];

for (let x=-10; x<=10; x+=2)
{
    let torus = new Torus(x, x, x, 2, 1);
    torus.fill = [0, 255 - 255*(x+10)/20, 255*(x+10)/20];
    surfaces.push(torus);
}
`


const examples = [
    {name: "hello", code: exampleHello},
    {name: "simple face", code: exampleSimpleFace},
    {name: "sphere face", code: exampleSphereFace},
    {name: "class", code: exampleClass}
];


