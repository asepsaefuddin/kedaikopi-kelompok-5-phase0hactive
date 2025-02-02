// toggle class aktif hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// toggle search form
const searchForm = document.querySelector('.search-form');
const seacrhBox = document.querySelector('#search-box');
document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle("active");
  seacrhBox.focus();
  e.preventDefault()
};
// toggle shoping cart
const cartShopping = document.querySelector('.shopping-cart');
const tombolBelanja = document.querySelector('#shopping-cart-button');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  cartShopping.classList.toggle('active');
  e.preventDefault();
}
// klik di luar elements
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector('#search-button')
const sc = document.querySelector('#shopping-cart-button');
document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !searchForm.contains(e.target)) {
    cartShopping.classList.remove("active");
  }
});


// modal box
const modal = document.getElementById('item-detail-modal');
const closeModalButton = document.querySelector('.close-icon');

const detailButtons = document.querySelectorAll('.item-detail-button');

detailButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault(); 
    modal.style.display = 'flex'; 
  });
});

closeModalButton.addEventListener('click', (event) => {
  event.preventDefault(); 
  modal.style.display = 'none'; 
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});