const timeLine = gsap.timeline({ defaults: { ease: 'power1.out' } });

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
