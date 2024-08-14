document.addEventListener("DOMContentLoaded", function () {
  const modeToggle = document.getElementById("modeToggle");
  const menuIcon = document.getElementById("menuIcon");
  const navLinks = document.getElementById("navLinks");
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Dark/Light Mode Toggle
  modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      modeToggle.textContent = "Light";
    } else {
      modeToggle.textContent = "Dark";
    }
  });

  // Sidebar Toggle for Mobile Devices
  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Scroll to Top Button Functionality
  window.onscroll = function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };

  scrollToTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});
