
locations.forEach(location => {
    document.querySelector(".list__wrapper").innerHTML +=
        `
    <a href="#${location.id}" class="fade UP list__item" onclick="setlocation(${location.id})">
        <img src="assets/img/locations/${location.id}.jpg" alt="" class="list__img">
        <h4>${location.name}</h4>
    </a>
    `
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector("header").scrollIntoView({
        behavior: 'smooth'
    });
    });
});


let current_id = window.location.href.split("#")[1]

function setlocation(id) {
    if (window.location.href.split("#")[1] === undefined) {
        window.location.href = `${window.location.href}#${0}`
        current_id = 0
        id = 0
    }
    document.querySelector(".location__img").style.opacity = 0
    document.querySelector(".location__description").style.opacity = 0
    setTimeout(() => {
        window.location.href = `${window.location.href.split("#")[0]}#${id}`
        document.querySelector(".location__img").src = `assets/img/locations/${id}.jpg`
        document.querySelector(".location__description").innerHTML = ""
        document.querySelector(".location__description").innerHTML += `<h3>${locations[id].name}</h3>`
        locations[id].long_description.split("\n").forEach(paragraph => {
            document.querySelector(".location__description").innerHTML += `<p>${paragraph}</p>`
        });
        document.querySelector(".location__img").style.opacity = 1
        document.querySelector(".location__description").style.opacity = 1
    }, 500);

}
console.log(current_id);


setlocation(current_id)
