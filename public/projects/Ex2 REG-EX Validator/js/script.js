function ValidateName() {
    let input = prompt("Enter Full Name");
    let nameformat = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (input.match(nameformat)) {
        alert("VALID full name!");
        return true;
    }
    else {
        alert("INVALID full name!");
        return false;
    }
}

function ValidateEmail() {
    let input = prompt("Enter Email");
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.match(mailformat)) {
        alert("VALID email address!");
        return true;
    }
    else {
        alert("INVALID email address!");
        return false;
    }
}

function ValidatePhone() {
    let input = prompt("Enter Phone Number");
    let phoneformat = /^\d{11}$/;
    if (input.match(phoneformat)) {
        alert("VALID phone number!");
        return true;
    }
    else {
        alert("INVALID phone number!");
        return false;
    }
}

function ValidatePostal() {
    let input = prompt("Enter Postal Code");
    let postalformat = /^\d{4}$/;
    if (input.match(postalformat)) {
        alert("VALID postal code!");
        return true;
    }
    else {
        alert("INVALID postal code!");
        return false;
    }
}
