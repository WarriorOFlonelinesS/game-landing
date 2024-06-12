document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobile-nav');
  const closeMenu = document.getElementById('close-menu');

  const openMenu = () => {
    mobileNav.style.visibility = 'visible';
    mobileNav.style.opacity = '1';
    mobileNav.classList.add('open');
  };

  const closeMenuHandler = () => {
    mobileNav.style.opacity = '0';
    setTimeout(() => {
      mobileNav.classList.remove('open');
      mobileNav.style.visibility = 'hidden';
    }, 300); // 300ms should match the CSS transition duration
  };

  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    openMenu();
  });

  closeMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    closeMenuHandler();
  });

  document.addEventListener('click', (event) => {
    if (!mobileNav.contains(event.target) && !burger.contains(event.target)) {
      closeMenuHandler();
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      const answer = item.querySelector('.faq-answer');
      const isOpen = answer.style.display === 'block';

      faqItems.forEach((i) => {
        i.querySelector('.faq-answer').style.display = 'none';
      });

      if (!isOpen) {
        answer.style.display = 'block';
      }
    });
  });
});
