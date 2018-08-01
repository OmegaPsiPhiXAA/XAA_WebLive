const info = document.getElementById("informational");
const serve = document.getElementById("Service"); 
const show = document.getElementById("Performances"); 
const trophy = document.getElementById("Awards"); 
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four"); 

one.addEventListener("click", function() {
	info.style.display = "block";
	serve.style.display = "none";
	show.style.display = "none";
	trophy.style.display = "none";
});
two.addEventListener("click", function() {
	info.style.display = "none";
	serve.style.display = "block";
	show.style.display = "none";
	trophy.style.display = "none";
});
three.addEventListener("click", function() {
	info.style.display = "none";
	serve.style.display = "none";
	show.style.display = "block";
	trophy.style.display = "none";
});
four.addEventListener("click", function() {
	info.style.display = "none";
	serve.style.display = "none";
	show.style.display = "none";
	trophy.style.display = "block";
});