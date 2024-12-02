var myForm = document.querySelector(".fo2");
var myForm2 = document.querySelector(".fo");
var signUpName = document.getElementById("signUpName");
var signUpEmail = document.getElementById("signUpEmail");
var signUpPassword = document.getElementById("signUpPassword");

var logInEmail = document.getElementById("logInEmail");
var logInPassword = document.getElementById("logInPassword");

var userList = [];
var inputError = document.getElementById("inputError");
var inputError2 = document.getElementById("inputError2");
var inputSuccess = document.getElementById("inputSuccess");
var formContent = document.getElementById("formContent");
var welcome = document.getElementById("welcome");
var navbar = document.querySelector(".navbar")
var logOut = document.querySelector(".logOut")





function signUpuser() {
    var userData = {
        name: signUpName.value,
        email: signUpEmail.value,
        password: signUpPassword.value
    }
    userList.push(userData);
    localStorage.setItem('userList', JSON.stringify(userList));
    validationFormSignUp();
}

function validationFormSignUp() {
    if (signUpName.value === "" || signUpEmail.value === "" || signUpPassword.value === "") {
        inputError.classList.remove("d-none");
        inputSuccess.classList.add("d-none");

    } else {
        inputSuccess.classList.remove("d-none");
        inputError.classList.add("d-none");

        // myForm2.classList.remove("d-none")
        // myForm.classList.add("d-none")

    }
}

function signIn() {
    myForm2.classList.remove("d-none")
    myForm.classList.add("d-none")
}

function signUp() {
    myForm2.classList.add("d-none")
    myForm.classList.remove("d-none")
}

function logInUser() {
    if (signUpEmail.value === logInEmail.value && signUpPassword.value === logInPassword.value) {
        formContent.classList.add("d-none")
        navbar.classList.remove("d-none")
        welcome2()
    } else {
        inputError2.classList.remove("d-none");
    }
}

function welcome2() {
    var cartona = '';

    cartona += `<div id="welcome"
        class="fs-1 text-white text-center position-absolute top-50 start-50 translate-middle p-5 color shadow-lg text-capitalize">Welcome ${signUpName.value}
    </div>`;

    document.getElementById('myData2').innerHTML = cartona;

}


function removeWelcome2() {
    var cartona = '';

    cartona += `<div id="welcome"
        class="fs-1 text-white text-center position-absolute top-50 start-50 translate-middle p-5 color shadow-lg text-capitalize d-none">Welcome ${signUpName.value}
    </div>`;

    document.getElementById('myData2').innerHTML = cartona;

}

function clearPassword() {
    logInPassword.value = "";
}

logOut.addEventListener("click", function (e) {
    formContent.classList.remove("d-none")
    navbar.classList.add("d-none")
    removeWelcome2()
    clearPassword()

})

myForm.addEventListener("submit", function (e) {

    e.preventDefault();

})
myForm2.addEventListener("submit", function (e) {

    e.preventDefault();

})



// var siteName = document.getElementById('siteName');
// var siteUrl = document.getElementById('siteUrl');
// var siteList = [];


// if (localStorage.getItem('sitelist') !== null) {
//     siteList = JSON.parse(localStorage.getItem('sitelist'));
//     displaySite();
// }


// function createUrl() {
//     var url = {
//         name: siteName.value,
//         url: siteUrl.value
//     };

//     siteList.push(url)
//     localStorage.setItem('sitelist', JSON.stringify(siteList));
//     displaySite();
//     clear();
//     siteName.classList.remove("is-valid");
//     siteName.classList.remove("is-invalid");

//     siteUrl.classList.remove("is-valid");
//     siteUrl.classList.remove("is-invalid");
// }

// function displaySite() {
//     var cartona = '';

//     for (var i = 1; i < siteList.length; i++) {
//         cartona += `<tr class="fw-medium border-bottom">
//                         <td>${[i]}</td>
//                         <td>${siteList[i].name}</td>
//                         <td><a href="${siteList[i].url}" class="btn btn-success" target="_blank"><i class="fa-solid fa-eye me-2"></i>Visit</a></td>
//                         <td><button onclick="deleteSite(${[i]})" class="btn btn-danger"><i class="fa-solid fa-trash-can me-2"></i>Delete</button></td>
//                     </tr>`
//     };

//     document.getElementById('myData').innerHTML = cartona;
// }

// function clear() {
//     siteName.value = '';
//     siteUrl.value = '';
// }

// function deleteSite(index) {
//     console.log(index);
//     siteList.splice(index, 1);
//     localStorage.setItem('sitelist', JSON.stringify(siteList));
//     displaySite();
// }

// function validateSiteName() {
//     var regex = /^[a-z]{3,}$/;
//     if (regex.test(siteName.value)) {
//         siteName.classList.add("is-valid");
//         siteName.classList.remove("is-invalid");

//     } else {
//         siteName.classList.add("is-invalid");
//         siteName.classList.remove("is-valid");

//     }
// }

// function validateUrl() {
//     // var urlRegex = /^(?:(?:https?):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-zA-Z0-9]-*)*[a-zA-Z0-9]+)(?:\.(?:[a-zA-Z0-9]-*)*[a-zA-Z0-9]+)*(?:\.(?:[a-zA-Z]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
//     var urlRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/

//     if (urlRegex.test(siteUrl.value)) {
//         console.log("match");
//         siteUrl.classList.add("is-valid");
//         siteUrl.classList.remove("is-invalid");

//     } else {
//         console.log("not match");
//         siteUrl.classList.add("is-invalid");
//         siteUrl.classList.remove("is-valid");

//     }
// }
