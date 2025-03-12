document.querySelectorAll(".list__category").forEach(category => {
    category.querySelector("h4").onclick = () => {
        category.classList.toggle("active")
    }
});



recipes.forEach((r, n) => {

    console.log(r.category);
    
    if (r.category != "other") {

        document.querySelector(`#${r.category}`).innerHTML +=
            `
        <div class="recipes__item ${n == 0 ? "active" : ""}">
            <img src="assets/img/recipes/${r.id}.png" alt="">
            <p class="recipes__name">
                ${r.name}
            </p>
            <div class="item__id" style="display: none;">${r.id}</div>
        </div>
        `
    }
    
    setRecipe(0)
});

document.querySelectorAll(".recipes__item").forEach(item => {
    item.onclick = () => {
        document.querySelectorAll(".recipes__item").forEach(i => {
            i.classList.remove("active")
        });
        item.classList.add("active")
    setRecipe(item.querySelector(".item__id").textContent)
    }
});

function setRecipe(id){
    item = recipes.find(r => r.id == id)
    document.querySelector(".recipe__main img").src = `assets/img/recipes/${item.id}.png`
    document.querySelector(".recipe__main img").src = `assets/img/recipes/${item.id}.png`
    document.querySelector(".ingridients").innerHTML = ``
    item.ingridients.forEach(ingridient => {
        document.querySelector(".ingridients").innerHTML +=
        `
            <div class="ingridient" title="${recipes.find(i => i.id == ingridient.id).name}">
                <img src="assets/img/recipes/${ingridient.id}.png" alt="">
                <p class="ingridient__count">${ingridient.count}</p>
            </div>
        `
    });

}