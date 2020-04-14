
// Завдання 1

let totalNum = 0;
const formTask1 = document.querySelector('[name="form1"]');

formTask1.addEventListener('submit', function(event) {
    event.preventDefault();

    const num1 = +event.currentTarget.num1Task1.value;
    const num2 = +event.currentTarget.num2Task1.value;

    for(let i = num1; i <= num2; i++) {
        totalNum += i;
    }

    const result = document.querySelector('.result-form1');
    result.innerHTML = `<div class="inline-box"><h3 class="h-inline">Сума всіх чисел:</h3>${totalNum}</div>`;
    totalNum = 0;
});


// Завдання 2

const formTask2 = document.querySelector('[name="form2"]');

formTask2.addEventListener('submit', function(event) {
    event.preventDefault();

    let num1 = +event.currentTarget.num1Task2.value;
    let num2 = +event.currentTarget.num2Task2.value;

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

    const result = document.querySelector('.result-form2');
    result.innerHTML = `<div class="inline-box"><h3 class="h-inline">Найбільше спільне кратне:</h3>${resultNum}</div>`;
});




// Завдання 3

let resultTask3 = [];
const formTask3 = document.querySelector('[name="form3"]');

formTask3.addEventListener('submit', function(event) {
    event.preventDefault();
    const num = +event.currentTarget.numTask3.value;

    for(let i = 2; i <= num; i++) {

        resultTask3.push(i);
        // if (num % i === 0) resultTask3.push(i);
        // resultTask3.push(num / i);
    }

    const viewResult = document.querySelector('.result-form3');
    viewResult.innerHTML = '<h3>Всі дільники:</h3>';

    for(let j = 0; j < resultTask3.length; j++) {
        viewResult.innerHTML += resultTask3[j] + '<br>';
    }

    resultTask3 = [];
});



// Завдання 4

const formTask4 = document.querySelector('[name="form4"]');

formTask4.addEventListener('submit', function(event) {
    event.preventDefault();

    let num = +event.currentTarget.numTask4.value;

    let count = 0;
    do {
        num /= 10;
        count++;
    }
    while(num >= 1);

    const viewResult = document.querySelector('.result-form4');
    viewResult.innerHTML = `<div class="inline-box"><h3 class="h-inline">Кількість цифр:</h3>${count}</div>`;
});



// Завдання 5

let positive = 0;
let negative = 0;
let zero = 0;
let even = 0; // Парні
let odd = 0; // Непарні

const formTask5 = document.querySelector('[name="form5"]');

formTask5.addEventListener('submit', function(event) {
    event.preventDefault();
    const nums = event.currentTarget.numsTask5.value;
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

    const viewResult = document.querySelector('.result-form5');
    viewResult.innerHTML = `<div class="inline-box"><h3 class="h-inline">Позитивних:</h3>${positive}</div>`;
    viewResult.innerHTML += `<div class="inline-box"><h3 class="h-inline">Негативних:</h3>${negative}</div>`;
    viewResult.innerHTML += `<div class="inline-box"><h3 class="h-inline">Нулів:</h3>${zero}</div>`;
    viewResult.innerHTML += `<div class="inline-box"><h3 class="h-inline">Парних:</h3>${even}</div>`;
    viewResult.innerHTML += `<div class="inline-box"><h3 class="h-inline">Непарних:</h3>${odd}</div>`;
    
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

        const result = document.querySelector('.result-form6');
        result.innerHTML = `<div class="inline-box"><h3 class="h-inline">Результат:</h3>${resultSum}</div>`;
    }

});



// Завдання 7

const formTask7 = document.querySelector('[name="form7"]');

formTask7.addEventListener('submit', function(event) {
    event.preventDefault();
    const num = event.currentTarget.num1Task7.value;
    const count = +event.currentTarget.num2Task7.value;

    let arr = num.split('');
    
    for( let i = 0; i < count; i++ ) arr.push( arr.shift() );

    const result = document.querySelector('.result-form7');
    result.innerHTML = `<div class="inline-box"><h3 class="h-inline">Результат:</h3>${arr.join('')}</div>`;
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