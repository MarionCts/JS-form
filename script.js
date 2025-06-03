// SELECTING THE HTML INPUTS

const form = document.querySelector("form");

const surName = document.querySelector("#name");
const nameContainer = document.querySelector("#nameContainer");

const firstName = document.querySelector("#firstName");
const firstNameContainer = document.querySelector("#firstNameContainer");

const email = document.querySelector("#email");
const emailContainer = document.querySelector("#emailContainer");

const password = document.querySelector("#password");
const passwordContainer = document.querySelector("#passwordContainer");

const age = document.querySelector("#age");
const ageContainer = document.querySelector("#ageContainer");

const button = document.querySelector("#button");

// PREVENTING THE DEFAULT BEHAVIOR OF THE BUTTON

form.addEventListener("submit", function(event) {
    event.preventDefault();
})

// REG EXP RULES FOR THE MAIL & PASSWORD CHECKING

const emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

// CREATING THE ERROR MESSAGES THAT WILL SHOW UP WHEN A MISTAKE IS MADE

const nameError = "* Le nom saisi doit contenir au moins 3 caractères";
const firstNameError = "* Le prénom saisi doit contenir au moins 2 caractères";
const emailError = "* L'email saisi n'est pas valide";
const passwordError = "* Le mot de passe saisi n'est pas valide : saisissez au moins 8 caractères, en incluant au moins une majuscule, une minuscule et un chiffre";
const ageError = "* Vous devez saisir un nombre entre 18 et 99";

const nameNone = "* Veuillez saisir votre nom";
const firstNameNone = "* Veuillez saisir votre prénom";
const emailNone = "* Veuillez saisir votre adresse mail";
const passwordNone = "* Veuillez saisir un mot de passe";
const ageNone = "* Veuillez saisir votre âge";

// CREATING THE FUNCTION THAT WILL BE CALLED IN EVERY ERROR SCENARIO

let message

const errorMessage = (errorType, place, input) => {
    input.classList.add("input__border--error");
    message = place.children[2];
    message.classList.add("input--error");
    message.textContent = errorType;
}

const validInput = (place, input) => {
    input.classList.remove("input__border--error");
    message = place.children[2];
    message.classList.remove("input--error");
    message.classList.add("hide");
}

// MAKES THE FORM = TRUE

let isValid = true;

// THE DIFFERENT SCENARI

form.addEventListener("submit", function() {
    if (surName.value.length < 3 && surName.value.length > 0) {
        errorMessage(nameError, nameContainer, surName);
        isValid = false;
    } else if (surName.value.length <= 0) {
        errorMessage(nameNone, nameContainer, surName);
        isValid = false;
    } else {
        validInput(nameContainer, surName);
        isValid = true;
    }

    if (firstName.value.length < 2 && firstName.value.length > 0) {
        errorMessage(firstNameError, firstNameContainer, firstName);
        isValid = false;
    } else if (firstName.value.length <= 0) {
        errorMessage(firstNameNone, firstNameContainer, firstName);
        isValid = false;
    } else {
        validInput(firstNameContainer, firstName);
        isValid = true;
    }

    if (!emailCheck.test(email.value)) {
        errorMessage(emailError, emailContainer, email);
        isValid = false;
    } else if (email.value.length <= 0) {
        errorMessage(emailNone, emailContainer, email);
        isValid = false;
    } else {
        validInput(emailContainer, email);
        isValid = true;
    }

    if (!passwordCheck.test(password.value)) {
        errorMessage(passwordError, passwordContainer, password);
        isValid = false;
    } else if (password.value.length <= 0) {
        errorMessage(passwordNone, passwordContainer, password);
        isValid = false;
    } else {
        validInput(passwordContainer, password);
        isValid = true;
    }

    if (isNaN(age.value) === true || age.value < 18 && age.value.length > 0 || age.value > 99) {
        errorMessage(ageError, ageContainer, age);
        isValid = false;
    } else if (age.value.length <= 0) {
        errorMessage(ageNone, ageContainer, age);
        isValid = false;
    } else {
        validInput(ageContainer, age);
        isValid = true;
    }

    if (isValid === true) {
        alert("Vous êtes désormais inscrit, vous allez recevoir un mail !");
    }
})

