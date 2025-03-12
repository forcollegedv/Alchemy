const fadeElements = document.querySelectorAll(".fade")
function checkElements() {
    fadeElements.forEach(el => {
        if (el.getBoundingClientRect().top <= window.innerHeight + 150) {
            el.classList.remove("UP");
            el.classList.remove("LEFT");
            el.classList.remove("RIGHT");
            setTimeout(() => {
                el.classList.remove("fade");
            }, 1000);
        }
    });
}

document.onscroll = () => {
    checkElements()
}
checkElements()
