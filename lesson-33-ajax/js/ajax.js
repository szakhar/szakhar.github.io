const output = document.querySelector('.output');
const details = document.querySelector('.details');
const pagination = document.querySelector('.pagination');

const url = `https://www.omdbapi.com/?apikey=ff377d04`;

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const searchInput = '&s=' + searchForm.elements.s.value;
    const typeSelect = '&type=' + searchForm.elements.type.value;

    fetchCallAll(searchInput, typeSelect);
});

output.addEventListener('click', event => {
    const searchTitle = '&t=' + event.target.getAttribute('alt');
    fetchCallItem(searchTitle);
});

async function fetchCallAll(query, type) {
    let response = await fetch(url + query + type);
    if(response.ok) {
        let json = await response.json();
        const movie = json.Search;
        let result = '';

        // console.log(movie);
        // console.log(movie.totalResults);

        if (movie !== undefined) {
            result += `<div class="output__found">Знайдено ${json.totalResults}шт.</div>`;

            movie.map(item => {
                // console.log(item);

                if(item.Poster === 'N/A')
                    item.Poster = '../img/cover.jpg';
                
                result += `<div class="output__item item">
                            <img class="item__img" src="${item.Poster}" alt="${item.Title}">
                            <div class="item__heading">${item.Title} (${item.Year})</div>
                        </div>`;
            });
        } else {
            result += '<div>Нічого не знайдено :( Спробуйте ще раз.</div>';
        }

        output.innerHTML = result;

        pagination.innerHTML = 'Сторінок ' + Math.ceil(json.totalResults / 10);
    } else {
        output.innerHTML = '<div>Проблеми з сервером. Спробуйте пізніше.</div>';
    }
}




async function fetchCallItem(title) {
    let response = await fetch(url + title);
    if(response.ok) {
        let json = await response.json();
        let result = '';

        console.log(json);

        if(json.Poster === 'N/A')
            json.Poster = '../img/cover.jpg';
        
        result += `<div class="details__item item-details">
                       <img class="item-details__img" src="${json.Poster}" alt="${json.Title}">
                       <div class="item-details__desc">
                           <h2 class="item-details__heading-2 heading-2">${json.Title}</h2>
                           <div class="item-details__metadata">${json.Year}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;${json.Runtime}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;${json.Genre}</div>
                           <div class="item-details__synopsis">${json.Plot}</div>
                           <div class="item-details__starring">Starring: <span>${json.Actors}</span></div>
                       </div>
                   </div>`;

        details.innerHTML = result;
    } else {
        console.log('WWWrong!');
    }
}

// fetchCallItem('&t=The Godfather');



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







// const baseUrl = 'https://api.themoviedb.org/3/';
// const apiKey = 'c68a3e4144daf40e6bff62a133104898';
// const other = '&language=uk-UA&include_adult';

// const url = `${baseUrl}search/movie?api_key=${apiKey}${other}&page=1=false&query=1917`;

// async function fetchCall() {
//     let response = await fetch(url);
//     if(response.ok) {
//         console.log(response);
//         let json = await response.json();
//         // console.log(json.results[0].title);
//         // console.log(json);
//         let movie = json.results[0];
//         const output = document.querySelector('.output');
//         output.innerHTML = `<img src="${movie.poster_path}" alt="${movie.title}">`;
//         console.log(`<img src="${movie.poster_path}" alt="${movie.title}">`);
//     }
// }

// fetchCall()