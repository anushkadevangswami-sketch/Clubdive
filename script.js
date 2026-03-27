<script>
  // OPTION SELECT (only one active)
const options = document.querySelectorAll(".option");

options.forEach(option => {
  option.addEventListener("click", () => {
    options.forEach(o => o.classList.remove("active"));
    option.classList.add("active");
  });
});

  // BROWSE CLUBS BUTTON
  document.querySelector(".primary-btn").addEventListener("click", function() {
  window.location.href = "browse.html";
});
    // window.location.href = "browse.html";
  });

  // TAKE QUIZ BUTTON
  document.querySelector(".secondary-btn").addEventListener("click", function() {
    alert("Starting Quiz...");
    // window.location.href = "quiz.html";
  });

  // SIGN IN BUTTON
  document.querySelector(".signin-btn").addEventListener("click", function() {
    alert("Redirecting to Sign In...");
    // window.location.href = "signin.html";
  });
</script>