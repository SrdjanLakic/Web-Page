const timeLine = gsap.timeline({ defaults: { ease: 'power1.out' } });
const header = document.querySelector('header');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

timeLine.to('.text', { y: '0%', duration: 2, stagger: 0.25 });
timeLine.to('.slider', { y: '-100%', duration: 2, delay: 1 });
timeLine.to('.intro', { y: '-100%', duration: 1 }, '-=2');
timeLine.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1 });
timeLine.fromTo(
  '.big-text',
  { opacity: 0 },
  { opacity: 1, duration: 1 },
  '-=1'
);

const initialCoords = header.getBoundingClientRect();
window.addEventListener('scroll', function () {
  if (window.scrollY > initialCoords.bottom) {
    nav.classList.add('sticky');
    nav.style.width = '100%';
  } else {
    nav.classList.remove('sticky');
  }
});

document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    console.log('LINK');
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});
