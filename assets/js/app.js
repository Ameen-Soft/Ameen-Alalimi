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

const menuBtn = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

emailjs.init("L2Nl9fouu8mSnjI34");

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_8h10y0a", "template_6niizr6", this).then(
    () => {
      alert("تم إرسال الرسالة بنجاح!");
      contactForm.reset();
    },
    (error) => {
      console.error("فشل الإرسال:", error);
      alert("حدث خطأ أثناء إرسال الرسالة، حاول مرة أخرى.");
    }
  );
});
