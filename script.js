// script.js
document.addEventListener('DOMContentLoaded', function(){
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const navItems = document.querySelectorAll('.nav-item');

  // Toggle mobile nav
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Change navbar on scroll + highlight active section
  function onScroll(){
    if(window.scrollY > 50){
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    document.querySelectorAll('section[id]').forEach(section => {
      const rect = section.getBoundingClientRect();
      const id = section.id;
      const link = document.querySelector('.nav-item[href="#' + id + '"]');
      if(link){
        if(rect.top <= 100 && rect.bottom >= 100){
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Smooth scroll offset
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      const offset = navbar.offsetHeight;
      const elementPos = target.getBoundingClientRect().top + window.scrollY;
      const offsetPos = elementPos - offset;

      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth'
      });

      // Close mobile nav after click
      if(navLinks.classList.contains('open')){
        navLinks.classList.remove('open');
      }
    });
  });
});
