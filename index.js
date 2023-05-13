let view = document.querySelector("#view");
let to = document.querySelector("#scrollTO");

function downloaded() {
    view.classList.toggle("show");
    to.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}
