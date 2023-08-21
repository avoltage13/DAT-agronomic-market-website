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

// FiltersBtn

const filtBtnOpen = document.querySelector('.products__filter-button');
const filtBtnClose = document.querySelector('.filters__back-button');
const filtBack = document.querySelector('.filters')
const filtMenu = document.querySelector('.filters__body');

filtBtnOpen.addEventListener('click', () => {
    body.classList.toggle('block-scroll');
    filtMenu.classList.add('filters__body--opend');
    filtBack.classList.add('filters--opend');
});

filtBtnClose.addEventListener('click', () => {
    body.classList.toggle('block-scroll');
    filtMenu.classList.remove('filters__body--opend');
    filtBack.classList.remove('filters--opend');
});

// products menus expand btns

const sortBtn = document.querySelector('.products__sort-button');
const sortMenu = document.querySelector('.products__sort-items');
const catMainMenuBtn = document.querySelector('.products__categories-button');
const catMainMenu = document.querySelector('.products__categories-items');

sortBtn.addEventListener('click', () => {
    sortBtn.classList.toggle('products__sort-button--expanded');
    sortMenu.classList.toggle('products__sort-items--expanded');
    catMainMenuBtn.classList.remove('products__categories-button--expanded');
    catMainMenu.classList.remove('products__categories-items--expanded');
});

catMainMenuBtn.addEventListener('click', () => {
    catMainMenuBtn.classList.toggle('products__categories-button--expanded');
    catMainMenu.classList.toggle('products__categories-items--expanded');
    sortBtn.classList.remove('products__sort-button--expanded');
    sortMenu.classList.remove('products__sort-items--expanded');
});

// expand products index form

const expIndexBtn = document.querySelector('.product__goods-page-selector-expand-index-button');
const formPageIndex = document.querySelector('.product__goods-page-selector-expand-index-input-form');

expIndexBtn.addEventListener('click', () => {
    expIndexBtn.classList.toggle('product__goods-page-selector-expand-index-button--expanded');
    formPageIndex.classList.toggle('product__goods-page-selector-expand-index-input-form--expanded');
});

// fake products clone staff

const prodContainer = document.querySelector('.products__goods-items');
const prodChild = Array.from(prodContainer.children).slice(0, 5);

function addProdChild() {
    prodChild.forEach((addClone) => {
        let clone = addClone.cloneNode(true);
        prodContainer.appendChild(clone);
    });
};

function removeChild(container, count) {
    const cN = container.childNodes;
    const start = cN.length - count;
    for (let i = cN.length - 1; i >= start; i--) {
        container.removeChild(cN[i]);
    }
}

function controlChild() {
    let sWidth = window.innerWidth;
    let cNum = prodContainer.children.length;
    if (sWidth <= 561 && cNum > 5) {
        const countForDel = Math.abs(cNum - 5);
        removeChild(prodContainer, countForDel);
        cNum = prodContainer.children.length;
    }
    if (sWidth >= 562 && cNum <= 5 && cNum < 10) {
        addProdChild()
        cNum = prodContainer.children.length;
    }
    if (sWidth >= 839 && cNum <= 10 && cNum < 15) {
        addProdChild()
        cNum = prodContainer.children.length;
    }
    else if (cNum >= 15 && sWidth < 839) {
        removeChild(prodContainer, 5);
        cNum = prodContainer.children.length;
    }
};

window.addEventListener('load', controlChild);
setInterval(controlChild, 1000);
window.addEventListener("orientationchange",() => {
    setTimeout(() => {
        controlChild()
    }, 200);
});

// replace child for product categories

const prodSourceCont = document.querySelector('.products__categories-button-wrap');
const prodDestCont = document.querySelector('.product__goods-side-categories');
const prodCategList = document.querySelector('.products__categories-items');
let replaceIsDone = 0;

function prodCategAdaptiv() {
    let sWidth = window.innerWidth;
    function replaceProdCat() {
        prodDestCont.appendChild(prodCategList);
        replaceIsDone = 1;
    };
    function backProdCat() {
        prodSourceCont.appendChild(prodCategList);
        replaceIsDone = 0;
    };
    if (sWidth >= 1023 && replaceIsDone === 0) {
        replaceProdCat();
    }
    if (sWidth < 1023 && replaceIsDone === 1) {
        backProdCat();
    }
};

window.addEventListener('load', prodCategAdaptiv);
setInterval(prodCategAdaptiv, 1000);
window.addEventListener("orientationchange",() => {
    setTimeout(() => {
        prodCategAdaptiv()
    }, 200);
});

//categories text swap

const catProdBtn = document.querySelector('.products__categories-button');
const catProdRadio = document.querySelectorAll('.products__categories-item');
let labelTxt;
let spanTxt;

function getCatText() {
    let selBtn;
    const radioBtn = document.querySelectorAll('.products__categories-item > input')
    radioBtn.forEach((r) => {
        if (r.checked) {
            selBtn = r;
        }
    });
    if (selBtn) {
        const radioId = selBtn.id;
        const label = document.querySelector(`label[for="${radioId}"]`);
        const span = label.querySelector('span');
        labelTxt = Array.from(label.childNodes)
            .filter((node) => node.nodeType === Node.TEXT_NODE)
            .map((node) => node.textContent.trim())
            .join('');
        spanTxt = span.innerText;
    }
}

function replaceCatText() {
    getCatText();
    const counter = document.createElement("span");
    const arrow = document.createElement("span");
    counter.className = "products__categories-button-counter";
    arrow.className = "icon-arrow";
    counter.textContent = spanTxt;
    catProdBtn.innerHTML = labelTxt + ' ' + counter.outerHTML + arrow.outerHTML;
}

catProdRadio.forEach((a) => {
    a.addEventListener('change', replaceCatText);
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