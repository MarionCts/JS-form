// SELECTING THE HTML INPUTS

const name = document.querySelector("#name");
const firstName = document.querySelector("#firstName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const age = document.querySelector("#age");

// CREATING THE ERROR MESSAGES THAT WILL SHOW UP WHEN A MISTAKE IS MADE

const nameError = "Le nom saisi doit contenir au moins 3 caractères";
const firstNameError = "Le prénom saisi doit contenir au moins 2 caractères";
const emailError = "L'email saisi n'est pas valide";
const passwordError = "Le mot de passe saisi n'est pas valide : saisissez au moins 8 caractères, en incluant au moins une majuscule, une minuscule et un chiffre";
const ageError = "L'âge saisi doit être compris entre 18 et 99";

const nameNone = "Veuillez saisir votre nom";
const firstNameNone = "Veuillez saisir votre prénom";
const emailNone = "Veuillez saisir votre adresse mail";
const passwordNone = "Veuillez saisir un mot de passe";
const ageNone = "Veuillez saisir votre âge";

// CREATING THE FUNCTION THAT WILL BE CALLED IN EVERY ERROR SCENARI

let message

const errorMessage = (errorType) => {
    message = document.createElement("p");
    message.classList.add("input--error");
    message.textContent = errorType;
}

errorMessage(nameError);
name.append(message);