
// Додає тінь, коли searchInput у фокусі
const searchBox = document.querySelector('.header__search-form');
const searchInput = document.querySelector('.header__search-input');

searchInput.addEventListener('focus', (event) => {
    searchBox.style.boxShadow = '0 9px 10px rgba(0,0,0, .4)';
});

searchInput.addEventListener('blur', (event) => {
    searchBox.style.boxShadow = '';
});