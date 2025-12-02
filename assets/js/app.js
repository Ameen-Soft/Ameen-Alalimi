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

const texts = [
  "مطور مواقع",
  "مطور تطبيقات موبايل",
  "بناء انظمة محاسبية",
  "استشارات تقنية",
];
let textIndex = 0; // النص الحالي
let charIndex = 0; // الحرف الحالي
let typingSpeed = 150; // سرعة الكتابة
let deletingSpeed = 90; // سرعة المسح
let pauseTime = 1500; // بقاء النص عند اكتماله

function typeWriter() {
  const element = document.getElementById("typing-text");
  const currentText = texts[textIndex];

  if (charIndex <= currentText.length && charIndex >= 0) {
    element.textContent = currentText.substring(0, charIndex);
  }

  if (charIndex === currentText.length) {
    // بعد اكتمال النص الانتظار ثم البدء في المسح
    setTimeout(() => {
      charIndex--;
      typeWriterLoop();
    }, pauseTime);
  } else {
    charIndex++;
    setTimeout(typeWriter, typingSpeed);
  }
}

function typeWriterLoop() {
  const element = document.getElementById("typing-text");
  const currentText = texts[textIndex];

  if (charIndex >= 0) {
    element.textContent = currentText.substring(0, charIndex);
    charIndex--;
    setTimeout(typeWriterLoop, deletingSpeed);
  } else {
    // الانتقال للنص التالي بعد المسح
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeWriter, 700); // توقف بسيط قبل النص الجديد
  }
}
// بدء الحركة 
typeWriter();
