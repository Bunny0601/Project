const modals = document.querySelector(".modal");
const Overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
console.log(btnOpenModal);

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", function () {
    modals.classList.remove("hidden");
    Overlay.classList.remove("hidden");
  });
}

let CloseModal = function () {
  modals.classList.add("hidden");
  Overlay.classList.add("hidden");
};

Overlay.addEventListener("click", CloseModal);
btnCloseModal.addEventListener("click", CloseModal);
