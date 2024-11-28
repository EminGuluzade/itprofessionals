const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
    const menuOpen = document.getElementById("menuOpen");
    const menuClose = document.getElementById("menuClose");
    menuOpen.classList.toggle("inactive");
    menuClose.classList.toggle("inactive");
  });
}

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const isOpen = answer.style.maxHeight;
    const plusIcon = question.querySelector(".plus-icon");
    const minusIcon = question.querySelector(".minus-icon");

    // Reset all
    document.querySelectorAll(".faq-answer").forEach((ans) => {
      ans.style.maxHeight = null;
      ans.previousElementSibling.querySelector(".plus-icon").style.display =
        "block";
      ans.previousElementSibling.querySelector(".minus-icon").style.display =
        "none";
    });

    // Toggle current
    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
    }
  });
});
