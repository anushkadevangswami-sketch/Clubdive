// SELECT ALL BUTTONS AND CARDS
const buttons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".card");

// ADD CLICK EVENT TO EACH BUTTON
buttons.forEach(button => {
  button.addEventListener("click", () => {

    // REMOVE ACTIVE CLASS FROM ALL BUTTONS
    buttons.forEach(btn => btn.classList.remove("active"));

    // ADD ACTIVE CLASS TO CLICKED BUTTON
    button.classList.add("active");

    // GET CATEGORY OF CLICKED BUTTON
    const selectedCategory = button.getAttribute("data-category");

    // LOOP THROUGH ALL CARDS
    cards.forEach(card => {
      const cardCategory = card.getAttribute("data-category");

      // SHOW OR HIDE BASED ON MATCH
      if (selectedCategory === "all" || selectedCategory === cardCategory) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

  });
});

function openClub(clubId) {
  window.location.href = "club.html?club=" + clubId;
}