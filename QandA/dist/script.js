document.querySelector(".minusIcon-1").style.display = "none"
document.querySelector(".minusIcon-2").style.display = "none"
document.querySelector(".minusIcon-3").style.display = "none"

document.querySelector(".icon-1").addEventListener("click", () => {
	document.querySelector(".para-1").classList.toggle("hidden")

	if (document.querySelector(".para-1").classList.contains("hidden")) {
		document.querySelector(".plusIcon-1").style.display = "inline"
		document.querySelector(".minusIcon-1").style.display = "none"
	} 
	else {
		document.querySelector(".plusIcon-1").style.display = "none"
		document.querySelector(".minusIcon-1").style.display = "inline"			
	}
})

document.querySelector(".icon-2").addEventListener("click", () => {
	document.querySelector(".para-2").classList.toggle("hidden")

	if (document.querySelector(".para-2").classList.contains("hidden")) {
		document.querySelector(".plusIcon-2").style.display = "inline"
		document.querySelector(".minusIcon-2").style.display = "none"
	} 
	else {
		document.querySelector(".plusIcon-2").style.display = "none"
		document.querySelector(".minusIcon-2").style.display = "inline"			
	}
})

document.querySelector(".icon-3").addEventListener("click", () => {
	document.querySelector(".para-3").classList.toggle("hidden")

	if (document.querySelector(".para-3").classList.contains("hidden")) {
		document.querySelector(".plusIcon-3").style.display = "inline"
		document.querySelector(".minusIcon-3").style.display = "none"
	} 
	else {
		document.querySelector(".plusIcon-3").style.display = "none"
		document.querySelector(".minusIcon-3").style.display = "inline"			
	}
})