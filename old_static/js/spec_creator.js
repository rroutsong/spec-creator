var datatypes; // for all spec datatypes
var addToButton = document.getElementById('addToButton');
var SpecViewer = document.querySelector("#specfile code");
var DisplayViewer = document.querySelector('#displayfile code');

var addToType = document.getElementById('addToType');

addToButton.addEventListener('click', function() {
	console.log(JSON.parse(SpecViewer.innerText));
	console.log(jsyaml.load(DisplayViewer.innerText))
});