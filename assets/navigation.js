'use strict';

const menu = document.querySelector('.menu');
const navigation = document.querySelector('#site-nav');
const mobile = window.matchMedia('(max-width: 760px)');

function setMenu(expanded) {
  menu.hidden = !mobile.matches;
  menu.setAttribute('aria-expanded', String(expanded));
  navigation.classList.toggle('is-collapsed', mobile.matches && !expanded);
}

setMenu(false);
mobile.addEventListener('change', () => setMenu(false));
menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
navigation.addEventListener('click', event => {
  if (event.target.closest('a') && mobile.matches) setMenu(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menu.focus();
  }
});

