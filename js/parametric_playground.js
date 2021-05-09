//
// parametric_playground.js
//


new p5(); // on demand global mode

let userCodeMirrorEditor;
let exampleCodeMirrorEditor;


function clearSurfaces() {
    surfaces = [];
}


function runUserCode() {
    surfaces = [];
    let code = userCodeMirrorEditor.getValue();
    if (code) {
        localStorage.setItem('code', code);
        let f = new Function(code);
        f();
    }
}

function runExampleCode() {
    surfaces = [];
    let f = new Function(exampleCodeMirrorEditor.getValue());
    f();
}

function initializeCodeMirror() {
    let userCode = document.getElementById("userCode");
    userCodeMirrorEditor = CodeMirror.fromTextArea(userCode, {
      lineNumbers: true,
      theme: "blackboard"
    });

    userCodeMirrorEditor.setSize("100%", 800);

    let code = localStorage.getItem('code');
    if (code) {
        userCodeMirrorEditor.setValue(code);
        initializeSurfaces = new Function(code);
    }
    else {
        userCodeMirrorEditor.setValue(examples[0].code);
        initializeSurfaces = new Function(code);
    }

    let exampleCode = document.getElementById("exampleCode");
    exampleCodeMirrorEditor = CodeMirror.fromTextArea(exampleCode, {
      lineNumbers: true,
      theme: "blackboard",
      readOnly: true
    });

    exampleCodeMirrorEditor.setSize("100%", 800);
    exampleCodeMirrorEditor.setValue(examples[0].code);
}

// example dropdown

function initializeExampleList() {
    let selectExample = document.getElementById("selectExample");
    selectExample.addEventListener('change', selectExampleOnChange);

    for (example of examples) {
        let option = document.createElement("option");
        option.text = example.name;
        selectExample.add(option);
    }

}

function selectExampleOnChange() {
    let selectExample = document.getElementById("selectExample");
    exampleCodeMirrorEditor.setValue(examples[selectExample.selectedIndex].code);
}

// student example dropdown

function initializeStudentExampleList() {
    let selectExample = document.getElementById("selectStudentExample");
    selectExample.addEventListener('change', selectStudentExampleOnChange);

    for (example of studentExamples) {
        let option = document.createElement("option");
        option.text = example.name;
        selectStudentExample.add(option);
    }

}

function selectStudentExampleOnChange() {
    let selectStudentExample = document.getElementById("selectStudentExample");
    exampleCodeMirrorEditor.setValue(studentExamples[selectStudentExample.selectedIndex].code);
}

//

function restoreUserCode() {
    let code = localStorage.getItem('code');
    if (code) userCodeMirrorEditor.setValue(code);
}


function downloadUserCode() {
  // from stackoverflow:
  //   https://stackoverflow.com/questions/51315044/how-do-i-save-the-content-of-the-editor-not-the-whole-html-page/51315312

  var textToWrite = userCodeMirrorEditor.getValue();
  var textFileAsBlob = new Blob([textToWrite], {
    type: "text/plain;charset=utf-8"
  });
  var fileNameToSaveAs = "my_code.js";

  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  if (window.webkitURL != null) {
    // Chrome allows the link to be clicked
    // without actually adding it to the DOM.
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  } else {
    // Firefox requires the link to be added to the DOM
    // before it can be clicked.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }

  downloadLink.click();
}


