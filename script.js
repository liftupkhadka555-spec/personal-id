// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


AOS.init({
  duration: 1000,
  once: true
});
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ===== Navbar Scroll Shadow =====
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if(window.scrollY > 50){
    navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.7)";
  } else {
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.5)";
  }
});


