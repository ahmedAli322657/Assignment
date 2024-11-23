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
}

function displaySite() {
    var cartona = '';

    for (var i = 0; i < siteList.length; i++) {
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