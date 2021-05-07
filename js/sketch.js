//
// sketch.js
//


let showAxes = true;

const gridCount = 10;
let rangeMax;
let gridSize;

let surfaces = [];

let textures = {};

function preload() {
    textures.fur1 = loadImage('assets/img/fur1.png');
    textures.fur2 = loadImage('assets/img/fur2.jpg');
    textures.wood = loadImage('assets/img/wood.jpg');
    textures.bark = loadImage('assets/img/bark.jpg');
    textures.marble = loadImage('assets/img/marble.jpg');
    textures.earth = loadImage('assets/img/earth.jpg');
    textures.juggling = loadImage('assets/img/juggling.jpg');
    textures.dirt = loadImage('assets/img/dirt.jpg');
//    textures.snow = loadImage('assets/img/snow.jpg');

    addValidTexturesListToExample();
}

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

    initializeSurfaces();
} 

function initializeSurfaces() {}

function draw(){
    background(0);
   
    initialTransformation();

    if (showAxes) drawAxes();

    ambientLight(200);
    pointLight(50, 50, 50, 0, 0, -200);

    for (surface of surfaces)
        drawSurfaceFilled(surface);
}

function keyPressed() {
    if (key == 'a')
        showAxes = !showAxes;
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


function indexIntoRange(i, n, range) { return range[0] + i*(range[1]-range[0])/n; }


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

    let sampleCount = 'sampleCount' in surface ? surface.sampleCount : 20;

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

function drawSurfaceFilled(surface)
{
    push();

    if ('stroke' in surface) {
        stroke(surface.stroke)
        strokeWeight(1);
    }
    else {
        noStroke();
    }

    if ('fill' in surface)
    {
        fill(surface.fill);
        specularMaterial(surface.fill);
    }
    else {
        noFill();
    }

    let sampleCount = 'sampleCount' in surface ? surface.sampleCount : 10;

    const x = surface.xFunction;
    const y = surface.yFunction;
    const z = surface.zFunction;

    let texU;
    let texV;

    if ('texture' in surface && surface.texture in textures) {
        let tex = textures[surface.texture];
        // functions to convert from our parameters (u,v) to texture coordinates (u,v)
        texU = u => map(u, surface.uRange[0], surface.uRange[1], 0, tex.width);
        texV = v => map(v, surface.vRange[0], surface.vRange[1], tex.height, 0);
        texture(tex);
    }

    scale(gridSize);

    beginShape(TRIANGLES);
    for (let i=0; i<sampleCount; i++) {
    for (let j=0; j<sampleCount; j++) {
        let u = indexIntoRange(i, sampleCount, surface.uRange);
        let v = indexIntoRange(j, sampleCount, surface.vRange);
        let uEnd = indexIntoRange(i+1, sampleCount, surface.uRange);
        let vEnd = indexIntoRange(j+1, sampleCount, surface.vRange);

        if (texU && texV) {
            vertex(x(u,v), y(u,v), z(u,v), texU(u), texV(v));
            vertex(x(u,vEnd), y(u,vEnd), z(u,vEnd), texU(u), texV(vEnd));
            vertex(x(uEnd,v), y(uEnd,v), z(uEnd,v), texU(uEnd), texV(v));

            vertex(x(u,vEnd), y(u,vEnd), z(u,vEnd), texU(u), texV(vEnd));
            vertex(x(uEnd,v), y(uEnd,v), z(uEnd,v), texU(uEnd), texV(v));
            vertex(x(uEnd,vEnd), y(uEnd,vEnd), z(uEnd,vEnd), texU(uEnd), texV(vEnd));
        }
        else {
            // this is to avoid p5 warning about calling vertex() with (u,v) coords
            // but no texture defined; the warning slows down the draw loop

            vertex(x(u,v), y(u,v), z(u,v));
            vertex(x(u,vEnd), y(u,vEnd), z(u,vEnd));
            vertex(x(uEnd,v), y(uEnd,v), z(uEnd,v));

            vertex(x(u,vEnd), y(u,vEnd), z(u,vEnd));
            vertex(x(uEnd,v), y(uEnd,v), z(uEnd,v));
            vertex(x(uEnd,vEnd), y(uEnd,vEnd), z(uEnd,vEnd));
        }
    }}
    endShape();
    pop();
}


