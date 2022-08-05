const timeLine = gsap.timeline({ defaults: { ease: 'power1.out' } });
const header = document.querySelector('header');
const sections = document.querySelectorAll('.section');
const nav = document.querySelector('.nav');
const navLinks = document.querySelector('.nav__links');

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

navLinks.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
const headerHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

nav.addEventListener('mouseover', headerHover.bind(0.5));

nav.addEventListener('mouseout', headerHover.bind(1));

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
};

const observer = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

sections.forEach(function (section) {
  observer.observe(section);
  section.classList.add('section--hidden');
});
