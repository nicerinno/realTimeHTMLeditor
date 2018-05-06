function yellow(){
	var textColor = document.getElementById('editor');
	textColor.style.color = "#f4df24";
}
function white(){
	var textColor = document.getElementById('editor');
	textColor.style.color = "white";
}
function chooser(){
	var textColor = document.getElementById('editor');
	var color = document.getElementById('userColor').value;
	textColor.style.color = color;
	
}

function update()
{
	var idoc = document.getElementById('iframe').contentWindow.document;

	idoc.open();
	idoc.write(editor.getValue());
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
    showLineNumbers: false,
    showGutter: false,
    vScrollBarAlwaysVisible:true,
    enableBasicAutocompletion: false, enableLiveAutocompletion: false
  });

  editor.setShowPrintMargin(false);
  editor.setBehavioursEnabled(false);
}
function ready()
{
setupEditor();
update();
}