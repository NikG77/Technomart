var buyLink = document.querySelectorAll(".item-buy");

var buyPopup = document.querySelector(".modal-buy");
var buyClose = buyPopup.querySelector(".modal-close");

buyLink.forEach(function (item) {
    item.addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.classList.add("modal-show-buy");
  });
});

buyClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyPopup.classList.remove("modal-show-buy");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (buyPopup.classList.contains("modal-show-buy")) {
      buyPopup.classList.remove("modal-show-buy");
    }
  }
});
