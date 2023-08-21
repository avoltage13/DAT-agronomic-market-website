/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/modules/functions.js
function isWebp() {

    function testWebP(callback) {
        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {
        if (support == true) {
            document.querySelector('body').classList.add('webp');
        }
        else {
            document.querySelector('body').classList.add('no-webp');
        }
    });
}
;// CONCATENATED MODULE: ./src/js/modules/modals.js

//________________________________________________

function cartModal() {

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
}
;// CONCATENATED MODULE: ./src/js/app.js

//________________________________________________

//check Webp compatibility


isWebp();

//script for no reload page when press empty links or etc.

document.addEventListener("click", (noReload) => {
    const link = noReload.target.closest('a');
    if (noReload.target.matches('a')) {
        if (link && !link.getAttribute('href')) {
            noReload.preventDefault();
        }
    }
    if (noReload.target.matches('img')) {
        if (link && !link.getAttribute('href')) {
            noReload.preventDefault();
        }
    }
    if (noReload.target.matches('picture')) {
        if (link && !link.getAttribute('href')) {
            noReload.preventDefault();
        }
    }
});

//sibe menu btn

const menuBtn = document.querySelector('.header__menu-button');
const sidebar = document.querySelector('.sidebar__body');
const header = document.querySelector('.header');
const body = document.querySelector('body');
const animMenu = [
    document.querySelector('.anim__line-1'),
    document.querySelector('.anim__line-2'),
    document.querySelector('.anim__line-3'),
    document.querySelector('.anim__line-4'),
    document.querySelector('.anim__circle-1'),
    document.querySelector('.anim__circle-2'),
    document.querySelector('.anim__circle-3'),
    document.querySelector('.anim__circle-4'),
]

menuBtn.addEventListener('click', () => {
    body.classList.toggle('block-scroll');
    header.classList.toggle('header--opend');
    sidebar.classList.toggle('sidebar__body--opend');
    animMenu[0].classList.toggle('anim__line-1--opend');
    animMenu[1].classList.toggle('anim__line-2--opend');
    animMenu[2].classList.toggle('anim__line-3--opend');
    animMenu[3].classList.toggle('anim__line-4--opend');
    animMenu[4].classList.toggle('anim__circle-1--opend');
    animMenu[5].classList.toggle('anim__circle-2--opend');
    animMenu[6].classList.toggle('anim__circle-3--opend');
    animMenu[7].classList.toggle('anim__circle-4--opend');
});

//sidebar tel expand menu 

const sideTelMenu = document.querySelector('.sidebar__tel-items');
const sideTelExpandBtn = document.querySelector('.sidebar__expand-tel-button');

sideTelExpandBtn.addEventListener('click', () => {
    sideTelMenu.classList.toggle('sidebar__tel-items--expanded');
    sideTelExpandBtn.classList.toggle('sidebar__expand-tel-button--expanded');
});

//main tel expand menu

const mainTelMenu = document.querySelector('.main__tel-items');
const mainTelExpandBtn = document.querySelector('.main__expand-tel-button');

mainTelExpandBtn.addEventListener('click', () => {
    mainTelMenu.classList.toggle('main__tel-items--expanded');
    mainTelExpandBtn.classList.toggle('main__expand-tel-button--expanded');
});

// expand header about

const headAboutBtn = document.querySelector('.header__about-item-expand-button');
const headAboutMenu = document.querySelector('.header__about-items');

headAboutBtn.addEventListener('click', () => {
    headAboutBtn.classList.toggle('header__about-item-expand-button--expanded');
    headAboutMenu.classList.toggle('header__about-items--expanded');
});

//expand categories main

const catBtn = document.querySelector('.categories__expand-button');
const catMenu = document.querySelector('.categories__items');

catBtn.addEventListener('click', () => {
    catMenu.classList.toggle('categories__items--expanded');
    catBtn.classList.toggle('categories__expand-button--expanded')
});

//expand order form

const orderBtn = [
    document.querySelector('.order__form-delivery-region-button'),
    document.querySelector('.order__form-delivery-city-button'),
    document.querySelector('.order__form-delivery-post-button')
];
const orderMenus = [
    document.querySelector('.order__form-delivery-region-items'),
    document.querySelector('.order__form-delivery-city-items'),
    document.querySelector('.order__form-delivery-post-items')
];

orderBtn[0].addEventListener('click', () => {
    orderBtn[0].classList.toggle('order__form-delivery-region-button--opend');
    orderMenus[0].classList.toggle('order__form-delivery-region-items--opend');
    orderBtn[1].classList.remove('order__form-delivery-city-button--opend');
    orderMenus[1].classList.remove('order__form-delivery-city-items--opend');
    orderBtn[2].classList.remove('order__form-delivery-post-button--opend');
    orderMenus[2].classList.remove('order__form-delivery-post-items--opend');
});

orderBtn[1].addEventListener('click', () => {
    orderBtn[1].classList.toggle('order__form-delivery-city-button--opend');
    orderMenus[1].classList.toggle('order__form-delivery-city-items--opend');
    orderBtn[0].classList.remove('order__form-delivery-region-button--opend');
    orderMenus[0].classList.remove('order__form-delivery-region-items--opend');
    orderBtn[2].classList.remove('order__form-delivery-post-button--opend');
    orderMenus[2].classList.remove('order__form-delivery-post-items--opend');
});

orderBtn[2].addEventListener('click', () => {
    orderBtn[2].classList.toggle('order__form-delivery-post-button--opend');
    orderMenus[2].classList.toggle('order__form-delivery-post-items--opend');
    orderBtn[0].classList.remove('order__form-delivery-region-button--opend');
    orderMenus[0].classList.remove('order__form-delivery-region-items--opend');
    orderBtn[1].classList.remove('order__form-delivery-city-button--opend');
    orderMenus[1].classList.remove('order__form-delivery-city-items--opend');
});

//cart info text adaptiv

const cartOrderDestCont = document.querySelectorAll('.order-cart__info-text');
const cartOrderMainCont = document.querySelectorAll('.order-cart__info');
const cartOrderLabel = document.querySelectorAll('.order-cart__label');
let cartOrderDone = 0;

function cartOrder() {
    if (innerWidth >= 1023 && cartOrderDone == 0 ) {
        for (let i = 0; i < cartOrderLabel.length; i++) {
            cartOrderDestCont[i].appendChild(cartOrderLabel[i]);
        }
        cartOrderDone = 1;
    }
    if (innerWidth < 1023 && cartOrderDone == 1) {
        for (let i = 0; i < cartOrderLabel.length; i++) {
            cartOrderMainCont[i].appendChild(cartOrderLabel[i]);
        }
        cartOrderDone = 0;
    }
}

window.addEventListener('load', cartOrder);
window.addEventListener('orientationchange', cartOrder);
setInterval(cartOrder, 1000);

//inputs text swap

const regLbl = document.querySelector('.order__form-delivery-region-button-label');
const regRadio = document.querySelectorAll('.order__form-delivery-region-item');
const regClass = 'order__form-delivery-region-item';
const cityLbl = document.querySelector('.order__form-delivery-city-button-label');
const cityRadio = document.querySelectorAll('.order__form-delivery-city-item');
const cityClass = 'order__form-delivery-city-item';
const postLbl = document.querySelector('.order__form-delivery-post-button-label');
const postRadio = document.querySelectorAll('.order__form-delivery-post-item');
const postClass = 'order__form-delivery-post-item';
let labelTxt;

function getText(radio) {
    let selBtn;
    const radioBtn = document.querySelectorAll(`.${radio} > input`);
    radioBtn.forEach((r) => {
        if (r.checked) {
            selBtn = r;
        }
    });
    if (selBtn) {
        const radioId = selBtn.id;
        const label = document.querySelector(`label[for="${radioId}"]`);
        labelTxt = label.innerText;
    }
};

function replaceText(radio, lbl) {
    getText(radio);
    lbl.textContent = labelTxt;
};

regRadio.forEach((a) => {
    a.addEventListener('change', () => replaceText(regClass, regLbl));
});

cityRadio.forEach((a) => {
    a.addEventListener('change', () => replaceText(cityClass, cityLbl));
});

postRadio.forEach((a) => {
    a.addEventListener('change', () => replaceText(postClass, postLbl));
});

// footer tel expand 

const footTelMenu = document.querySelector('.footer__tel-items');
const footTelExpandBtn = document.querySelector('.footer__expand-tel-button');

footTelExpandBtn.addEventListener('click', () => {
    footTelMenu.classList.toggle('footer__tel-items--expanded');
    footTelExpandBtn.classList.toggle('footer__expand-tel-button--expanded');
});

// footer pageup btn

const footPgUpBtn = document.querySelector('.footer__pageup-button');

function checkScrlPos() {
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;

    if (scrollPosition >= fullHeight - windowHeight - 200) {
        footPgUpBtn.classList.add('footer__pageup-button--show');
    }
    else {
        footPgUpBtn.classList.remove('footer__pageup-button--show');
    }
}

window.addEventListener('scroll', () => {
    checkScrlPos();
}, { passive: true });

footPgUpBtn.addEventListener("click", function goTop() {
    if (window.scrollY > 0) {
        window.scrollBy(0, -40);
        setTimeout(goTop, 0);
    }
});



cartModal();
/******/ })()
;