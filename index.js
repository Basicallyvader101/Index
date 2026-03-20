function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeMenu();
    }
});

window.addEventListener("resize", function () {
    if (window.innerWidth > 1024) {
        closeMenu();
    }
});