
// Task 1
// Task 1.1 - Функция для вывода на экран информации об автомобиле
// Task 1.2 - Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.

let car = {
    brand: 'BMW',
    model: '528i',
    year: 1995,
    mSpeed: 120,
    showCarInfo: function() {
        return `<div class="inline-box"><h3 class="h-inline">Марка:</h3> ${this.brand}<br><h3 class="h-inline">Модель:</h3> ${this.model}<br><h3 class="h-inline">Рік:</h3> ${this.year}<br><h3 class="h-inline">Середня швидкість:</h3> ${this.mSpeed} км/год.</div>`;
    },
    calcMSpeed: function(distance) {
        let countBreak = 0;
        const time = distance / this.mSpeed;
        let secondsInput =  time * 60 * 60;
        
        if (time > 4) {
            countBreak = Math.floor(time / 4);
            secondsInput += 3600 * countBreak;
        }

        let seconds = Math.floor(secondsInput % 60);
        const minutesTmp = secondsInput / 60;
        let minutes = Math.floor(minutesTmp % 60);
        const hoursTmp = minutesTmp / 60;
        let hours = Math.floor(hoursTmp % 60);

        if (seconds === 0) seconds = '00';
        if (minutes === 0) minutes = '00';
        if (hours === 0) hours = '00';

        return `<div class="inline-box"><h3 class="h-inline">${hours}:${minutes}:${seconds}</h3> потрібно,
                щоб подолати <h3 class="h-inline">${distance} км</h3> з середньою швидкість <h3 class="h-inline">
                ${car.mSpeed} км/год.</h3> Буде зупинок <h3 class="h-inline">${countBreak}</h3> по 1 годині.</div>`;
    }
};


// Task 1.1

const showCarInfo = document.querySelector('.btn-show-car-info');
const hideCarInfo = document.querySelector('.btn-hide-car-info');
const result = document.querySelector('.result-form1');

showCarInfo.addEventListener('click', function() {
    result.innerHTML = car.showCarInfo();
    showCarInfo.style.display = 'none';
    hideCarInfo.style.display = 'block';
});

hideCarInfo.addEventListener('click', function() {
    result.innerHTML = '';
    showCarInfo.style.display = 'block';
    hideCarInfo.style.display = 'none';
});


// Task 1.2

form1.addEventListener('submit', function(event) {
    event.preventDefault();

    const km = +form1.km.value;

    const result = document.querySelector('.result-form1-2');
    result.innerHTML = car.calcMSpeed(km);
});



// Task 2 - Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом:
// Task 2.1 - Функция сложения 2-х объектов-дробей;
// Task 2.2 - Функция вычитания 2-х объектов-дробей;
// Task 2.3 - Функция умножения 2-х объектов-дробей;
// Task 2.4 - Функция деления 2-х объектов-дробей;
// Task 2.5 - Функция сокращения объекта-дроби.

let fractions = {
    fr1: {
        numer: 5,
        denom: 2
    },
    fr2: {
        numer: 3,
        denom: 4
    },
    addition: function() {
        const resFr1Numer = this.fr1.numer * this.fr2.denom;
        const resFr1Denom = this.fr1.denom * this.fr2.denom;
        const resFr2Numer = this.fr2.numer * this.fr1.denom;
        const resFr2Denom = this.fr2.denom * this.fr1.denom;

        const numer = resFr1Numer + resFr2Numer;
        const denom = resFr1Denom + resFr2Denom;

        return numer + '/' + denom;
    },
    subtraction: function() {
        const resFr1Numer = this.fr1.numer * this.fr2.denom;
        const resFr1Denom = this.fr1.denom * this.fr2.denom;
        const resFr2Numer = this.fr2.numer * this.fr1.denom;
        const resFr2Denom = this.fr2.denom * this.fr1.denom;

        const numer = resFr1Numer - resFr2Numer;
        const denom = resFr1Denom - resFr2Denom;

        return numer + '/' + denom;
    },
    multi: function() {
        const numer = this.fr1.numer * this.fr2.numer;
        const denom = this.fr1.denom * this.fr2.denom;

        return numer + '/' + denom;
    },
    divide: function() {
        const numer = this.fr1.numer * this.fr2.denom;
        const denom = this.fr1.denom * this.fr2.numer;

        return numer + '/' + denom;
    },
    abbr: function(n, d) {
        let arr1 = [];
        let arr2 = [];
        let divide = [];

        let numer = n;
        let denom = d;

        for(let i = 2; i < n; i++) {
            if (n % i === 0) arr1.push(i);
        }
        for(let i = 2; i < d; i++) {
            if (d % i === 0) arr2.push(i);
        }

        if(arr1.length > arr2.length) {
            for(let i = 0; i < arr1.length; i++) {
                if(arr1[i] === arr2[i]) divide.push(arr1[i]);
            }
        } else {
            for(let i = 0; i < arr2.length; i++) {
                if(arr1[i] === arr2[i]) divide.push(arr1[i]);
            }
        }

        if (divide.length != 0) {
            const maxDevide = Math.max(divide);
            numer = n / maxDevide;
            denom = d / maxDevide;
        }

        return numer + '/' + denom;
    }
}


// Task 2.1
const resultAddition = document.querySelector('.result-form21');
resultAddition.innerHTML = `<p>${fractions.fr1.numer}/${fractions.fr1.denom} + ${fractions.fr2.numer}/${fractions.fr2.denom} = <strong>${fractions.addition()}</strong></p><br>`;

// Task 2.2
const resultSubtraction = document.querySelector('.result-form22');
resultSubtraction.innerHTML = `<p>${fractions.fr1.numer}/${fractions.fr1.denom} - ${fractions.fr2.numer}/${fractions.fr2.denom} = <strong>${fractions.subtraction()}</strong></p><br>`;

// Task 2.3
const resultMulti = document.querySelector('.result-form23');
resultMulti.innerHTML = `<p>${fractions.fr1.numer}/${fractions.fr1.denom} * ${fractions.fr2.numer}/${fractions.fr2.denom} = <strong>${fractions.multi()}</strong></p><br>`;

// Task 2.4
const resultDivide = document.querySelector('.result-form24');
resultDivide.innerHTML = `<p>${fractions.fr1.numer}/${fractions.fr1.denom} / ${fractions.fr2.numer}/${fractions.fr2.denom} = <strong>${fractions.divide()}</strong></p><br>`;

// Task 2.5
const resultAbbr = document.querySelector('.result-form25');
resultAbbr.innerHTML = `<p>26/16 = <strong>${fractions.abbr(26,16)}</strong></p><br>`;



// Task 3 - Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 
// Task 3.1 - Функция вывода времени на экран;
// Task 3.2 - Функция изменения времени на переданное количество секунд;
// Task 3.3 - Функция изменения времени на переданное количество минут;
// Task 3.4 - Функция изменения времени на переданное количество часов.

let time = {
    hours: 17,
    minutes: 23,
    seconds: 14,
    showTime: function() {
        return `${this.hours}:${this.minutes}:${this.seconds}`;
    },
    changeTimeSeconds: function(seconds) {
        const secondsTime = getSeconds(time.hours, time.minutes, time.seconds);
        const finalTime = convertSeconds(seconds + secondsTime);
        return finalTime;
    },
    changeTimeMinutes: function(minutes) {
        const seconds = minutes * 60;
        const secondsTime = getSeconds(time.hours, time.minutes, time.seconds);
        const finalTime = convertSeconds(seconds + secondsTime);
        return finalTime;
    },
    changeTimeHours: function(hours) {
        const seconds = hours * 60 * 60;
        const secondsTime = getSeconds(time.hours, time.minutes, time.seconds);
        const finalTime = convertSeconds(seconds + secondsTime);
        return finalTime;
    }
};

// Переводить час в секунди
function getSeconds(hours = 0, minutes = 0, seconds = 0) {
    if (isNaN(hours)) hours = 0;
    if (isNaN(minutes)) minutes = 0;
    if (isNaN(seconds)) seconds = 0;
    return (hours * 3600) + (minutes * 60) + seconds;
}

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


// Task 3.1

const showTime = document.querySelector('.btn-show-time');
const hideTime = document.querySelector('.btn-hide-time');
const result3 = document.querySelector('.result-form3');

showTime.addEventListener('click', function() {
    result3.innerHTML = `<div class="inline-box"><h3 class="h-inline">${time.showTime()}</h3></div>`;
    showTime.style.display = 'none';
    hideTime.style.display = 'block';
});

hideTime.addEventListener('click', function() {
    result3.innerHTML = '';
    showTime.style.display = 'block';
    hideTime.style.display = 'none';
});


// Task 3.2

form32.addEventListener('submit', function(event) {
    event.preventDefault();

    const seconds = +form32.seconds.value;

    const result = document.querySelector('.result-form3-2');
    result.innerHTML = `<div class="inline-box"><h3 class="h-inline">${time.changeTimeSeconds(seconds)}</h3></div>`;
});


// Task 3.3

form33.addEventListener('submit', function(event) {
    event.preventDefault();

    const minutes = +form33.minutes.value;

    const result = document.querySelector('.result-form3-3');
    result.innerHTML = `<div class="inline-box"><h3 class="h-inline">${time.changeTimeMinutes(minutes)}</h3></div>`;
});


// Task 3.4

form34.addEventListener('submit', function(event) {
    event.preventDefault();

    const hours = +form34.hours.value;

    const result = document.querySelector('.result-form3-4');
    result.innerHTML = `<div class="inline-box"><h3 class="h-inline">${time.changeTimeHours(hours)}</h3></div>`;
});