const modal = document.getElementById("modal");
const btn = document.getElementById("openModal");
const close = document.getElementsByClassName("close");

btn.onclick = function Show () {
  modal.style.display = 'block';
};

close.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};