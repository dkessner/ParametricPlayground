<!-- index.md -->

<!-- p5 -->
<script src="p5/p5.min.js"></script>
<script src="p5/p5.easycam.min.js"></script>

<script src="js/parametric_playground.js"></script>
<script src="js/sketch.js"></script>
<script src="js/examples.js"></script>

<!-- codemirror -->
<link rel="stylesheet" href="codemirror/lib/codemirror.css">
<link rel="stylesheet" href="codemirror/theme/blackboard.css">
<script src="codemirror/lib/codemirror.js"></script>
<script src="codemirror/mode/javascript/javascript.js"></script>


<!-- content -->

Welcome to the Parametric Playground, where you can draw surfaces using
parametric equations!

First look at the code and run the 'hello' example.  Then look at the other
examples below for more ideas.  

Explore!  Copy example code to your code window, make changes to the code, and
see what happens!


Have fun!


Dr. Kessner


<br/>
* rotate: left-click drag
* pan: middle-click / 2-finger drag
* zoom: right-click / spread drag
* reset: double-click
* hide axes: 'a'
<br/>

<hr/>
<br/>

<h2> Your code: </h2>

<textarea id="userCode"></textarea>

<button class="btn" onclick="runUserCode()">Run code!</button>
<button class="btn" onclick="clearSurfaces()">Clear</button>
<!--
<button onclick="restoreUserCode()">Restore</button>
-->
<button class="btn" onclick="downloadUserCode()">Save code as file</button>

<br/> 
<center>
<main></main>
</center>
<br/>

<h2> Example code: </h2>

Examples: <select id="selectExample"></select>
<button class="btn" onclick="runExampleCode()">Run example</button>

<textarea id="exampleCode"></textarea>

<br/>


<script>
    initializeCodeMirror();
    initializeExampleList();
</script>


