const characters_block = document.querySelector(".characters")
const locations_block = document.querySelector(".locations")

characters.slice(0, 4).forEach((character, n) => {
    characters_block.querySelector(".slider__img").innerHTML += `<img src="assets/img/characters/${character.id}.jpg" alt="" class="slider__item ${n == 0 ? "active" : ""}">`
    characters_block.querySelector(".double__info").innerHTML += `
        <div class="double__item ${n == 0 ? "active" : ""}">
            <div class="double__text">
                <h3>${character.name}</h3>
                <p class="double__description">${character.short_description}</p>
            </div>
            <a href="characters.html#${character.id}" class="button">Подробнее</a>
        </div>`
});
locations.slice(0, 4).forEach((location, n) => {
    locations_block.querySelector(".slider__img").innerHTML += `<img src="assets/img/locations/${location.id}.jpg" alt="" class="slider__item ${n == 0 ? "active" : ""}">`
    locations_block.querySelector(".double__info").innerHTML += `
        <div class="double__item ${n == 0 ? "active" : ""}">
            <div class="double__text">
                <h3>${location.name}</h3>
                <p class="double__description">${location.short_description}</p>
            </div>
            <a href="locations.html#${location.id}" class="button">Подробнее</a>
        </div>`
});
document.querySelectorAll(".double__info").forEach(item => {
    console.log(item.querySelector(".double__text").clientHeight);
    item.style = `height:${item.querySelector(".active").querySelector(".double__text").clientHeight + item.querySelector(".button").clientHeight + 25}px`
});




document.querySelectorAll(".double").forEach(double => {

    let imgs = double.querySelectorAll(".slider__item")
    let texts = double.querySelectorAll(".double__item")

    for (let i = 0; i < imgs.length; i++) {
        double.querySelector(".slider__circles").innerHTML += `<div class="circle ${i == 0 ? "active" : ""}"></div>`
    }

    let circles = double.querySelectorAll(".circle")
    circles.forEach((circle, n) => {
        circle.onclick = () => {
            circles.forEach((c, j) => {
                c.classList.remove("active")
                if (j == n) {
                    c.classList.add("active")
                }
            });
            texts.forEach((c, j) => {
                c.classList.remove("active")
                if (j == n) {
                    c.classList.add("active")
                }
            });
            imgs.forEach((c, j) => {
                c.classList.remove("active")
                if (j == n) {
                    c.classList.add("active")
                }
            });
            
            document.querySelectorAll(".double__info").forEach(item => {
                console.log(item.querySelector(".double__text").clientHeight);
                item.style = `height:${item.querySelector(".active").querySelector(".double__text").clientHeight + item.querySelector(".button").clientHeight + 25}px`
            });
        }
    });

});
