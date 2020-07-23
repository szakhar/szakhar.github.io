// Icon menu
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');

iconMenu.addEventListener('click', () => {
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
});


// Sorting
const sorting = document.querySelector('.sorting-center');

sorting.addEventListener('click', (event) => {
    event.preventDefault();

    const itemAll = document.querySelectorAll('.sorting__link');
    for(item of itemAll) {
        item.classList.remove('sorting__link--active');
    }

    if (event.target.classList.contains('sorting__link'))
        event.target.classList.add('sorting__link--active');
});


// Dropdown function
function dropDown(link, menu) {
    const dropdownLink = document.querySelector(link);
    const dropdownMenu = document.querySelector(menu);

    dropdownLink.addEventListener('mouseenter', (event) => {
        event.preventDefault();
        dropdownMenu.classList.add('dropdown-show');
    });

    dropdownLink.addEventListener('click', (event) => {
        event.preventDefault();
        dropdownMenu.classList.toggle('dropdown-show');
    });

    // Закриває меню якщо натиснути за межами меню
    document.addEventListener('click', (event) => {
        const close = !event.target.closest('.menu__dropdown');
        if (close && event.target !== dropdownLink) {
            dropdownMenu.classList.remove('dropdown-show');
        }
    });
}

// Dropdown menu
dropDown('.dropdown-menu', '.dropdown');

// Actions menu
dropDown('.actions__basket', '.dropdown-actions');