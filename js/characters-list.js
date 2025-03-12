characters.forEach(character => {
    document.querySelector(".list__wrapper").innerHTML +=
        `
    <a href="#${character.id}" class="fade UP list__item" onclick="setCharacter(${character.id})">
        <img src="assets/img/characters/${character.id}.jpg" alt="" class="list__img">
        <h4>${character.name}</h4>
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

function setCharacter(id) {
    document.querySelector(".character__img").onclick = ()=>{}
    if (window.location.href.split("#")[1] === undefined) {
        window.location.href = `${window.location.href}#${0}`
        current_id = 0
        id = 0
    }
    document.querySelector(".character__img").style.opacity = 0
    document.querySelector(".character__description").style.opacity = 0
    setTimeout(() => {
        window.location.href = `${window.location.href.split("#")[0]}#${id}`
        document.querySelector(".character__img").src = `assets/img/characters/${id}.jpg`
        document.querySelector(".character__description").innerHTML = ""
        document.querySelector(".character__description").innerHTML += `<h3>${characters[id].name}</h3>`
        characters[id].long_description.split("\n").forEach(paragraph => {
            document.querySelector(".character__description").innerHTML += `<p>${paragraph}</p>`
        });
        document.querySelector(".character__img").style.opacity = 1
        document.querySelector(".character__description").style.opacity = 1
    }, 500);
    if (id == 13){
        document.querySelector(".character__img").onclick = ()=>{
            new Audio("assets/sounds/Gaunter o'Dimm.mp3").play();
        }
    }

}




console.log(current_id);


setCharacter(current_id)