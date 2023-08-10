/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// "use strict";
// //________________________________________________

// //check Webp compatibility

// import * as flsFunctions from "./modules/functions.js";
// flsFunctions.isWebp();

// //script for no reload page when press empty links or etc.

// document.addEventListener("click", (noReload) => {
//     const link = noReload.target.closest('a');
//     if (noReload.target.matches('a')) {
//         if (link && !link.getAttribute('href')) {
//             noReload.preventDefault();
//         }
//     }
//     if (noReload.target.matches('img')) {
//         if (link && !link.getAttribute('href')) {
//             noReload.preventDefault();
//         }
//     }
//     if (noReload.target.matches('picture')) {
//         if (link && !link.getAttribute('href')) {
//             noReload.preventDefault();
//         }
//     }
// });

// //sibe menu btn

// const menuBtn = document.querySelector('.header__menu-button');
// const sidebar = document.querySelector('.sidebar__body');
// const header = document.querySelector('.header');
// const body = document.querySelector('body');
// const animMenu = [
//     document.querySelector('.anim__line-1'),
//     document.querySelector('.anim__line-2'),
//     document.querySelector('.anim__line-3'),
//     document.querySelector('.anim__line-4'),
//     document.querySelector('.anim__circle-1'),
//     document.querySelector('.anim__circle-2'),
//     document.querySelector('.anim__circle-3'),
//     document.querySelector('.anim__circle-4'),
// ]

// menuBtn.addEventListener('click', () => {
//     body.classList.toggle('block-scroll');
//     header.classList.toggle('header--opend');
//     sidebar.classList.toggle('sidebar__body--opend');
//     animMenu[0].classList.toggle('anim__line-1--opend');
//     animMenu[1].classList.toggle('anim__line-2--opend');
//     animMenu[2].classList.toggle('anim__line-3--opend');
//     animMenu[3].classList.toggle('anim__line-4--opend');
//     animMenu[4].classList.toggle('anim__circle-1--opend');
//     animMenu[5].classList.toggle('anim__circle-2--opend');
//     animMenu[6].classList.toggle('anim__circle-3--opend');
//     animMenu[7].classList.toggle('anim__circle-4--opend');
// });

// //sidebar tel expand menu 

// const sideTelMenu = document.querySelector('.sidebar__tel-items');
// const sideTelExpandBtn = document.querySelector('.sidebar__expand-tel-button');

// sideTelExpandBtn.addEventListener('click', () => {
//     sideTelMenu.classList.toggle('sidebar__tel-items--expanded');
//     sideTelExpandBtn.classList.toggle('sidebar__expand-tel-button--expanded');
// });

// //main tel expand menu

// const mainTelMenu = document.querySelector('.main__tel-items');
// const mainTelExpandBtn = document.querySelector('.main__expand-tel-button');

// mainTelExpandBtn.addEventListener('click', () => {
//     mainTelMenu.classList.toggle('main__tel-items--expanded');
//     mainTelExpandBtn.classList.toggle('main__expand-tel-button--expanded');
// });

// // expand header about

// const headAboutBtn = document.querySelector('.header__about-item-expand-button');
// const headAboutMenu = document.querySelector('.header__about-items');

// headAboutBtn.addEventListener('click', () => {
//     headAboutBtn.classList.toggle('header__about-item-expand-button--expanded');
//     headAboutMenu.classList.toggle('header__about-items--expanded');
// });

// //expand categories main

// const catBtn = document.querySelector('.categories__expand-button');
// const catMenu = document.querySelector('.categories__items');

// catBtn.addEventListener('click', () => {
//     catMenu.classList.toggle('categories__items--expanded');
//     catBtn.classList.toggle('categories__expand-button--expanded')
// });

// // swipers staff

// import Swiper from "swiper";
// import { Navigation, A11y, Controller, Pagination, Keyboard } from 'swiper/modules';

// const swiperMain = new Swiper('.card__slider-main', {
//     modules: [Navigation, A11y, Controller],
//     a11y: {
//         prevSlideMessage: 'Попередній слайд',
//         nextSlideMessage: 'Наступний слайд',
//         firstSlideMessage: 'Перший слайд',
//         lastSlideMessage: 'Останній слайд',
//         notificationClass: 'swiper-notification',
//         containerMessage: 'Товар',
//         containerRoleDescriptionMessage: 'Слайдер з товарами',
//         itemRoleDescriptionMessage: 'Слайд з товарами',
//     },
//     navigation: {
//         nextEl: '.card__slider-main-next-button',
//         prevEl: '.card__slider-main-prev-button',
//     },
//     slidesPerGroup: 1,
//     centeredSlides: true,
//     initialSlide: 2,
// });

// const swiperSub = new Swiper('.card__slider-sub', {
//     modules: [A11y, Controller],
//     a11y: {
//         prevSlideMessage: 'Попередній слайд',
//         nextSlideMessage: 'Наступний слайд',
//         firstSlideMessage: 'Перший слайд',
//         lastSlideMessage: 'Останній слайд',
//         notificationClass: 'swiper-notification',
//         containerMessage: 'Товар',
//         containerRoleDescriptionMessage: 'Слайдер з товарами',
//         itemRoleDescriptionMessage: 'Слайд з товарами',
//     },
//     slidesPerGroup: 1,
//     slidesPerView: 3,
//     spaceBetween: 7,
//     centeredSlides: true,
//     initialSlide: 2,
// });

// swiperMain.controller.control = swiperSub;
// swiperSub.controller.control = swiperMain;

// swiperSub.on('click', function () {
//     swiperSub.slideTo(swiperSub.clickedIndex);
// });

// const swiper2 = new Swiper('.promotion__slider', {
//     modules: [Navigation, Pagination, Keyboard, A11y],
//     loop: true,
//     a11y: {
//         prevSlideMessage: 'Попередній слайд',
//         nextSlideMessage: 'Наступний слайд',
//         firstSlideMessage: 'Перший слайд',
//         lastSlideMessage: 'Останній слайд',
//         paginationBulletMessage: 'Перейти до слайда {{index}}',
//         notificationClass: 'swiper-notification',
//         containerMessage: 'Акції',
//         containerRoleDescriptionMessage: 'Слайдер з Акціями',
//         itemRoleDescriptionMessage: 'Слайд з Акцію',
//     },
//     keyboard: {
//         enabled: true,
//     },
//     pagination: {
//         el: '.promotion__pagination',
//         clickable: true,
//     },
//     navigation: {
//         nextEl: '.promotion__button-next',
//         prevEl: '.promotion__button-prev',
//     },
//     slidesPerGroup: 1,
//     spaceBetween: 10,
//     centeredSlides: true,
//     breakpoints: {
//         320: {
//             slidesPerView: '1.22',
//             loopedSlides: 1.22,
//         },
//         345: {
//             slidesPerView: '1.29',
//             loopedSlides: 1.29,
//         },
//         360: {
//             slidesPerView: '1.37',
//             loopedSlides: 1.37,
//         },
//         390: {
//             slidesPerView: '1.45',
//             loopedSlides: 1.45,
//         },
//         425: {
//             slidesPerView: '1.6',
//             slidesPerGroup: 1,
//             loopedSlides: 1.6,
//         },
//         480: {
//             slidesPerView: '1.8',
//             loopedSlides: 1.8,
//         },
//         540: {
//             slidesPerView: '2',
//             slidesPerGroup: 2,
//             loopedSlides: 2,
//             centeredSlides: false,
//         },
//         620: {
//             slidesPerView: '2.3',
//             slidesPerGroup: 1,
//             loopedSlides: 2.3,
//         },
//         680: {
//             slidesPerView: '2.5',
//             slidesPerGroup: 1,
//             loopedSlides: 2.5,
//         },
//         767: {
//             slidesPerView: '2.8',
//             slidesPerGroup: 1,
//             loopedSlides: 2.8,
//         },
//         820: {
//             slidesPerView: '3',
//             slidesPerGroup: 3,
//             loopedSlides: 3,
//             centeredSlides: false,
//         },
//         1110: {
//             slidesPerView: '4',
//             slidesPerGroup: 4,
//             loopedSlides: 4,
//             spaceBetween: 15,
//             centeredSlides: false,
//         },
//     }
// });
// // stars script

// const starsOrig = document.querySelectorAll('[id^="star"]');
// const starsArray = Array.from(starsOrig);
// const stars = starsArray.reverse();

// stars.forEach((star, num) => {
//     star.addEventListener('change', () => {
//         if (star.checked) {
//             for (let i = 0; i < num; i++) {
//                 stars[i].checked = true;
//             }
//         }
//         else {
//             for (let i = num + 1; i < stars.length; i++) {
//                 stars[i].checked = false;
//             }
//         }
//     });
// });

// //Content selector

// const DescCont = [
//     document.querySelector('.description__content-specifications'),
//     document.getElementById('description'),
//     document.querySelector('.description__reviews-wrap'),
//     document.getElementById('feedback'),
//     document.querySelector('.description__content-wrap'),
// ];

// function checkDescSelect() {
//     if (DescCont[1].checked) {
//         DescCont[0].classList.add('description__content-specifications--startpage');
//     }
//     if (DescCont[3].checked) {
//         DescCont[2].classList.add('description__reviews-wrap--startpage');
//     }
// }

// document.addEventListener('load', (checkDescSelect()));

// DescCont[1].addEventListener('change', () => {
//     DescCont[0].classList.remove('description__content-specifications--startpage');
//     DescCont[2].classList.remove('description__reviews-wrap--startpage');
//     if (DescCont[1].checked) {
//         DescCont[2].classList.remove('description__reviews-wrap--show');
//         DescCont[4].classList.remove('description__content-wrap--reviews-opend');
//         DescCont[0].classList.add('description__content-specifications--show');
//     }
// });

// DescCont[3].addEventListener('change', () => {
//     DescCont[0].classList.remove('description__content-specifications--startpage');
//     DescCont[2].classList.remove('description__reviews-wrap--startpage');
//     if (DescCont[3].checked) {
//         DescCont[0].classList.remove('description__content-specifications--show');
//         DescCont[4].classList.add('description__content-wrap--reviews-opend');
//         DescCont[2].classList.add('description__reviews-wrap--show');
//     }
// });

// // footer tel expand 

// const footTelMenu = document.querySelector('.footer__tel-items');
// const footTelExpandBtn = document.querySelector('.footer__expand-tel-button');

// footTelExpandBtn.addEventListener('click', () => {
//     footTelMenu.classList.toggle('footer__tel-items--expanded');
//     footTelExpandBtn.classList.toggle('footer__expand-tel-button--expanded');
// });

// // footer pageup btn

// const footPgUpBtn = document.querySelector('.footer__pageup-button');

// function checkScrlPos() {
//     const windowHeight = window.innerHeight;
//     const fullHeight = document.documentElement.scrollHeight;
//     const scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;

//     if (scrollPosition >= fullHeight - windowHeight - 200) {
//         footPgUpBtn.classList.add('footer__pageup-button--show');
//     }
//     else {
//         footPgUpBtn.classList.remove('footer__pageup-button--show');
//     }
// }

// window.addEventListener('scroll', () => {
//     checkScrlPos();
// }, { passive: true });

// footPgUpBtn.addEventListener("click", function goTop() {
//     if (window.scrollY > 0) {
//         window.scrollBy(0, -40);
//         setTimeout(goTop, 0);
//     }
// });


//________________________________________________

//expand cart capacity 

const capBtn = document.querySelector('.cart__product-capacity-selector-item-expand-button');
const capMenu = document.querySelector('.cart__product-capacity-selector-items');

capBtn.addEventListener('click', () => {
   capBtn.classList.toggle('cart__product-capacity-selector-item-expand-button--pressed');
   capMenu.classList.toggle('cart__product-capacity-selector-items--expanded');
});

// add reduce quantity

const cartQAddBtn = document.querySelector('.cart__product-quantity-selector-add-button');
const cartQReduceBtn = document.querySelector('.cart__product-quantity-selector-reduce-button');
const qInput = document.getElementById('cart_product-quantity');

qInput.addEventListener('input', () => {
   qInput.value = qInput.value.replace(/\D/g, '');
   if (qInput.value.length > 2) {
      qInput.value = qInput.value.slice(0, 2);
   }
});

cartQAddBtn.addEventListener('click', () => {
   if (qInput.value < 99) {
      qInput.value = parseInt(qInput.value) + 1;
   }
});

cartQReduceBtn.addEventListener('click', () => {
   if (qInput.value > 1 && qInput.value < 100) {
      qInput.value = parseInt(qInput.value) - 1;
   }
});

// close/open cart modal

const body = document.querySelector('body');
const openCartBtn = [document.querySelector('.sidebar__cart-button'), document.querySelector('.main__cart-button')];
const closeCartBtn = [document.querySelector('.cart__close-button'), document.querySelector('.cart__footer-close-button')];
const cartMenu = document.querySelector('.cart');

openCartBtn.forEach((b) => {
   b.addEventListener('click', () => {
      cartMenu.classList.add('cart--opend');
      body.classList.add('block-scroll');
   });
});

closeCartBtn.forEach((b) => {
   b.addEventListener('click', () => {
      cartMenu.classList.remove('cart--opend');
      body.classList.remove('block-scroll');
   });
});
/******/ })()
;