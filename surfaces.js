function hyperbolicParaboloid(x,y) {return (x*x - y*y);}

function ellipticParaboloid(x,y) {return (x*x + y*y);}

function projectU(u, v) {return u;}
function projectV(u, v) {return v;}

let gridCount = 7;
let gridRange = {min:-gridCount, max:gridCount};
let circleRange = {min:0, max:2*Math.PI};


class ZSurface {
    constructor(zFunction, xMin, xMax, yMin, yMax) {
        console.log(arguments);

        this.xFunction = projectU;
        this.yFunction = projectV;
        this.zFunction = zFunction;

        if (xMin in arguments) {
            this.uRange = {min:xMin, max:xMax};
        }
        else {
            this.uRange = gridRange;
        }

        if (yMin in arguments) {
            this.vRange = {min:yMin, max:yMax};
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
    constructor(x, y, z, a, b) {
        this.xFunction = function(u,v) {return x + (a + b*Math.cos(v))*Math.cos(u);}
        this.yFunction = function(u,v) {return y + (a + b*Math.cos(v))*Math.sin(u);}
        this.zFunction = function(u,v) {return z + b*Math.sin(v);}
        this.uRange = circleRange;
        this.vRange = circleRange;
    }
}

let surfaceTorus = new Torus(0, 0, 0, 5, 1);



let rangeMax;
let gridSize;

let currentSurface = surfaceEllipticParaboloid;


function setup() 
{ 
    createCanvas(800, 800, WEBGL);

    let cam = createEasyCam();
    cam.rotateY(PI/12);
    cam.rotateX(PI/6);
    document.oncontextmenu = function() { return false; }

    rangeMax = width/6.;
    gridSize = rangeMax/gridCount;

    console.log("rangeMax:" + rangeMax);

    currentSurface.stroke = color(255, 0, 0);
} 

function draw(){
    background(0);
   
    initialTransformation();
    drawXYplane();
    drawAxes();
    drawSurface(currentSurface);
}


function initialTransformation()
{
    rotateX(PI/2);
    rotateZ(PI/2);
    scale(1, -1, 1);
}


function drawAxes()
{
    strokeWeight(3);

    stroke(255);
    line(-rangeMax, 0, 0, 0, 0, 0);
    stroke(255, 0, 0);
    line(0, 0, 0, rangeMax, 0, 0);

    stroke(255);
    line(0, -rangeMax, 0, 0, 0, 0);
    stroke(0, 255, 0);
    line(0, 0, 0, 0, rangeMax, 0);

    stroke(255);
    line(0, 0, -rangeMax, 0, 0, 0);
    stroke(0, 0, 255);
    line(0, 0, 0, 0, 0, rangeMax);
}

function drawXYplane()
{
    stroke(200, 200);
    for (let i=-gridCount; i<=gridCount; i++)
    {
        if (i==0) continue;
        let x = rangeMax * i / gridCount;
        line(x, -rangeMax, 0, x, rangeMax, 0);        
    }

    for (let i=-gridCount; i<=gridCount; i++)
    {
        if (i==0) continue;
        let y = rangeMax * i / gridCount;
        line(-rangeMax, y, 0, rangeMax, y, 0);        
    }
}


function indexIntoRange(i, n, range) { return range.min + i*(range.max-range.min)/n; }


function drawLineSegments(sampleCount, range, uFunction, vFunction, xFunction, yFunction, zFunction)
{
    let parameter = j => indexIntoRange(j, sampleCount, range);

    beginShape();
    for (let j=0; j<=sampleCount; j++)
    {
        let t = parameter(j);
        let u = uFunction(t);
        let v = vFunction(t);
        let x = xFunction(u, v)*gridSize;
        let y = yFunction(u, v)*gridSize;
        let z = zFunction(u, v)*gridSize;
        vertex(x, y, z);
    }
    endShape();
}


function drawSurface(surface)
{
    stroke(0, 0, 255);
    stroke('stroke' in surface ? surface.stroke: 0xffffff);
    strokeWeight(1);
    noFill();

    let sampleCount = 40;

    for (let i=0; i<=sampleCount; i++)
    {
        let u = indexIntoRange(i, sampleCount, surface.uRange);
        let uFunction = t => u; // const
        let vFunction = t => t; // identity

        drawLineSegments(sampleCount, surface.vRange, 
                         uFunction, vFunction, 
                         surface.xFunction, surface.yFunction, surface.zFunction);
    }

    for (let i=0; i<=sampleCount; i++)
    {
        let v = indexIntoRange(i, sampleCount, surface.vRange);
        let vFunction = t => v; // const
        let uFunction = t => t; // identity

        drawLineSegments(sampleCount, surface.uRange, 
                         uFunction, vFunction, 
                         surface.xFunction, surface.yFunction, surface.zFunction);
    }
}


function keyPressed()
{
    if (key == 'h')
    {
        currentSurface = surfaceHyperbolicParaboloid;
    }
    else if (key == 'e')
    {
        currentSurface = surfaceEllipticParaboloid;
    }
    else if (key == 'p')
    {
        currentSurface = surfacePlane;
    }
    else if (key == 't')
    {
        currentSurface = surfaceTorus;
    }
    else if (key == 'r')
    {
        currentSurface.stroke = color(255, 0, 0);
    }
    else if (key == 'g')
    {
        currentSurface.stroke = color(0, 255, 00);
    }
    else if (key == 'b')
    {
        currentSurface.stroke = color(0, 0, 255);
    }
}


