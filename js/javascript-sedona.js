var popup = document.querySelector(".search-hotel");
var link = document.querySelector(".btn-search-hotel");

popup.classList.toggle("popup-modal");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("popup-modal");
});

