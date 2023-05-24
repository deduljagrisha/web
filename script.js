var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu");

function openMenu() {
  menu.classList.add("open");
  menu.removeEventListener("animationend", closeMenu);
  menu.addEventListener("animationend", onAnimationEnd);
}

function closeMenu() {
  menu.classList.remove("open");
  menu.removeEventListener("animationend", onAnimationEnd);
  menu.addEventListener("animationend", closeMenu);
}

function onAnimationEnd(event) {
  if (event.animationName === "slide-out") {
    menu.style.display = "none";
  }
}

menuButton.addEventListener("click", function () {
  if (menu.style.display === "none" || !menu.classList.contains("open")) {
    menu.style.display = "block";
    openMenu();
  } else {
    closeMenu();
  }
});

window.addEventListener('click', function(e){
  if (!document.getElementById('menu').contains(e.target) && !document.getElementById('menu-button').contains(e.target)){
    closeMenu();
  }
});

var closeButton = document.getElementById("close-button");

closeButton.addEventListener("click", function () {
  if (menu.style.display === "none" || !menu.classList.contains("open")) {
    menu.style.display = "block";
    openMenu();
  } else {
    closeMenu();
  }
});

