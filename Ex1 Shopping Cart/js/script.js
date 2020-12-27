//Define UI elements
let cartList = document.querySelector('#cart-list');
let clearBtn = document.querySelector('#clear-cart-btn');
let itemBtn1 = document.querySelector('.item-button-1');
let itemBtn2 = document.querySelector('.item-button-2');
let itemBtn3 = document.querySelector('.item-button-3');

//Define event listeners
itemBtn1.addEventListener('click', addToCartItem1);
itemBtn2.addEventListener('click', addToCartItem2);
itemBtn3.addEventListener('click', addToCartItem3);
cartList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearCart);
document.addEventListener('DOMContentLoaded', getCarts);

//Define functions
function addToCartItem1(e) {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(document.getElementById('item-button-1').parentNode.parentNode.firstElementChild.textContent));
    let btn = document.createElement('button');
    btn.setAttribute('id', 'removeBtn');
    btn.textContent = 'Remove';
    li.appendChild(btn);
    cartList.appendChild(li);

    storeCartInLS(document.getElementById('item-button-1').parentNode.parentNode.firstElementChild.textContent);
}

function addToCartItem2(e) {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(document.getElementById('item-button-2').parentNode.parentNode.firstElementChild.textContent));
    let btn = document.createElement('button');
    btn.setAttribute('id', 'removeBtn');
    btn.textContent = 'Remove';
    li.appendChild(btn);
    cartList.appendChild(li);

    storeCartInLS(document.getElementById('item-button-2').parentNode.parentNode.firstElementChild.textContent);
}

function addToCartItem3(e) {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(document.getElementById('item-button-3').parentNode.parentNode.firstElementChild.textContent));
    let btn = document.createElement('button');
    btn.setAttribute('id', 'removeBtn');
    btn.textContent = 'Remove';
    li.appendChild(btn);
    cartList.appendChild(li);

    storeCartInLS(document.getElementById('item-button-3').parentNode.parentNode.firstElementChild.textContent);
}

function removeItem(e) {
    if (e.target.hasAttribute("id")) {
        if (confirm("Are you sure?")) {
            let ele = e.target.parentElement;
            ele.remove();

            removeFromLS(ele);
        }
    }
}

function clearCart(e) {
    //cartList.innerHTML = "";

    while (cartList.firstChild) {
        cartList.removeChild(cartList.firstChild);
    }

    localStorage.clear();
}

//Store Cart in LS
function storeCartInLS(cart) {
    let carts;
    if (localStorage.getItem('carts') === null) {
        carts = [];
    } else {
        carts = JSON.parse(localStorage.getItem('carts'));
    }
    carts.push(cart);

    localStorage.setItem('carts', JSON.stringify(carts));
}

function getCarts() {
    let carts;
    if (localStorage.getItem('carts') === null) {
        carts = [];
    } else {
        carts = JSON.parse(localStorage.getItem('carts'));
    }

    carts.forEach(cart => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(cart));
        let btn = document.createElement('button');
        btn.setAttribute('id', 'removeBtn');
        btn.textContent = 'Remove';
        li.appendChild(btn);
        cartList.appendChild(li);
    });
}

function removeFromLS(cartItem) {
    let carts;
    if (localStorage.getItem('carts') === null) {
        carts = [];
    } else {
        carts = JSON.parse(localStorage.getItem('carts'));
    }

    let li = cartItem.firstChild;

    carts.forEach((cart, index) => {
        if (li.textContent.trim() === cart) {
            carts.splice(index, 1);
        }
    });
    localStorage.setItem('carts', JSON.stringify(carts));
}
