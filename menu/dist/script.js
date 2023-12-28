document.querySelector(".all-1").addEventListener("click", () => {
	document.querySelector(".breakfast").style.display = "inline"
	document.querySelector(".breakfast-2").style.display = "inline"
	document.querySelector(".breakfast-3").style.display = "inline"
	document.querySelector(".lunch-1").style.display = "inline"
	document.querySelector(".lunch-2").style.display = "inline"
	document.querySelector(".lunch-3").style.display = "inline"
	document.querySelector(".shakes-1").style.display = "inline"
	document.querySelector(".shakes-2").style.display = "inline"
	document.querySelector(".shakes-3").style.display = "inline"
	document.querySelector(".dinner-1").style.display = "inline"
})

document.querySelector(".breakfast").addEventListener("click", () => {
	document.querySelector(".breakfast-1").style.display = "inline"
	document.querySelector(".breakfast-2").style.display = "inline"
	document.querySelector(".breakfast-3").style.display = "inline"
	document.querySelector(".lunch-1").style.display = "none"
	document.querySelector(".lunch-2").style.display = "none"
	document.querySelector(".lunch-3").style.display = "none"
	document.querySelector(".shakes-1").style.display = "none"
	document.querySelector(".shakes-2").style.display = "none"
	document.querySelector(".shakes-3").style.display = "none"
	document.querySelector(".dinner-1").style.display = "none"
})

document.querySelector(".lunch").addEventListener("click", () => {
	document.querySelector(".breakfast-1").style.display = "none"
	document.querySelector(".breakfast-2").style.display = "none"
	document.querySelector(".breakfast-3").style.display = "none"
	document.querySelector(".lunch-1").style.display = "inline"
	document.querySelector(".lunch-2").style.display = "inline"
	document.querySelector(".lunch-3").style.display = "inline"
	document.querySelector(".shakes-1").style.display = "none"
	document.querySelector(".shakes-2").style.display = "none"
	document.querySelector(".shakes-3").style.display = "none"
	document.querySelector(".dinner-1").style.display = "none"
})

document.querySelector(".shakes").addEventListener("click", () => {
	document.querySelector(".breakfast-1").style.display = "none"
	document.querySelector(".breakfast-2").style.display = "none"
	document.querySelector(".breakfast-3").style.display = "none"
	document.querySelector(".lunch-1").style.display = "none"
	document.querySelector(".lunch-2").style.display = "none"
	document.querySelector(".lunch-3").style.display = "none"
	document.querySelector(".shakes-1").style.display = "inline"
	document.querySelector(".shakes-2").style.display = "inline"
	document.querySelector(".shakes-3").style.display = "inline"
	document.querySelector(".dinner-1").style.display = "none"
})

document.querySelector(".dinner").addEventListener("click", () => {
	document.querySelector(".breakfast-1").style.display = "none"
	document.querySelector(".breakfast-2").style.display = "none"
	document.querySelector(".breakfast-3").style.display = "none"
	document.querySelector(".lunch-1").style.display = "none"
	document.querySelector(".lunch-2").style.display = "none"
	document.querySelector(".lunch-3").style.display = "none"
	document.querySelector(".shakes-1").style.display = "none"
	document.querySelector(".shakes-2").style.display = "none"
	document.querySelector(".shakes-3").style.display = "none"
	document.querySelector(".dinner-1").style.display = "inline"
})