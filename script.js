const btn = document.getElementById("btn");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const msg = document.querySelector(".msg");

btn.addEventListener("click", onsubmit);

function onsubmit(e) {
	e.preventDefault();
	if (inputName.value === "" || inputEmail.value === "") {
		msg.classList.add("error");
		msg.innerHTML = "Please enter all fields";

		// Remove error after 3 seconds
		setTimeout(() => msg.remove(), 3000);
	} else {
		detailObj = {
			inputName: inputName.value,
			inputEmail: inputEmail.value,
		};
		localStorage.setItem("userDetails", JSON.stringify(detailObj));
		// JSON.stringify(localStorage.setItem("Email", inputEmail.value));
	}
}
