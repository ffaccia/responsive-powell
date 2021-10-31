
Element.prototype.toggleClass = function toggleClass(className) {
    if ([...this.classList].includes(className))
        this.classList.remove(className);
    else
        this.classList.add(className);
};


load = () => {

    var main_nav = document.getElementsByClassName('main-nav')[0];
    var nav_toggle = document.getElementsByClassName('nav-toggle')[0];
    var hamburger = document.getElementsByClassName('hamburger')[0];
    nav_toggle.addEventListener("click", () => {
        main_nav.toggleClass("is-open");
        hamburger.toggleClass("is-open");
    })

}


window.onload = load

