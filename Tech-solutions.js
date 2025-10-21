
/* global tsParticles */

const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  navList.classList.toggle('active');
});

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


tsParticles.load("tsparticles", {
  background: {
    color: {
      value: "#0072ff"
    }
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: "#ffffff"
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1
    },
    collisions: {
      enable: true
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce"
      },
      random: false,
      speed: 2,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 80
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: "circle"
    },
    size: {
      value: { min: 1, max: 5 }
    }
  },
  detectRetina: true
});
