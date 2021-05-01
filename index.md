

<script src="p5/p5.min.js"></script>
<script src="p5/p5.easycam.min.js"></script>
<script src="surfaces.js"></script>


<textarea id="userCode" rows="10" cols="80" style="background-color:#000; color:#eaeaea">
surfaces = [];

for (let j=0; j<5; j++) {
  surfaces.push(new Torus(j, j, j, 1, .5));
  surfaces[j].stroke = color(0, 0, 255*(j+1)/5);
}
</textarea>

<button onclick="runUserCode()">Click me!</button>

<center>
<main></main>
</center>

<br/>

### EasyCam controls

* rotate: left-click drag
* pan: middle-click / 2-finger drag
* zoom: right-click / spread drag
* reset: double-click

