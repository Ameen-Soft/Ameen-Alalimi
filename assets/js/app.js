const toggle = document.getElementById("darkToggle");
const body = document.body;

if (toggle) {
  toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");

    const currentTheme = body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);

    updateToggleIcon();
  });
}

function updateToggleIcon() {
  if (body.classList.contains("dark")) {
    toggle.classList.remove("fa-moon");
    toggle.classList.add("fa-sun");
  } else {
    toggle.classList.remove("fa-sun");
    toggle.classList.add("fa-moon");
  }
}

// Mobile menu toggle
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (mobileMenuToggle && mobileMenu) {
  mobileMenuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    
    // Toggle icon between bars and times
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenuToggle.classList.remove("fa-times");
      mobileMenuToggle.classList.add("fa-bars");
    } else {
      mobileMenuToggle.classList.remove("fa-bars");
      mobileMenuToggle.classList.add("fa-times");
    }
  });
  
  // Close menu when clicking on a link
  const mobileMenuLinks = mobileMenu.querySelectorAll("a");
  mobileMenuLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      mobileMenuToggle.classList.remove("fa-times");
      mobileMenuToggle.classList.add("fa-bars");
    });
  });
}