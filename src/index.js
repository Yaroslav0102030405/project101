new Splide('#slider1').mount();
new Splide('#slider2').mount();
new Splide('#slider3').mount();

// Щоб анімація була послудовною AOS
const stack = [];
const delayFactor = 300;

const options = {
  rootMargin: '0px',
  threshold: 0.2,
};

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      stack.push(entry.target);

      const delay = (stack.length - 1) * delayFactor;

      entry.target.setAttribute('data-aos-delay', `${delay}`);

      setTimeout(() => {
        stack.shift();
      }, delay);
    }
  });
};

const observer = new IntersectionObserver(callback, options);

const elementsToTrack = document.querySelectorAll(
  '[data-aos]:not([data-aos-delay])',
);

elementsToTrack.forEach((element) => {
  observer.observe(element);
});

import './js/lang';
import './js/hero-modal';
import './js/modal';
import './js/modal-2';
import './js/scrollPage';
import './js/smoothscroll';
import './js/telegram-1';
import './js/telegram-2';
