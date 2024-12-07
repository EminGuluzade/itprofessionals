// Menu
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

//FAQ
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

//Footer
document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  if(currentYear){
    document.getElementById("footer-date").innerText = currentYear;
  }
});

// Contact

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const mailtoLink = `mailto:info@itprofessionals.ca?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    )}`;

    window.location.href = mailtoLink;
  });
