var siteName = document.getElementById('siteName');
var siteUrl = document.getElementById('siteUrl');
var siteList = [];


if (localStorage.getItem('sitelist') !== null) {
    siteList = JSON.parse(localStorage.getItem('sitelist'));
    displaySite();
}


function createUrl() {
    var url = {
        name: siteName.value,
        url: siteUrl.value
    };

    siteList.push(url)
    localStorage.setItem('sitelist', JSON.stringify(siteList));
    displaySite();
    clear();
    siteName.classList.remove("is-valid");
    siteName.classList.remove("is-invalid");

    siteUrl.classList.remove("is-valid");
    siteUrl.classList.remove("is-invalid");
}

function displaySite() {
    var cartona = '';

    for (var i = 1; i < siteList.length; i++) {
        cartona += `<tr class="fw-medium border-bottom">
                        <td>${[i]}</td>
                        <td>${siteList[i].name}</td>
                        <td><a href="${siteList[i].url}" class="btn btn-success" target="_blank"><i class="fa-solid fa-eye me-2"></i>Visit</a></td>
                        <td><button onclick="deleteSite(${[i]})" class="btn btn-danger"><i class="fa-solid fa-trash-can me-2"></i>Delete</button></td>
                    </tr>`
    };

    document.getElementById('myData').innerHTML = cartona;
}

function clear() {
    siteName.value = '';
    siteUrl.value = '';
}

function deleteSite(index) {
    console.log(index);
    siteList.splice(index, 1);
    localStorage.setItem('sitelist', JSON.stringify(siteList));
    displaySite();
}

function validateSiteName() {
    var regex = /^[a-z]{3,}$/;
    if (regex.test(siteName.value)) {
        siteName.classList.add("is-valid");
        siteName.classList.remove("is-invalid");

    } else {
        siteName.classList.add("is-invalid");
        siteName.classList.remove("is-valid");

    }
}

function validateUrl() {
    // var urlRegex = /^(?:(?:https?):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-zA-Z0-9]-*)*[a-zA-Z0-9]+)(?:\.(?:[a-zA-Z0-9]-*)*[a-zA-Z0-9]+)*(?:\.(?:[a-zA-Z]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    var urlRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/

    if (urlRegex.test(siteUrl.value)) {
        console.log("match");
        siteUrl.classList.add("is-valid");
        siteUrl.classList.remove("is-invalid");

    } else {
        console.log("not match");
        siteUrl.classList.add("is-invalid");
        siteUrl.classList.remove("is-valid");

    }
}
