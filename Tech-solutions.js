// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Fade-in sections on scroll
const animatedSections = document.querySelectorAll('[data-animate]');

const fadeInOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    animatedSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < triggerBottom) {
            section.classList.add('active');
        }
    });
};

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// Initialize tsparticles for hero background
tsParticles.load("tsparticles", {
    particles: {
        number: { value: 50 },
        color: { value: "#ff9800" },
        shape: { type: "circle" },
        opacity: { value: 0.6 },
        size: { value: { min: 1, max: 4 } },
        move: { enable: true, speed: 2 }
    },
    interactivity: {
        events: { onhover: { enable: true, mode: "repulse" } }
    },
    detectRetina: true
});
// Mobile Device Detection and Modal
function isMobileDevice() {
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
}

window.addEventListener('load', () => {
    if(isMobileDevice()){
        const modal = document.getElementById('mobile-modal');
        const closeBtn = document.querySelector('.modal .close');
        modal.style.display = 'block';

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if(e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});
