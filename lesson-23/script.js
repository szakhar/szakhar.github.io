
// Вивід результату на екран

function viewResult(nameForm, title, viewResult) {
    const result = document.querySelector(`.result-form${nameForm}`);
    result.innerHTML = `<div class="inline-box"><h3 class="h-inline">${title}</h3>${viewResult}</div>`;
}



// Завдання 1

let totalNum = 0;

form1.addEventListener('submit', function(event) {
    event.preventDefault();

    const num1 = +form1.elements.num1Task1.value;
    const num2 = +form1.elements.num2Task1.value;

    for(let i = num1; i <= num2; i++) {
        totalNum += i;
    }

    viewResult(1, 'Сума всіх чисел:', totalNum);
    totalNum = 0;
});


// Завдання 2

form2.addEventListener('submit', function(event) {
    event.preventDefault();

    let num1 = +form2.elements.num1Task2.value;
    let num2 = +form2.elements.num2Task2.value;

    while (num1 != 0 && num2 != 0) {
        if (num1 > num2)
            num1 %= num2;
        else
            num2 %= num1;
    }
    // 30 / 18 = 1 (залишок 12)
    // 18 / 12 = 1 (залишок 6)
    // 12 / 6 = 2 (залишок 0) 
    // Найбільше спільне кратне (30, 18) = 6

    const resultNum = num1 + num2;

    viewResult(2, 'Найбільше спільне кратне:', resultNum);
});




// Завдання 3

let resultTask3 = [];

form3.addEventListener('submit', function(event) {
    event.preventDefault();
    const num = +form3.numTask3.value;

    for(let i = 2; i < num; i++) {
        if (num % i === 0) resultTask3.push(i);
    }

    const viewResult = document.querySelector('.result-form3');
    viewResult.innerHTML = '<h3>Всі дільники:</h3>';

    for(let j = 0; j < resultTask3.length; j++) {
        viewResult.innerHTML += resultTask3[j] + '<br>';
    }

    resultTask3 = [];
});



// Завдання 4

form4.addEventListener('submit', function(event) {
    event.preventDefault();

    let num = +form4.elements.numTask4.value;

    let count = 0;
    do {
        num /= 10;
        count++;
    }
    while(num >= 1);

    viewResult(4, 'Кількість цифр:', count);
});



// Завдання 5

let positive = 0;
let negative = 0;
let zero = 0;
let even = 0; // Парні
let odd = 0; // Непарні

form5.addEventListener('submit', function(event) {
    event.preventDefault();
    const nums = form5.numsTask5.value;
    let arr = nums.split(',');

    // Рахує - позитивні, негативні числа та нулі
    for(let i = 0; i < arr.length; i++) {
        if( arr[i] > 0 ) {
            positive += 1;
        } else if( arr[i] < 0 ) {
            negative += 1;
        } else {
            zero += 1;
        }
    }

    // Рахує - парні та непарні числа
    for(let j = 0; j < arr.length; j++) {
        // arr[j]%2 == 0 // парне
        if(arr[j] & 1) {
            odd += 1; // Непарні
        } else {
            even += 1; // Парні
        }
    }

    function result (title, result) {
        return `<div class="inline-box"><h3 class="h-inline">${title}</h3>${result}</div>`;
    }
    
    const viewResult = document.querySelector('.result-form5');
    viewResult.innerHTML = result('Позитивних:', positive);
    viewResult.innerHTML += result('Негативних:', negative);
    viewResult.innerHTML += result('Нулів:', zero);
    viewResult.innerHTML += result('Парних:', even);
    viewResult.innerHTML += result('Непарних:', odd);
    
    positive = 0; negative = 0; zero = 0; even = 0; odd = 0;
});



// Завдання 6

const buttonTask6 = document.querySelector('#button-task6');

buttonTask6.addEventListener('click', function() {
    let more = true;

    while (more) {
        let resultSum = 0;

        let nums = prompt('Введість, що ви хочете порахувати (2 + 2)');
        let arr = nums.split(' ');

        let num1 = +arr[0];
        let num2 = +arr[2];
        let symbol = arr[1];

        if ( symbol === '+') {
            resultSum = num1 + num2;
        } else if (symbol === '-') {
            resultSum = num1 - num2;
        } else if (symbol === '*') {
            resultSum = num1 * num2;
        } else {
            resultSum = num1 / num2;
        }

        more = confirm(`Результат: ${resultSum}. Ще?`);

        viewResult(6, 'Результат:', resultSum);
    }

});



// Завдання 7

form7.addEventListener('submit', function(event) {
    event.preventDefault();
    const num = form7.elements.num1Task7.value;
    const count = +form7.elements.num2Task7.value;

    let arr = num.split('');
    
    for( let i = 0; i < count; i++ ) arr.push( arr.shift() );

    viewResult(7, 'Результат:', arr.join(''));
});


// Завдання 8

const daysWeek = [`Понеділок`, `Вівторок`, `Середа`, `Четвер`, `П'ятниця`, `Субота`, `Неділя`];
const btnTask8 = document.querySelector('#btn-task8');

btnTask8.addEventListener('click', function() {
    let more = true;

    let i = 0
    while( more && i < daysWeek.length) {
        more = confirm(`${daysWeek[i]}. Ще день?`);
        if(i === 6) i = -1;
        i++;
    }

});



// Завдання 9

const buttonTask9 = document.querySelector('#show-table-btn');
const closeTableBtn = document.querySelector('#close-table-btn');
let table = document.querySelector('.table');

function showTable() {

    table.style.display = 'flex';

    for( let i = 2; i <= 9; i++ ) {
        table.innerHTML += '<div class="table__item table__item' + i + '">';
        let tableItem = document.querySelector('.table__item' + i);

        for( let j = 1; j <= 10; j++ ) {
            tableItem.innerHTML += `<div>${i} x ${j} = <strong>${i * j}</strong></div>`;
        }

        table.innerHTML += `</div>`;
    }

    buttonTask9.style.display = 'none';
    closeTableBtn.style.display = 'block';
}

function closeTable() {
    table.style.display = 'none';
    closeTableBtn.style.display = 'none';
    buttonTask9.style.display = 'block';

    table.innerHTML = '';
}

buttonTask9.addEventListener('click', showTable);
closeTableBtn.addEventListener('click', closeTable);



// Завдання 10

const btnTask10 = document.querySelector('#btn-start');
const smallBtn = document.querySelector('#btn-small');
const bigBtn = document.querySelector('#btn-big');
const bigThis = document.querySelector('#btn-this');

const result = document.querySelector('.result-text-form10');
const mark = document.querySelector('.mark');

btnTask10.addEventListener('click', function() {
    result.innerText = res;
    result.style.display = 'inline-block';
    mark.style.display = 'inline-block';

    this.style.display = 'none';
    smallBtn.style.display = 'inline-block';
    bigBtn.style.display = 'inline-block';
    bigThis.style.display = 'inline-block';
});

let low  = 0;
let high = 100;

let res = Math.floor( (low + high) / 2 );
    
function searchNum() {
    return Math.floor( (low + high) / 2 );
}
    
smallBtn.addEventListener('click', function() {
    high = Number(result.innerText);
    result.innerText = searchNum();  
});
    
bigBtn.addEventListener('click', function() {
    low = Number(result.innerText);    
    result.innerText = searchNum();  
});

bigThis.addEventListener('click', function() {   
    result.innerHTML = 'I Win! I Win! 🎉 🎉';
    mark.style.display = 'none';
    smallBtn.style.display = 'none';
    bigBtn.style.display = 'none';
});