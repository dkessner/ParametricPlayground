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


<center>
<main></main>
</center>

<button onclick="runUserCode()">Run code!</button>

<textarea id="userCode"></textarea>

<br/>

<select id="selectExample"></select>

<textarea id="exampleCode"></textarea>



<br/>

### EasyCam controls

* rotate: left-click drag
* pan: middle-click / 2-finger drag
* zoom: right-click / spread drag
* reset: double-click


<!-- codemirror -->

<script>
    let userCode = document.getElementById("userCode");
    userCode.value = exampleSimpleFace;

    userCodeMirrorEditor = CodeMirror.fromTextArea(userCode, {
      lineNumbers: true,
      theme: "blackboard"
    });

    userCodeMirrorEditor.setSize("100%", 800);

    let exampleCode = document.getElementById("exampleCode");
    exampleCode.value = exampleSphereFace;

    exampleCodeMirrorEditor = CodeMirror.fromTextArea(exampleCode, {
      lineNumbers: true,
      theme: "blackboard",
      readOnly: true
    });

    exampleCodeMirrorEditor.setSize("100%", 800);
</script>

<script>
    initializeExampleList();
</script>


