var searchButton = document.getElementById('searchButton')
var inputText = document.getElementById('inputText')
var output = document.getElementById('output')

function addText() {
	let text = inputText.value
	console.log(text)
	let newButton = document.createElement('button')
	newButton.classList.add('btn')
	newButton.classList.add('btn-outline-primary')
    newButton.classList.add('m-2')
	newButton.setAttribute('type','button')
	newButton.innerText = text
	output.appendChild(newButton)
}

searchButton.addEventListener('click' , addText)

var outputNum = document.getElementById('badgeCounter')
var counter = 0;
function addBadgeCounter() {
	let newBadge = document.createElement('badge')
	// newBadge.classList.add('badge-bg-danger')
	newBadge.setAttribute('Danger', counter)
	newBadge.innerText = counter
	counter = counter + 1
	newBadge.innerText = counter
	outputNum.appendChild(newBadge)
}

function clearText(){
    outputNum.innerText = ''
}

document.getElementById('searchButton').onclick = function(e) {
	clearText();
    addBadgeCounter();
	
}

inputText.addEventListener('blur' , addText)