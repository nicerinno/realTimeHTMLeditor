function yellow(){
	var textColorE = document.getElementById('editor');
	textColorE.style.color = "#f4df24";
	var textColorC = document.getElementById('cssEditor');
	textColorC.style.color = "#f4df24";
	var textColorS = document.getElementById('scriptEditor');
	textColorS.style.color = "#f4df24";
}
function white(){
	var textColorE = document.getElementById('editor');
	textColorE.style.color = "white";
	var textColorC = document.getElementById('cssEditor');
	textColorC.style.color = "white";
	var textColorS = document.getElementById('scriptEditor');
	textColorS.style.color = "white";
}
function chooser(){
	var textColorE = document.getElementById('editor');
	var color = document.getElementById('userColor').value;
	textColorE.style.color = color;
	var textColorC = document.getElementById('cssEditor');
	textColorC.style.color = color;
	var textColorS = document.getElementById('scriptEditor');
	textColorS.style.color = color;
	
}

function update()
{
	var idoc = document.getElementById('viewer').contentWindow.document;
	idoc.open();
	idoc.write(editor.getValue() + cssEditor.getValue() + scriptEditor.getValue());
	idoc.close();
	

	
}

function setupEditor()
{
	let text = `<!DOCTYPE html>
<html>
<head>
</head>
<body>
</body>
</html>`;

  window.editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/html");
  editor.setValue(text,1); 

  editor.getSession().on('change', function() {
    update();
  });

  editor.focus();
  
  
  editor.setOptions({
    fontSize: "14pt",
    showLineNumbers: true,
    showGutter: true,
    vScrollBarAlwaysVisible:false,
    enableBasicAutocompletion: false, enableLiveAutocompletion: false
  });

  editor.setShowPrintMargin(false);
  editor.setBehavioursEnabled(false);
}

function setupCSSEditor()
{
	let text = `<style>
</style>`;
	window.cssEditor = ace.edit("cssEditor");
	cssEditor.setTheme("ace/theme/monokai");
	cssEditor.getSession().setMode("ace/mode/css");
	cssEditor.setValue(text,2); 
	cssEditor.getSession().on('change', function() {
    update();
  });

  
  
  cssEditor.setOptions({
    fontSize: "14pt",
    showLineNumbers: true,
    showGutter: true,
    vScrollBarAlwaysVisible:false,
    enableBasicAutocompletion: false, enableLiveAutocompletion: false
  });

  cssEditor.setShowPrintMargin(false);
  cssEditor.setBehavioursEnabled(false);
}

function setupScriptEditor()
{
	let text = `<script>
</script>`;
	window.scriptEditor = ace.edit("scriptEditor");
	scriptEditor.setTheme("ace/theme/monokai");
	scriptEditor.getSession().setMode("ace/mode/script");
	scriptEditor.setValue(text,2); 
	scriptEditor.getSession().on('change', function() {
    update();
  });

  
  
  scriptEditor.setOptions({
    fontSize: "14pt",
    showLineNumbers: true,
    showGutter: true,
    vScrollBarAlwaysVisible:false,
    enableBasicAutocompletion: false, enableLiveAutocompletion: false
  });

  scriptEditor.setShowPrintMargin(false);
  scriptEditor.setBehavioursEnabled(false);
}

function ready()
{
setupEditor();
setupCSSEditor();
setupScriptEditor();
update();
}
