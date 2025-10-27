/* global tsParticles */

// =============================
// 🌐 MOBILE MENU TOGGLE
// =============================
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  navList.classList.toggle('active');
});

// =============================
// 🎞️ FADE-IN SCROLL ANIMATION
// =============================
const animatedSections = document.querySelectorAll('[data-animate]');

const fadeInOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  animatedSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
};

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// =============================
// 💫 TYPEWRITER HERO ANIMATION
// =============================
const words = ["Developing Systems", "Designing Systems", "Simple Freelancing"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const animatedWords = document.getElementById("animated-words");

function typeEffect() {
  const currentWord = words[wordIndex];
  const currentText = currentWord.substring(0, charIndex);
  animatedWords.textContent = currentText;

  if (!isDeleting && charIndex < currentWord.length) {
    // Typing forward
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    // Deleting backward
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    // Switch typing/deleting mode
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeEffect, 1200); // pause before deleting
    } else {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 300); // pause before typing next
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

// =============================
// ✨ PARTICLE BACKGROUND
// =============================
// Make sure you have: <div id="tsparticles"></div> in your HTML
tsParticles.load("tsparticles", {
  background: {
    color: {
      value: "#ffffff", // white background
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 120,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#0072ff", // primary blue tone
    },
    links: {
      color: "#99ccff", // soft connecting blue lines
      distance: 150,
      enable: true,
      opacity: 0.25,
      width: 1,
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: true,
      speed: 0.6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 70,
    },
    opacity: {
      value: 0.4,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
});
