// Fitur search filter group
document.getElementById("search").addEventListener("input", function() {
    const query = this.value.toLowerCase();
    const groups = document.querySelectorAll(".group-card");
  
    groups.forEach(group => {
      const text = group.innerText.toLowerCase();
      group.style.display = text.includes(query) ? "block" : "none";
    });
  });
  
  // Fitur tombol join
  document.querySelectorAll(".join-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      alert("You joined this group!");
    });
  });
  