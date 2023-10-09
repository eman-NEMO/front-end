window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const logo = document.getElementById('logo');

    if (window.scrollY > 1) {
        navbar.classList.add('scrolled');
        logo.src='images/bakery-color.png'
      
    } else {
        navbar.classList.remove('scrolled');
        logo.src='images/bakery-light-1.png'
    }
});