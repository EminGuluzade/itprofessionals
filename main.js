// Menu
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle");
  const body = document.body;

if (navToggle) {
  navToggle.addEventListener("click", () => {
    body.classList.toggle('menu-open');
    navMenu.classList.toggle("show-menu");
    const menuOpen = document.getElementById("menuOpen");
    const menuClose = document.getElementById("menuClose");
    menuOpen.classList.toggle("inactive");
    menuClose.classList.toggle("inactive");
  });
}

//FAQ
const faqQuestions = document.querySelectorAll(".faq-question");
const faqItem = document.querySelectorAll(".faq-item");

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
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

    document.querySelectorAll(".faq-item").forEach((item) => {
      item.classList.remove("active-faq-item");
    });

    // Toggle current
    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
      item.classList.add("active-faq-item"); 
    }
  });
});

//Footer
document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  if (currentYear) {
    document.getElementById("footer-date").innerText = currentYear;
  }
});
