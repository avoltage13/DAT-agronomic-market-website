/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

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

const openCartBtn = [ document.querySelector('.sidebar__cart-button'), document.querySelector('.main__cart-button')];
const closeCartBtn = [ document.querySelector('.cart__close-button'), document.querySelector('.cart__footer-close-button')];
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