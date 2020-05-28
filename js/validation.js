var input = document.querySelector("input");
var button = document.querySelector(".arrow-btn");
var message = document.querySelector(".validation>.message");

button.addEventListener('click', validateEmail);

function validateEmail(){

var email = input.value;
    var emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!email.match(emailFormat)){
        message.innerHTML="Please provide a valid email";
        message.classList.add("error");
        input.classList.add("input-error-icon");
        input.focus();
    } else{
        message.innerHTML="";
        message.classList.remove("error");
        input.classList.remove("input-error-icon");

        document.querySelector(".emailForm").submit();
    }
}
