function activeModal() {
	let modal = document.getElementById("about-modal");
	let switchButton = document.getElementById("modalSwitchButton");

	if (modal.classList.contains("active")) {
		modal.classList.remove("switched");
		switchButton.innerHTML = "Me contacter";
	}

	modal.classList.toggle("active");
}

function closeModal() {
	let modal = document.getElementById("about-modal");
	let switchButton = document.getElementById("modalSwitchButton");

	modal.classList.add("close");

	setTimeout(function () {
		modal.classList.remove("close");
		modal.classList.remove("switched");
		modal.classList.remove("active");
		switchButton.innerHTML = "Me contacter";
	}, 300);
}

function switchModal() {
	let modal = document.getElementById("about-modal");
	let switchButton = document.getElementById("modalSwitchButton");
	modal.classList.toggle("switched");

	if (modal.classList.contains("switched")) {
		switchButton.innerHTML = "Retour";
	} else {
		switchButton.innerHTML = "Me contacter";
	}
}

// Formulaire
const formGroups = document.querySelectorAll(".form-group");
formGroups.forEach((formGroup) => {
	const inputField = formGroup.querySelector("input, textarea");

	inputField.addEventListener("focus", () => {
		formGroup.classList.add("active");
	});

	inputField.addEventListener("blur", () => {
		if (inputField.value === "" && !inputField.classList.contains("filled")) {
			formGroup.classList.remove("active");
		}
	});

	// Vérifier si les champs ont déjà une valeur lors du chargement de la page
	if (inputField.value !== "") {
		inputField.classList.add("filled");
		formGroup.classList.add("active");
	}

	inputField.addEventListener("input", () => {
		if (inputField.value === "") {
			inputField.classList.remove("filled");
		} else {
			inputField.classList.add("filled");
		}
	});
});
