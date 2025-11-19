// ====== SMOOTH SCROLL ======
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    window.scrollTo({
      top: target.offsetTop - 60,
      behavior: 'smooth'
    });
  });
});

// ====== ACTIVE NAV HIGHLIGHT ======
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ====== SKILL BAR ANIMATION ======
const skillBars = document.querySelectorAll('.skill-level');
const skillsSection = document.querySelector('.skills-section');

function animateSkills() {
  const sectionPosition = skillsSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;

  if (sectionPosition < screenPosition) {
    skillBars.forEach(bar => {
      bar.style.transition = 'width 1.5s ease';
      bar.style.opacity = '1';
    });
  }
}

window.addEventListener('scroll', animateSkills);

// ====== CONTACT FORM MESSAGE ======
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for reaching out! Your message has been sent successfully.');
  contactForm.reset();
});
