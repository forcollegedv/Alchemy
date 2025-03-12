chronology.forEach((item, n) => {
    if (n % 2 == 0) {
        document.querySelector("ul").innerHTML +=
            `
        <li class="chronology__item fade UP">
            <div class="chronology__info">
                <img class="chronology__img" src="assets/img/chronology/${n}.jpg" alt="">
                <h5>${item}</h5>
            </div>
            <div class="index">${n + 1}</div>
        </li>
        `
    } else {
        document.querySelector("ul").innerHTML +=
            `
        <li class="chronology__item fade UP">
            <div class="index">${n + 1}</div>
            <div class="chronology__info">
                <img class="chronology__img" src="assets/img/chronology/${n}.jpg" alt="">
                <h5>${item}</h5>
            </div>
        </li>
        `
    }
});

document.querySelectorAll("li").forEach((li, n) => {
});