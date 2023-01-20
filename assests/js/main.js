/*==================== SELECT COLOR ====================*/
document.querySelector('.switcher-btn').onclick = () => {
    document.querySelector('.color-switcher').classList.toggle('active');
};

let themeButtons = document.querySelectorAll('.theme-buttons');

themeButtons.forEach(color => {
    color.addEventListener('click', () => {
        let dataColor = color.getAttribute('data-color');
        document.querySelector(':root').style.setProperty('--secondary', dataColor)
    });
});

/*==================== SHOW URL ====================*/
document.getElementById('mostrar_f').addEventListener('mouseover', function () {
    document.getElementById("urlFace").innerHTML = "@Henderson";
    var el = document.getElementById("social_f");
    el.setAttribute("style", "cursor:pointer;");
});

document.getElementById('mostrar_l').addEventListener('mouseover', function () {
    document.getElementById("urlLinkedin").innerHTML = "@Henderson";
    var el = document.getElementById("social_l");
    el.setAttribute("style", "cursor:pointer;");
});
document.getElementById('mostrar_g').addEventListener('mouseover', function () {
    document.getElementById("urlGithub").innerHTML = "@Henderson";
    var el = document.getElementById("social_g");
    el.setAttribute("style", "cursor:pointer;");
});

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if (this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)