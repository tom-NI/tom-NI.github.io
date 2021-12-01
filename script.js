// programmatically set the site date
document.getElementById("footer_text").innerHTML = "<b>© Copyright Thomas Kilpatrick " + (new Date().getFullYear()) + "</b>";

// scroll back to the top of the page code!
if (document.getElementById("back_to_top_button") !== null) {
    let backToTopButton = document.getElementById("back_to_top_button");
    let documentRoot = document.documentElement;
    function backToTopOfPage() {
        documentRoot.scrollTo(0, 0);
    }
    backToTopButton.addEventListener("click", backToTopOfPage);
}

// nav bar burger activation
if (document.getElementById("nav_burger") !== null) {
    function toggleBurgerMenu() {
        document.querySelector('.navbar-menu').classList.toggle('is-active');
    }
    let burger = document.getElementById("nav_burger");
    burger.addEventListener("click", toggleBurgerMenu);
}