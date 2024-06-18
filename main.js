//  We are accessing our form using myForm id and also adding an event listener in which we are adding submit effects like an event as been created 

document.getElementById("myForm").addEventListener("submit", function (event) {


    var username = document.getElementById("username").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var password = document.getElementById('password').value;
    var usernameError = document.getElementById('usernameError');

    var phoneNumberError = document.getElementById("phoneNumberError");
    var passwordError = document.getElementById("passwordError");

    var isValid = true;


    if (username === "") {
        isValid = false;
        usernameError.textContent = ' Username must be filled out ';



    } else {
        usernameError.textContent = "";
    }

    if (phone === "") {
        isValid = false;
        phoneNumberError.textContent = "Phone Number must be filled out";

    } else {
        phoneNumberError.textContent = "";
    }

    if (password === "") {
        isValid = false;
        passwordError.textContent = "Password must be filled out";

    } else {
        passwordError.textContent = "";
    }

    if (!isValid) {

        event.preventDefault();
    }




}

);
