

// get Linkbox, icon, active and toggler using document.querySelector
const iconBtn = document.querySelector(".icon");
const linkbox = document.querySelector(".link-box");
const active = document.querySelector(".active");
const toggler = document.querySelector(".toggler");

// This shows and hides the link-box menu when toggler is click
function show_hide_menu() {
    linkbox.classList.toggle("active");
}