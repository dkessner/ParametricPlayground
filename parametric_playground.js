//
// parametric_playground.js
//


new p5(); // on demand global mode

let gridCount = 10;
let rangeMax;
let gridSize;

let surfaces = [];

let codeMirrorEditor;


function runUserCode() {
    if (userCodeMirrorEditor != null) userCodeMirrorEditor.save();
    let userCode = document.getElementById("userCode");
    let f = new Function(userCode.value);
    f();
    console.log("userCode: " + f);
}


function initializeExampleList() {
    let selectExample = document.getElementById("selectExample");
    selectExample.addEventListener('change', selectExampleOnChange);

    let option = document.createElement("option");
    option.text = "simple face";
    selectExample.add(option);

    option = document.createElement("option");
    option.text = "sphere face";
    selectExample.add(option);
}


function selectExampleOnChange() {
    console.log("we're here!");
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
    drawXYplane();
    drawAxes();

    for (surface of surfaces)
        drawSurface(surface);
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
        surfaces.push(surfaceHyperbolicParaboloid);
    }
    else if (key == 'e')
    {
        surfaces.push(surfaceEllipticParaboloid);
    }
    else if (key == 'p')
    {
        surfaces.push(surfacePlane);
    }
    else if (key == 't')
    {
        surfaces.push(surfaceTorus);
    }
}


