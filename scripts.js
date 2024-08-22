document.addEventListener("DOMContentLoaded", function () {
  const modeToggle = document.getElementById("modeToggle");
  const menuIcon = document.getElementById("menuIcon");
  const navLinks = document.getElementById("navLinks");
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Dark/Light Mode Toggle
  modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    modeToggle.textContent = document.body.classList.contains("dark-mode")
      ? "Light"
      : "Dark";
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

  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
  }

  // YouTube Video Modal Functionality
  const videoThumbnails = document.querySelectorAll(".video-box img");
  const videoModal = document.getElementById("videoModal");
  const videoPlayer = document.getElementById("videoPlayer");
  const closeModal = document.querySelector(".close-modal");

  videoThumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      const videoSrc = thumbnail.dataset.video;
      videoPlayer.src = `https://www.youtube.com/embed/${`https://youtu.be/CnbjPFwkiTQ?si=r6JgQTUxEprYuMPU`}?autoplay=1`;
      videoModal.style.display = "flex";
    });
  });

  closeModal.addEventListener("click", () => {
    videoModal.style.display = "none";
    videoPlayer.src = ""; // Stop the video
  });

  // Close modal when clicking outside the modal content
  window.addEventListener("click", (event) => {
    if (event.target === videoModal) {
      videoModal.style.display = "none";
      videoPlayer.src = ""; // Stop the video
    }
  });
});
