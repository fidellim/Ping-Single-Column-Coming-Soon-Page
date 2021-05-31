const formSubmit = document.querySelector(".formSubmit");
const inputText = document.querySelector(".inputText");
const errorText = document.querySelector(".errorText");
const regex = /^[A-Za-z0-9]+@(gmail|outlook|yahoo).com$/;

formSubmit.addEventListener("submit", (event) => {
	//prevent from reloading
	event.preventDefault();

	if (!regex.test(inputText.value.trim())) {
		console.log("wrong answer");

		errorText.style.display = "block";
		inputText.style.borderColor = "hsl(354, 100%, 66%)";
		inputText.style.borderWidth = "2px";
		inputText.style.marginBottom = ".5rem";

		// check screen size
		if (window.screen.width > 700) {
			errorText.style.marginBottom = "0rem";
			errorText.style.paddingLeft = "1rem";
		} else if (window.screen.width <= 700) {
			errorText.style.marginBottom = "1.5rem";
			errorText.style.paddingLeft = "0rem";
		}
		if (inputText.value.trim() === "") {
			errorText.innerHTML =
				"Whoops! It looks like you forgot to add your email";
		} else {
			errorText.innerHTML = "Please provide a valid email address";
		}
	} else {
		errorText.style.display = "none";
		inputText.style.borderColor = "hsl(223, 100%, 88%)";
		inputText.style.borderWidth = "1px";
		inputText.style.marginBottom = "0rem";
	}
});
