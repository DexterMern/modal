let $ = document;

const button = $.querySelector(".button");
const modalParent = $.querySelector(".modal-parent");
const x = $.querySelector(".X");
const section = $.querySelector(".section");

function showModal() {
  modalParent.style.display = "block";
  section.style.filter = "blur(10px)";
}
function hideModalWithX() {
  modalParent.style.display = "none";
  section.style.filter = "blur(0px)";
}

button.addEventListener("click", showModal);
x.addEventListener("click", hideModalWithX);
