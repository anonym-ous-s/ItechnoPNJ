// Fungsi ketika gambar diklik
function cardClicked(subject) {
  alert("You clicked " + subject);
}

// Search filter
document.getElementById("search").addEventListener("input", function () {
  let filter = this.value.toLowerCase();
  let cards = document.querySelectorAll(".material-card");

  cards.forEach(card => {
    let title = card.querySelector(".card-title").textContent.toLowerCase();
    card.style.display = title.includes(filter) ? "block" : "none";
  });
});
