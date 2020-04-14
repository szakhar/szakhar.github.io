
// Завдання 1

function returnNumber(n1, n2) {
    if (n1 < n2) return -1;
    else if (n1 > n2) return 1;
    else return 0;
}

const formTask1 = document.querySelector('[name="form1"]');

formTask1.addEventListener('submit', function(event) {
    event.preventDefault();

    const num1 = +event.currentTarget.num1Task1.value;
    const num2 = +event.currentTarget.num2Task1.value;

    const result = document.querySelector('.result-form1');
    result.innerHTML = `<div class="inline-box"><h3 class="h-inline">${returnNumber(num1, num2)}</h3></div>`;
});


// Завдання 2

function factorial(num) {
    if (num === 0) return 1;
    else return num * factorial(num - 1);
}

const formTask2 = document.querySelector('[name="form2"]');

formTask2.addEventListener('submit', function(event) {
    event.preventDefault();

    let num = +event.currentTarget.numTask2.value;

    const result = document.querySelector('.result-form2');
    result.innerHTML = `<div class="inline-box"><h3 class="h-inline">Факторіал:</h3>${factorial(num)}</div>`;
});



// Завдання 3

function joinNum(num1, num2, num3) {
    return num1 + '' + num2 + '' + num3;
}

const formTask3 = document.querySelector('[name="form3"]');

formTask3.addEventListener('submit', function(event) {
    event.preventDefault();
    const num1 = +event.currentTarget.num1Task3.value;
    const num2 = +event.currentTarget.num2Task3.value;
    const num3 = +event.currentTarget.num3Task3.value;

    const result = document.querySelector('.result-form3');
    result.innerHTML = `<div class="inline-box"><h3 class="h-inline">Об'єднане число:</h3>${joinNum(num1, num2, num3)}</div>`;
});



// Завдання 4

function checkSquare(num1 = '', num2 = '') {
    if (num1 !== 0 && num2 !== 0) return num1 * num2;
    else if (num1 !== 0) return num1 * num1;
    else if (num2 !== 0) return num2 * num2;
    else return 'Введіть хоть одне число.';
}

const formTask4 = document.querySelector('[name="form4"]');

formTask4.addEventListener('submit', function(event) {
    event.preventDefault();

    let num1 = +event.currentTarget.num1Task4.value;
    let num2 = +event.currentTarget.num2Task4.value;

    const result = document.querySelector('.result-form4');
    result.innerHTML = `<div class="inline-box"><h3 class="h-inline">Площа прямокутника або квадрата:</h3>${checkSquare(num1, num2)}</div>`;
});



// Завдання 5

// Перевіряє чи число являється досконалим
function perfect(num) {
    let resultArr = [];
    let result = 0;
    const startNum = num;

    for(let i = 2; num != 1; i++) {
        num = startNum / i;
        if(Number.isInteger(num)) resultArr.push(num);
    }

    for(let j = 0; j < resultArr.length; j++) {
        result += resultArr[j];
    }

    if(startNum === result) return true;
    else return false;
}


const formTask5 = document.querySelector('[name="form5"]');

formTask5.addEventListener('submit', function(event) {
    event.preventDefault();
    const num = +event.currentTarget.numTask5.value;


    const result = document.querySelector('.result-form5');
    result.innerHTML = `<div class="inline-box"><h3 class="h-inline">Ваше число:</h3><div class="perfect-box"></div></div>`;
    const perfectBox = document.querySelector('.perfect-box');
    if(perfect(num)) perfectBox.innerHTML += 'досконале';
    else perfectBox.innerHTML += 'не досконале';
});



// Завдання 6

const perfectNums = (startNum, finishNum) => {
    if(startNum !== 0 && finishNum !== 0) {
        let result = '';
        for(let i = startNum; i <= finishNum; i++) {
            if(perfect(i)) result += `${i} `;
        }
        return result;
    }
}

const formTask6 = document.querySelector('[name="form6"]');

formTask6.addEventListener('submit', function(event) {
    event.preventDefault();

    let num1 = +event.currentTarget.num1Task6.value;
    let num2 = +event.currentTarget.num2Task6.value;

    const result = document.querySelector('.result-form6');
    if (perfectNums(num1, num2)) {
        result.innerHTML = `<div class="inline-box"><h3 class="h-inline">Досконалі числа:</h3><div class="nums-box"></div></div>`;
        const numsBox = document.querySelector('.nums-box');
        numsBox.innerHTML += perfectNums(num1, num2);
    } else {
        result.innerHTML = `<div class="inline-box"><h3 class="h-inline">Помилка. Введіть числа більше нуля.</h3></div>`;
    }
});



// Завдання 7

// Бере години/хвилини/секунди форматує і повертає
function getTime(hours = '00', minutes = '00', seconds = '00') {
    if (hours === 0 || isNaN(hours)) hours = '00';
    if (minutes === 0 || isNaN(minutes)) minutes = '00';
    if (seconds === 0 || isNaN(seconds)) seconds = '00';
    return `${hours} : ${minutes} : ${seconds}`;
}

const formTask7 = document.querySelector('[name="form7"]');

formTask7.addEventListener('submit', function(event) {
    event.preventDefault();
    const num1 = +event.currentTarget.num1Task7.value;
    const num2 = +event.currentTarget.num2Task7.value;
    const num3 = +event.currentTarget.num3Task7.value;

    const result = document.querySelector('.result-form7');
    result.innerHTML = `<div class="inline-box"><h3 class="h-inline">Ваш час:</h3>${getTime(num1, num2, num3)}</div>`;
});


// Завдання 8

// Переводить години/хвилини/секунди в секунди
function getSeconds(hours = 0, minutes = 0, seconds = 0) {
    if (isNaN(hours)) hours = 0;
    if (isNaN(minutes)) minutes = 0;
    if (isNaN(seconds)) seconds = 0;
    return (hours * 3600) + (minutes * 60) + seconds;
}

const formTask8 = document.querySelector('[name="form8"]');

formTask8.addEventListener('submit', function(event) {
    event.preventDefault();
    const num1 = +event.currentTarget.num1Task8.value;
    const num2 = +event.currentTarget.num2Task8.value;
    const num3 = +event.currentTarget.num3Task8.value;

    const result = document.querySelector('.result-form8');
    result.innerHTML = `<div class="inline-box"><h3 class="h-inline">Ваш час в секундах:</h3>${getSeconds(num1, num2, num3)}</div>`;
});



// Завдання 9

// Переводить секунди в години/хвилини/секунди
function convertSeconds(secondsInput = 0) {
    if (isNaN(secondsInput) || secondsInput === 0) {
        return `Помилка. Введіть час в секундах.`;
    } else {
        const seconds = Math.floor(secondsInput % 60);

        const minutesTmp = secondsInput / 60;
        const minutes = Math.floor(minutesTmp % 60);

        const hoursTmp = minutesTmp / 60;
        const hours = Math.floor(hoursTmp % 60);

        return `${hours} : ${minutes} : ${seconds}`;
    }
}

const formTask9 = document.querySelector('[name="form9"]');

formTask9.addEventListener('submit', function(event) {
    event.preventDefault();
    const num = +event.currentTarget.numTask9.value;

    const result = document.querySelector('.result-form9');
    result.innerHTML = `<div class="inline-box"><h3 class="h-inline">Ваш час:</h3>${convertSeconds(num)}</div>`;
});



// Завдання 10

function differenceTime( h1, m1, s1, h2, m2, s2 ) {
    const secondsOne = getSeconds(h1, m1, s1);
    const secondsTwo = getSeconds(h2, m2, s2);

    const seconds = Math.abs(secondsOne - secondsTwo);
    return convertSeconds(seconds);
}

const formTask10 = document.querySelector('[name="form10"]');

formTask10.addEventListener('submit', function(event) {
    event.preventDefault();
    const num1 = +event.currentTarget.num1Task10.value;
    const num2 = +event.currentTarget.num2Task10.value;
    const num3 = +event.currentTarget.num3Task10.value;
    const num4 = +event.currentTarget.num4Task10.value;
    const num5 = +event.currentTarget.num5Task10.value;
    const num6 = +event.currentTarget.num6Task10.value;    

    const result = document.querySelector('.result-form10');
    result.innerHTML = `<div class="inline-box"><h3 class="h-inline">Різниця в часі:</h3>${differenceTime(num1,num2,num3,num4,num5,num6)}</div>`;
});