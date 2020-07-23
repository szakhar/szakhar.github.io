// Реализовать веб-страницу для поиска фильмов. При открытии страницы пользователю доступна
// только форма для ввода названия фильма (или части названия) и выбора типа (movie, series, episode).

// После того, как пользователь ввел данные и нажал на кнопку Search, необходимо отправить
// соответствующий запрос к API ресурса OMDB (http://www.omdbapi.com/) с помощью AJAX.

// Если в качестве ответа на запрос вы получили список фильмов, то его необходимо отобразить
// под формой поиска. Если по заданным критериям не будут найдены фильмы, то отобразите
// сообщение Movie not found!.

// Учтите, что OMDB по умолчанию возвращает только первые 10 фильмов. Поэтому необходимо
// реализовать пагинацию для тех случаев, когда под критерии поиска подходит больше,
// чем 10 фильмов. Пагинация – это порядковая нумерация страниц, которая обычно находится вверху
// или внизу страниц сайта. Вероятно, вы видели в интернет-магазинах на страницах с товарами
// кнопки с цифрами 1, 2, 3 и т. д., при нажатии на которые отбражается другой блок товаров.
// Вот такие кнопки и называют пагинацией. Таким образом, при первом поиске необходимо выводить
// первые 10 фильмов и кнопки для перехода по страницам. При клике на такую кнопку необходимо
// отправить запрос с указанием в параметрах требуемой страницы, и полученный результат вывести
// на место текущего списка фильмов.

// Возле каждого фильма должна быть кнопка Details, при нажатии на которую будет выводиться
// подробная информация о фильме. Эту информацию необходимо выводить на этой же странице сразу
// под списком найденных фильмов и пагинацией.

// Все запросы необходимо отправлять, используя AJAX. То есть при нажатии на любые кнопки ваша
// веб-страница не должна обновляться.
// Ссылка на API OMDB: http://www.omdbapi.com/ (необходимо зарегистри роваться для получения API KEY).
// Ссылка на альтернативный API с фильмами (для того случая, если OMDB не будет работать):
// https://developers.themoviedb.org/3/ search/search-movies.
// Если же и этот API не будет работать, вам придется сам остоятельно найти другой доступный
// ресурс и адаптировать под него задание.


const url = `https://www.omdbapi.com/?apikey=ff377d04`;

let searchInput, typeSelect;

const output = document.querySelector('.output');
const details = document.querySelector('.details');
const pagination = document.querySelector('.pagination');
const more = pagination.querySelector('.pagination__more');
const count = more.querySelector('.pagination__count');
const clearBtn = pagination.querySelector('.clear-btn');


// Вивід фільмів на Index Page
fetchCall(showIndex, '', 'Action', 'movie');


// Подія яка робить пошук фільму
searchForm.addEventListener('submit', function(event) {
    event.preventDefault();

    searchInput = searchForm.elements.s.value;
    typeSelect =  searchForm.elements.type.value;

    fetchCall(showAll, '', searchInput, typeSelect);

    // Закриває при новому пошуку відкритий фільм
    details.innerHTML = '';
});



// Подія яка підгружає деталі фільму
output.addEventListener('click', event => {
    // Провірка потрібна, щоб не підгружало альбом який називаться Null
    const title = event.target.getAttribute('alt');
    
    if(title !== null) {
        const searchTitle = '&t=' + title;
        fetchCall(showDetails, searchTitle);
    }
});



// Подія Show Favorite Movies
const showFavorite = document.querySelector('.favorite__btn');
showFavorite.addEventListener('click', event => {    
    output.innerHTML = '';
    details.innerHTML = '';

    more.style.display = 'none';
    clearBtn.style.display = 'block';
    
    pagination.addEventListener('click', event => {
        event.preventDefault();
        if (event.target === clearBtn) {
            localStorage.clear();
            output.innerHTML = '<div class="warning">Пусто. Додайте щось.</div>';
            more.style.display = 'none';
            clearBtn.style.display = 'none';
        }
    });

    arrFavorites = JSON.parse(localStorage.getItem('favorites'));
    // arrFavorites.sort();
    if (arrFavorites && arrFavorites.length > 0) {
        output.innerHTML += `<div class="output__found">Favorite Movies</div>`;

        for(item of arrFavorites) {
            const searchTitle = '&t=' + item;
            fetchCall(showFavorites, searchTitle);
        }
    } else {
        output.innerHTML = '<div class="warning">Пусто. Додайте щось.</div>';
        more.style.display = 'none';
        clearBtn.style.display = 'none';
    }
});


// Подія Add Favorite Movie для пошуку
output.addEventListener('click', event => {
    addFavorite(event, 'item');
});

// Подія Add Favorite Movie для сторінки фільму
details.addEventListener('click', event => {
    addFavorite(event);
});

// Function Add Movie to Favorite page
function addFavorite(event, type='details') {
    // Витягаю .item-favorite для того, щоб nextElementSibling спрацював
    const favoriteItem = event.target;
    // Витягаю alt в img по якому буду додавати фільми в LocalStorage
    let title = '';
    if (type === 'item')
        title = favoriteItem.nextElementSibling.getAttribute('alt');
    else
        title = favoriteItem.parentNode.parentNode.previousElementSibling.getAttribute('alt');
    
    if (title !== null && title !== undefined) {
    // Перевірка чи існує такий фільм у LocalStorage
        if (localStorage.getItem('favorites')) {
            const favorites = JSON.parse(localStorage.getItem('favorites'));

            // Шукає фільм в LocalStorage і вертає індекс масиву або -1
            const findElement = favorites.findIndex(item => {
                if (item === title) return item;
            });

            // Перевіряє наявність фільму в LocalStorage і якщо такий відстуній то додає
            if (findElement === -1) {
                favorites.push(title);
            } else {
                favorites.splice(findElement, 1);
            }

            localStorage.setItem('favorites', JSON.stringify(favorites));
            favoriteItem.classList.toggle('item__favorite--full');
            favoriteItem.classList.toggle('item-details__favorite--full');
        } else {
            const arrFavorite = [title];
            localStorage.setItem('favorites', JSON.stringify(arrFavorite));
            favoriteItem.classList.toggle('item__favorite--full');
            favoriteItem.classList.toggle('item-details__favorite--full');
        }
    }
}


// Функція запиту даних по API
async function fetchCall(callback, title='', query='', type='', page=1) {
    let response = '';

    if (title !== '') {
        response = await fetch(url + title);
    } else {
        response = await fetch(url + '&s=' + query + '&type=' + type + '&page=' + page);
    }

    if(response.ok) {
        let json = await response.json();
        if(callback)
            callback(json);
    } else {
        output.innerHTML = '<div class="error">Проблеми з сервером. Спробуйте пізніше.</div>';
    }
}


// Відображає html фільмів які знайдено
function renderHtml(item) {
    if(item.Poster === 'N/A')
        item.Poster = 'img/cover.jpg';

    let result = ''
    result += `<div class="output__item item">
                    <div class="item__favorite ${checkLocal(item.Title)}"></div>
                    <img class="item__img" src="${item.Poster}" alt="${item.Title}">
                    <div class="item__heading">${item.Title} (${item.Year})</div>
                </div>`;
    return result;
}


// Відображає на головній сторінці фільми
function showIndex(json) {
    let result = '';

    if (json.Search !== undefined) {
        const item = json.Search;

        for(let i=0; i<8; i++) {
            result += renderHtml(item[i]);
        }
    } else {
        result += '<div class="warning">Виникла помилка. Спробуйте пізніше.</div>';
    }

    output.innerHTML = result;
}



// Показує всі фільми, що знайшов пошук.
function showAll(json) {
    let result = '';
    clearBtn.style.display = 'none';

    if (json.Search !== undefined) {
        result += `<div class="output__found">Знайдено ${json.totalResults}шт.</div>`;

        json.Search.map(item => {
            result += renderHtml(item);
        });

        // Робить активною чи не активною кнопку More і рахує кількість
        let searchCount = json.totalResults - 10;

        if(searchCount >= 1) {
            more.style.display = 'block';
            count.innerHTML = `(${searchCount})`;
            more.classList.remove('disabled');
        } else {
            count.innerHTML = ``;
            more.classList.add('disabled');
        }

        let page = 2;
        more.addEventListener('click', () => {
            if(searchCount > 0) {
                fetchCall(nextPage, '', searchInput, typeSelect, page);
                if (searchCount >= 10) {
                    searchCount -= 10;
                    count.innerHTML = `(${searchCount})`;
                    more.classList.remove('disabled');
                } else {
                    count.innerHTML = '';
                    more.classList.add('disabled');
                }

                page++;
            }
        });
    } else {
        result += '<div class="warning">Нічого не знайдено.</div>';
        more.style.display = 'none';
    }

    output.innerHTML = result;
}



// Показує детальну інформацію про фільм
function showDetails(json) {
    if(json.Poster === 'N/A')
        json.Poster = 'img/cover.jpg';
    
    const result = `<div class="details__item item-details">
                    <img class="item-details__img" src="${json.Poster}" alt="${json.Title}">
                    <div class="item-details__desc">
                        <h2 class="item-details__heading-2 heading-2">
                            ${json.Title}
                            <div class="item__favorite item-details__favorite ${checkLocal(json.Title)}"></div>
                        </h2>
                        <div class="item-details__metadata">${json.Year}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;${json.Runtime}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;${json.Genre}</div>
                        <div class="item-details__synopsis">${json.Plot}</div>
                        <div class="item-details__starring">Starring: <span>${json.Actors}</span></div>
                    </div>
                </button>`;

    details.innerHTML = result;

    // Прокрутка до деталей фільму
    window.scrollTo({
        top: 230,
        behavior: "smooth"
    });
}



// Pagination. Підгружає додаткові сторінки, фільми
function nextPage(json) {
    let result = '';

    if (json.Search !== undefined) {
        json.Search.map(item => {
            result += renderHtml(item);
        });
    }

    output.innerHTML += result;
}



// Показує сторінку Favorites
function showFavorites(json) {
    let result = '';
    result += renderHtml(json);
    output.innerHTML += result;
}



// Провіряє чи є у Favorite (LocalStorage)
function checkLocal(title) {
    const favorites = JSON.parse(localStorage.getItem('favorites'));

    if (favorites && favorites.includes(title)) {
        return 'item__favorite--full item-details__favorite--full'; }

    return '';
}