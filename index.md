<!-- index.md -->

<!-- p5 -->
<script src="p5/p5.min.js"></script>
<script src="p5/p5.easycam.min.js"></script>

<script src="parametric_playground.js"></script>
<script src="examples.js"></script>

<!-- codemirror -->
<link rel="stylesheet" href="codemirror/lib/codemirror.css">
<link rel="stylesheet" href="codemirror/theme/blackboard.css">
<script src="codemirror/lib/codemirror.js"></script>
<script src="codemirror/mode/javascript/javascript.js"></script>


<!-- content -->

Welcome to the Parametric Playground, where you can draw surfaces using
parametric equations!

First look at the code and run the 'hello' example.  Make changes to the code
and see what happens.

Then look at the other examples below for more ideas.  

Have fun!

<br/>
* rotate: left-click drag
* pan: middle-click / 2-finger drag
* zoom: right-click / spread drag
* reset: double-click

<br/>

<hr/>
<br/>

<textarea id="userCode"></textarea>

<button onclick="runUserCode()">Run code!</button>
<!--
<button onclick="restoreUserCode()">Restore</button>
-->
<button onclick="downloadUserCode()">Save code as file</button>

<center>
<main></main>
</center>

Examples: <select id="selectExample"></select>
<button onclick="runExampleCode()">Run example</button>

<textarea id="exampleCode"></textarea>

<br/>


<script>
    initializeCodeMirror();
    initializeExampleList();
</script>


