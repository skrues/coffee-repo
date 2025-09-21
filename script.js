const navToggle = document.querySelector(".navbar");
const navbar = document.querySelector(".ul");

// Toggle nav open/close
navToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Close nav when clicking links
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");

    // If same-page anchor (#id), scroll smoothly
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Always close the nav
    navbar.classList.remove("active");
  });
});


