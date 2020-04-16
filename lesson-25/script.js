
// Вивід результату на екран

function viewResult(nameForm, title, viewResult='') {
    const result = document.querySelector(`.result-form${nameForm}`);
    result.innerHTML = `<div class="inline-box"><h3 class="h-inline">${title}</h3>${viewResult}</div>`;
}



// Завдання 1

function returnNumber(n1, n2) {
    if (n1 < n2) return -1;
    else if (n1 > n2) return 1;
    else return 0;
}

form1.addEventListener('submit', function(event) {
    event.preventDefault();

    const num1 = +form1.elements.num1Task1.value;
    const num2 = +form1.elements.num2Task1.value;

    viewResult(1, returnNumber(num1, num2));
});


// Завдання 2

function factorial(num) {
    if (num === 0) return 1;
    else return num * factorial(num - 1);
}

form2.addEventListener('submit', function(event) {
    event.preventDefault();

    let num = +form2.elements.numTask2.value;

    viewResult(2, 'Факторіал:', factorial(num));
});



// Завдання 3

function joinNum(num1, num2, num3) {
    return num1 + '' + num2 + '' + num3;
}

form3.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const num1 = +form3.elements.num1Task3.value;
    const num2 = +form3.elements.num2Task3.value;
    const num3 = +form3.elements.num3Task3.value;

    viewResult(3, `Об'єднане число:`, joinNum(num1, num2, num3));
});



// Завдання 4

function checkSquare(num1 = '', num2 = '') {
    if (num1 !== 0 && num2 !== 0) return num1 * num2;
    else if (num1 !== 0) return num1 * num1;
    else if (num2 !== 0) return num2 * num2;
    else return 'Введіть хоть одне число.';
}

form4.addEventListener('submit', function(event) {
    event.preventDefault();

    let num1 = +form4.elements.num1Task4.value;
    let num2 = +form4.elements.num2Task4.value;

    viewResult(4, `Площа прямокутника або квадрата:`, checkSquare(num1, num2));
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

form5.addEventListener('submit', function(event) {
    event.preventDefault();

    const num = +form5.elements.numTask5.value;


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

form6.addEventListener('submit', function(event) {
    event.preventDefault();

    let num1 = +form6.elements.num1Task6.value;
    let num2 = +form6.elements.num2Task6.value;

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

form7.addEventListener('submit', function(event) {
    event.preventDefault();
    const num1 = +form7.elements.num1Task7.value;
    const num2 = +form7.elements.num2Task7.value;
    const num3 = +form7.elements.num3Task7.value;

    viewResult(7, 'Ваш час:', getTime(num1, num2, num3));
});


// Завдання 8

// Переводить години/хвилини/секунди в секунди
function getSeconds(hours = 0, minutes = 0, seconds = 0) {
    if (isNaN(hours)) hours = 0;
    if (isNaN(minutes)) minutes = 0;
    if (isNaN(seconds)) seconds = 0;
    return (hours * 3600) + (minutes * 60) + seconds;
}

form8.addEventListener('submit', function(event) {
    event.preventDefault();
    const num1 = +form8.elements.num1Task8.value;
    const num2 = +form8.elements.num2Task8.value;
    const num3 = +form8.elements.num3Task8.value;

    viewResult(8, 'Ваш час в секундах:', getSeconds(num1, num2, num3));
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

form9.addEventListener('submit', function(event) {
    event.preventDefault();
    const num = +form9.elements.numTask9.value;

    viewResult(9, 'Ваш час:', convertSeconds(num));
});



// Завдання 10

function differenceTime( h1, m1, s1, h2, m2, s2 ) {
    const secondsOne = getSeconds(h1, m1, s1);
    const secondsTwo = getSeconds(h2, m2, s2);

    const seconds = Math.abs(secondsOne - secondsTwo);
    return convertSeconds(seconds);
}

form10.addEventListener('submit', function(event) {
    event.preventDefault();
    const num1 = +form10.num1Task10.value;
    const num2 = +form10.num2Task10.value;
    const num3 = +form10.num3Task10.value;
    const num4 = +form10.num4Task10.value;
    const num5 = +form10.num5Task10.value;
    const num6 = +form10.num6Task10.value;    

    viewResult(10, 'Різниця в часі:', differenceTime(num1,num2,num3,num4,num5,num6));
});