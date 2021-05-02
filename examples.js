//
// examples.js
//

function hyperbolicParaboloid(x,y) {return (x*x - y*y);}

function ellipticParaboloid(x,y) {return (x*x + y*y);}

function projectU(u, v) {return u;}
function projectV(u, v) {return v;}

let gridRange = [-gridCount, gridCount];
let circleRange = [0, 2*PI];


class ZSurface {
    constructor(zFunction, xMin, xMax, yMin, yMax) {
        console.log(arguments);

        this.xFunction = projectU;
        this.yFunction = projectV;
        this.zFunction = zFunction;

        if (xMin in arguments) {
            this.uRange = [xMin, xMax];
        }
        else {
            this.uRange = gridRange;
        }

        if (yMin in arguments) {
            this.vRange = [yMin, yMax];
        }
        else {
            this.vRange = gridRange;
        }
    }
}

let surfaceHyperbolicParaboloid = new ZSurface(hyperbolicParaboloid);
let surfaceEllipticParaboloid = new ZSurface(ellipticParaboloid);
let surfacePlane = new ZSurface(z => 4);


class Torus {
    constructor(centerX, centerY, centerZ, a, b) {
        this.xFunction = function(u,v) {return centerX + (a + b*cos(v))*cos(u);}
        this.yFunction = function(u,v) {return centerY + (a + b*cos(v))*sin(u);}
        this.zFunction = function(u,v) {return centerZ + b*sin(v);}
        this.uRange = circleRange;
        this.vRange = circleRange;
    }
}

let surfaceTorus = new Torus(0, 0, 0, 5, 1);


function initializeSurfaces()
{
    let torus = new Torus(3, 3, 0, 2, 1);
    torus.stroke = color(0, 255, 0);
    surfaces.push(torus);

    torus = new Torus(-3, -3, 0, 2, 1);
    torus.stroke = color(0, 0, 255);
    surfaces.push(torus);
}


let defaultUserCode = `
surfaces = [];

for (let j=0; j<5; j++) {
  surfaces.push(new Torus(j, j, j, 1, .5));
  surfaces[j].stroke = color(0, 255*(5-j)/5, 255*(j+1)/5);
}


//surfaces.push(surfaceEllipticParaboloid);
surfaces.push(new ZSurface(ellipticParaboloid));
surfaceEllipticParaboloid.stroke = color(0, 255, 0);

let leftEye = {
    xFunction: (u,v)=>3*sin(u)*cos(v),
    yFunction: (u,v)=>-3 + 3*sin(u)*sin(v),
    zFunction: (u,v)=>3 + 3*cos(u),
    uRange: [0, 2*PI],
    vRange: [0, 2*PI],
    stroke: color(255, 0, 0)
};

surfaces.push(leftEye);
`;

const exampleSimpleFace = `// exampleSimpleFace

surfaces = [];

let leftEye = {
    xFunction: (u,v)=>u,
    yFunction: (u,v)=>v,
    zFunction: (u,v)=>0,
    uRange: [-7, -3],
    vRange: [-7, -3],
    stroke: color(255, 0, 0)
};

surfaces.push(leftEye);

let rightEye = {
    xFunction: (u,v)=>u,
    yFunction: (u,v)=>v,
    zFunction: (u,v)=>0,
    uRange: [-7, -3],
    vRange: [3, 7],
    stroke: color(255, 0, 0)
};

surfaces.push(rightEye);

let mouth = {
    xFunction: (u,v)=>u,
    yFunction: (u,v)=>v,
    zFunction: (u,v)=>0,
    uRange: [3, 7],
    vRange: [-5, 5],
    stroke: color(255, 0, 0)
};

surfaces.push(mouth);
`;


const exampleSphereFace = `// exampleSphereFace

surfaces = [];

let leftEye = {
    xFunction: (u,v)=>3*sin(u)*cos(v),
    yFunction: (u,v)=>-5 + 3*sin(u)*sin(v),
    zFunction: (u,v)=>5 + 3*cos(u),
    uRange: [0, 2*PI],
    vRange: [0, 2*PI],
    stroke: color(0, 255, 0)
};

surfaces.push(leftEye);

let rightEye = {
    xFunction: (u,v)=>3*sin(u)*cos(v),
    yFunction: (u,v)=>5 + 3*sin(u)*sin(v),
    zFunction: (u,v)=>5 + 3*cos(u),
    uRange: [0, 2*PI],
    vRange: [0, 2*PI],
    stroke: color(0, 255, 0)
};

surfaces.push(rightEye);

let mouth = {
    xFunction: (u,v)=>2*sin(v),
    yFunction: (u,v)=>(9 + 2*cos(v))*cos(u),
    zFunction: (u,v)=>(9 + 2*cos(v))*sin(u),
    uRange: [PI, 2*PI],
    vRange: [0, 2*PI],
    stroke: color(0, 255, 0)
};

surfaces.push(mouth);
`;

const examples = [
    {name: "simple face", code: exampleSimpleFace},
    {name: "sphere face", code: exampleSphereFace}
];


