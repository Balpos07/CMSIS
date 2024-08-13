document.addEventListener("DOMContentLoaded", function () {
  // Dark/Light Mode Toggle
  const modeToggle = document.getElementById("modeToggle");
  const donationForm = document.getElementById("donationForm");

  if (modeToggle) {
    modeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      if (document.body.classList.contains("dark-mode")) {
        modeToggle.textContent = "Light Mode";
      } else {
        modeToggle.textContent = "Dark Mode";
      }
    });
  }

  // Video Play Functionality
  const playButtons = document.querySelectorAll(".play-btn");
  playButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const videoSrc = button.getAttribute("data-video");
      const videoElement = document.createElement("video");
      videoElement.src = videoSrc;
      videoElement.controls = true;
      videoElement.autoplay = true;
      button.parentElement.innerHTML = "";
      button.parentElement.appendChild(videoElement);
    });
  });

  // Donation Form Validation
  if (donationForm) {
    donationForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const amountInput = document.getElementById("amount");

      let valid = true;

      if (nameInput.value.trim() === "") {
        valid = false;
        alert("Please enter your name.");
      }

      if (emailInput.value.trim() === "" || !validateEmail(emailInput.value)) {
        valid = false;
        alert("Please enter a valid email address.");
      }

      if (
        amountInput.value.trim() === "" ||
        isNaN(amountInput.value) ||
        parseFloat(amountInput.value) <= 0
      ) {
        valid = false;
        alert("Please enter a valid donation amount.");
      }

      if (valid) {
        alert("Thank you for your donation!");
        donationForm.reset();
      }
    });
  }

  // Email Validation Function
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  }
});
