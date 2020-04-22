
// Вивід результату
function resultVw(task, fn) {
    const result = document.querySelector(`.result-form${task}`);
    result.innerHTML = `<div class="inline-box">${fn}</div>`;
}

// Оновлює список
function updateList(fn) {
    result.innerHTML = `<div class="inline-box">${fn}</div>`;
}



// Task 1. Создать массив «Список покупок». Каждый элемент массива является
// объектом, который содержит название продукта, необходимое количество
// и куплен или нет.

const shoppingList = [
    {
        name: 'Apples',
        quantity: 10,
        buy: 1
    },
    {
        name: 'Pears',
        quantity: 3,
        buy: 0
    },
    {
        name: 'Avocado',
        quantity: 2,
        buy: 1
    },
    {
        name: 'Milk',
        quantity: 1,
        buy: 0
    },
    {
        name: 'Bread',
        quantity: 2,
        buy: 1
    },
    {
        name: 'Lime',
        quantity: 4,
        buy: 0
    },
];



// Task 1.1 Вывод всего списка на экран таким образом, чтобы сначала шли
// некупленные продукты, а потом – купленные.

// Сортування по тому чи продукт зі списку куплено. Зверху ті, що ще не куплені.
shoppingList.sort((a, b) => {
    return a.buy - b.buy;
});

// Показ списку
function showList(list) {
    let result = '';
    let buy = ''
    for (let item of list) {
        if(item.buy === 1) buy = 'buy';
        else buy = '';
        result += `<span class="${buy}"><h3 class="h-inline">${item.name}</h3> (${item.quantity} шт.)</span><br><br>`;
    }
    return result;
}

const btnShowList = document.querySelector('.btn-show-list');
const btnHideList = document.querySelector('.btn-hide-list');
const result = document.querySelector('.result-form1');

btnShowList.addEventListener('click', function() {
    updateList(showList(shoppingList));
    btnShowList.style.display = 'none';
    btnHideList.style.display = 'block';
});

btnHideList.addEventListener('click', function() {
    result.innerHTML = '';
    btnShowList.style.display = 'block';
    btnHideList.style.display = 'none';
});



// Task 1.2 Добавление покупки в список. Учтите, что при добавлении покупки
// с уже существующим в списке продуктом, необходимо увеличивать количество
// в существующей покупке, а не добавлять новую.

// Може існує якийсь ефективніший спосіб ніж провіряти значення об'єкта?
function addItem(name, quantity = 1, buy = 0) {
    for (let list of shoppingList) {
        if(list.name === name) {
            return list.quantity += quantity;
        }
    }

    return shoppingList.push({
        name,
        quantity,
        buy
    });
}

form12.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Як краще називати імена в html? бо тут дефіс не працює.
    const itemName = form12.itemName.value;
    const itemQt = +form12.itemQt.value;
    
    addItem(itemName, itemQt);
    resultVw('1-2', 'Ваш продукт додано в список. Результат в 1.1');

    // Це нормальний спосіб оновити список?
    updateList(showList(shoppingList));
});



// Task 1.3 Покупка продукта. Функция принимает название продукта и отмечает
// его как купленный.

// Провірка чи існує продукт і міняє його статус
function checkBuy(name) {
    for (let list of shoppingList) {
        if(list.name === name && list.buy === 0) {
            return list.buy = 1;
        }
    }
}

form13.addEventListener('submit', function(event) {
    event.preventDefault();
    const itemName = form13.itemName.value;
    
    checkBuy(itemName);

    resultVw('1-3', 'Ваш продукт викреслено зі списку. Результат в 1.1');
    updateList(showList(shoppingList));
});





// Task 2. Создать массив, описывающий чек в магазине.
// Каждый элемент массива состоит из названия товара,
// количества и цены за единицу товара.

const check = [
    {
        name: 'Coffee',
        qt: 4,
        price: 5 
    },
    {
        name: 'Wine',
        qt: 3,
        price: 15 
    },
    {
        name: 'Headphones',
        qt: 1,
        price: 50 
    },
    {
        name: 'USB Cable',
        qt: 2,
        price: 7 
    },
    {
        name: 'Box of sweets',
        qt: 3,
        price: 6 
    },
    {
        name: 'Chocolate bar',
        qt: 7,
        price: 3 
    },
];



// Task 2.1 Распечатка чека на экран;

// Показ чеку
function showCheck(check) {
    let result = '';
    for (let item of check) {
        result += `<h3 class="h-inline">${item.name}</h3>(${item.qt}шт.)&nbsp;&nbsp;$${item.price}<br><br>`;
    }
    result += `<hr>`;
    result += `<h3 style="text-align: right;">Загальна сума $${calcSum(check)}</h3>`;
    result += `<br>Сама дорога покупка в чеку: <h3 class="h-inline">${maxItem(check)}</h3>`;
    result += `<br>Середня ціна одного товару в чеку: <h3 class="h-inline">$${calcSum(check) / check.length}</h3>`;
    return result;
};

resultVw('2-1', showCheck(check));



// Task 2.2 Подсчет общей суммы покупки;

function calcSum(list) {
    let total = 0;
    for (let item of list) {
        total += item.price * item.qt;
    }
    return total;
}



// Task 2.3 Получение самой дорогой покупки в чеке;

// Це точно не найефективніший спосіб це робити.
function maxItem(list) {
    let arr = [];
    for (item of list) {
        arr.push(item.price * item.qt);
    }
    const maxPrice = Math.max.apply(null, arr);
    
    for (item of list) {
        if(maxPrice / item.qt === item.price)
            return `${item.name} $${item.price}`;
    }
}



// Task 2.4 Подсчет средней стоимости одного товара в чеке.

// Зроблено в завданні 2.1



// Task 3. Создать массив CSS-стилей (цвет, размер шрифта,
// выравнивание, подчеркивание и т. д.). Каждый элемент массива – это
// объект, состоящий из двух свойств: название стиля и значение стиля.
// Написать функцию, которая принимает массив стилей и текст, и
// выводит этот текст с помощью document.write() в тегах <p></p>,
// добавив в открывающий тег атрибут style со всеми стилями,
// перечисленными в массиве.

const cssStyle = [
    {
        name: 'color',
        value: 'PaleVioletRed'
    },
    {
        name: 'font-size',
        value: '24px'
    },
    {
        name: 'text-align',
        value: 'right'
    },
    {
        name: 'colortext-decoration',
        value: 'underline'
    },
];

const showStyle = (arr, text) => {
    let style = '';

    for (item of arr) {
        style += `${item.name}: ${item.value}; `;
    }
    return `<p style="${style}">${text}</p>`;
}

resultVw(3, showStyle(cssStyle, '"The way to get started is to quit talking and begin doing." -Walt Disney'));



// Task 4. Создать массив аудиторий академии. Объект-аудитория
// состоит из названия, количества посадочных мест (от 10 до 20)
// и названия факультета, для которого она предназначена. 

const lectureHalls = [
    {
        name: 'Medium Hall',
        numberSeats: 17,
        faculty: 'Finance'
    },
    {
        name: 'Big Hall',
        numberSeats: 20,
        faculty: 'Marketing'
    },
    {
        name: 'Market Hall',
        numberSeats: 16,
        faculty: 'Marketing'
    },
    {
        name: 'Tiny Hall',
        numberSeats: 13,
        faculty: 'Computer Science'
    },
    {
        name: 'Small Hall',
        numberSeats: 10,
        faculty: 'Design'
    },
];


// Вивід результату аудиторій
function resultHall(name, numberSeats, faculty='') {
    if (faculty !== '')
        return `<h3 class="h-inline">${name}</h3> (${numberSeats} місць.) Факультет: ${faculty}<br><br>`;
    else
        return `<h3 class="h-inline">${name}</h3> (${numberSeats} місць.)<br><br>`;
}



// Task 4.1 Вывод на экран всех аудиторий;

function showHalls(halls) {
    let result = '';
    for (let item of halls) {
        result += resultHall(item.name, item.numberSeats, item.faculty);
    }
    return result;
};

resultVw('4-1', showHalls(lectureHalls));



// Task 4.2 Вывод на экран аудиторий для указанного факультета;

const showFacultyHall = (arr, faculty) => {
    let result = '';
    for(item of arr) {
        if(item.faculty === faculty)
            result += resultHall(item.name, item.numberSeats);
    }
    return result;
};

resultVw('4-2', showFacultyHall(lectureHalls, 'Design'));


// Task 4.3 Вывод на экран только тех аудиторий, которые подходят
// для переданной группы. Объект-группа состоит из названия,
// количества студентов и названия факультета;

const group = {
    name: 'FN13',
    students: 13,
    faculty: 'Marketing'
};

function checkGroup(groupObj, halls) {
    let result = '';
    for (item of halls) {
        if (item.numberSeats >= groupObj.students && item.faculty === groupObj.faculty)
            result += resultHall(item.name, item.numberSeats, item.faculty);
    }
    return result;
}

resultVw('4-3', checkGroup(group, lectureHalls));



// Task 4.4 Функция сортировки аудиторий по количеству мест;

function sortSeats(halls) {
    let result = '';

    const sort = halls.sort((a, b) => {
        return a.numberSeats - b.numberSeats;
    });
    sort.reverse();

    for (item of sort) {
        result += resultHall(item.name, item.numberSeats, item.faculty);
    }
    return result;
}

resultVw('4-4', sortSeats(lectureHalls));



// Task 4.5 Функция сортировки аудиторий по названию (по алфавиту).

function sortName(halls) {
    let result = '';

    const sort = halls.sort((a, b) => {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (nameA < nameB)
            return -1
        if (nameA > nameB)
            return 1
        return 0
    });
    // sort.reverse();

    for (item of sort) {
        result += resultHall(item.name, item.numberSeats, item.faculty);
    }
    return result;
}

resultVw('4-5', sortName(lectureHalls));