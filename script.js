function showModal(imgSrc, title, byline) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-image");
  const modalCaption = document.getElementById("modal-caption");

  modalImg.src = imgSrc;
  modalCaption.innerHTML = `<h3>${title}</h3><p>${byline}</p>`;
  modal.style.display = "block";
}

document.querySelector(".close").onclick = function () {
  document.getElementById("modal").style.display = "none";
};

window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

