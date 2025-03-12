const imgs = document.querySelectorAll(".hero__item")


function change_hero() {
    let last = 0
    imgs.forEach((img,n) => {
        if (img.classList.contains("active")){
            last = n;
        }
        img.classList.remove("active")
    });
    if (last == imgs.length - 1){
        imgs[0].classList.add("active")
    }else{
        imgs[last+1].classList.add("active")
    }
}

setInterval(() => {
    change_hero()
}, 5000);