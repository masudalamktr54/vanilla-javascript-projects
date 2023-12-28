document.querySelector(".model-contant").style.display = "none"
document.querySelector(".button").addEventListener("click", () => {
	document.querySelector(".model-contant").style.display = "inline"
	document.querySelector(".model-project").style.display = "none"
	document.body.style.backgroundColor = "blue"
	document.body.style.opacity = ".5"
})

document.querySelector(".cross").addEventListener("click", () => {
	document.querySelector(".model-contant").style.display = "none"
	document.querySelector(".model-project").style.display = "inline"
	document.body.style.opacity = ".99"
})