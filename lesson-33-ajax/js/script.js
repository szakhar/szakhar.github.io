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



// Відображає на головній сторінці фільми
function showIndex(json) {
    let result = '';

    if (json.Search !== undefined) {
        const item = json.Search;

        for(let i=0; i<8; i++) {
            if(item[i].Poster === 'N/A')
                item[i].Poster = 'img/cover.jpg';
            
            result += `<div class="output__item item">
                            <img class="item__img" src="${item[i].Poster}" alt="${item[i].Title}">
                            <div class="item__heading">${item[i].Title} (${item[i].Year})</div>
                        </div>`;
        }
    } else {
        result += '<div class="warning">Виникла помилка. Спробуйте пізніше.</div>';
    }

    output.innerHTML = result;
}



// Показує всі фільми, що знайшов пошук.
function showAll(json) {
    let result = '';

    if (json.Search !== undefined) {
        result += `<div class="output__found">Знайдено ${json.totalResults}шт.</div>`;

        json.Search.map(item => {
            if(item.Poster === 'N/A')
                item.Poster = 'img/cover.jpg';
            
            result += `<div class="output__item item">
                            <img class="item__img" src="${item.Poster}" alt="${item.Title}">
                            <div class="item__heading">${item.Title} (${item.Year})</div>
                        </div>`;
        });

        // Робить активною чи не активною кнопку More і рахує кількість
        let searchCount = json.totalResults - 10;

        if(searchCount >= 1) {
            pagination.style.display = 'block';
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
        pagination.style.display = 'none';
    }

    output.innerHTML = result;
}



// Показує детальну інформацію про фільм
function showDetails(json) {
    let result = '';

    if(json.Poster === 'N/A')
        json.Poster = 'img/cover.jpg';
    
    result += `<div class="details__item item-details">
                    <img class="item-details__img" src="${json.Poster}" alt="${json.Title}">
                    <div class="item-details__desc">
                        <h2 class="item-details__heading-2 heading-2">${json.Title}</h2>
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

            if(item.Poster === 'N/A')
                item.Poster = 'img/cover.jpg';
            
            result += `<div class="output__item item">
                           <img class="item__img" src="${item.Poster}" alt="${item.Title}">
                           <div class="item__heading">${item.Title} (${item.Year})</div>
                       </div>`;
        });
    }

    output.innerHTML += result;
}