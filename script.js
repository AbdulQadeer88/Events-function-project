
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // show/hide menu
    menuToggle.classList.toggle('active'); // rotate icon if needed
  });

