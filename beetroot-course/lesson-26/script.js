
// Task 1
// Task 1.1 - Функция для вывода на экран информации об автомобиле
// Task 1.2 - Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.

const car = {
    brand: 'BMW',
    model: '528i',
    year: 1995,
    mSpeed: 120,
    showCarInfo: function() {
        return `<div class="inline-box"><h3 class="h-inline">Марка:</h3> ${this.brand}<br>
                <h3 class="h-inline">Модель:</h3> ${this.model}<br>
                <h3 class="h-inline">Рік:</h3> ${this.year}<br>
                <h3 class="h-inline">Середня швидкість:</h3> ${this.mSpeed} км/год.</div>`;
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

const fractions = {
    fr1: {
        numer: 5,
        denom: 2
    },
    fr2: {
        numer: 3,
        denom: 4
    },
    calcFr: function(sym) {
        const resFr1Numer = this.fr1.numer * this.fr2.denom;
        const resFr1Denom = this.fr1.denom * this.fr2.denom;
        const resFr2Numer = this.fr2.numer * this.fr1.denom;

        let numer = 0;
        if(sym == '+') numer = resFr1Numer + resFr2Numer;
        else numer = resFr1Numer - resFr2Numer;
  
        return numer + '/' + resFr1Denom;
    },
    addition: function() {
        return this.calcFr('+');
    },
    subtraction: function() {
        return this.calcFr('-');
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

// Виводить результати дробів
function resultFr(task, fn, sym='+', def=true) {
    const res = document.querySelector(`.result-form2${task}`);
    if(def) {
        res.innerHTML = `<p>${fractions.fr1.numer}/${fractions.fr1.denom} ${sym} ${fractions.fr2.numer}/${fractions.fr2.denom} = <strong>${fn}</strong></p><br>`;
    } else {
        res.innerHTML = `<p>26/8 = <strong>${fn}</strong></p><br>`;
    }
}

// Task 2.1
resultFr(1, fractions.addition());

// Task 2.2
resultFr(2, fractions.subtraction(), '-');

// Task 2.3
resultFr(3, fractions.multi(), '*');

// Task 2.4
resultFr(4, fractions.divide(), ':');

// Task 2.5
resultFr(5, fractions.abbr(26,8), '', false);





// Task 3 - Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 
// Task 3.1 - Функция вывода времени на экран;
// Task 3.2 - Функция изменения времени на переданное количество секунд;
// Task 3.3 - Функция изменения времени на переданное количество минут;
// Task 3.4 - Функция изменения времени на переданное количество часов.

const time = {
    hours: 17,
    minutes: 23,
    seconds: 14,
    showTime: function() {
        return `${this.hours}:${this.minutes}:${this.seconds}`;
    },
    calcTime: function(seconds) {
        const secondsTime = getSeconds(this.hours, this.minutes, this.seconds);
        const finalTime = convertSeconds(seconds + secondsTime);
        return finalTime;
    },
    changeTimeSeconds: function(seconds) {
        return this.calcTime(seconds);
    },
    changeTimeMinutes: function(minutes) {
        const seconds = minutes * 60;
        return  this.calcTime(seconds);
    },
    changeTimeHours: function(hours) {
        const seconds = hours * 60 * 60;
        return  this.calcTime(seconds);
    }
};

// Переводить час в секунди. Функція з попередньої домашки.
function getSeconds(hours = 0, minutes = 0, seconds = 0) {
    if (isNaN(hours)) hours = 0;
    if (isNaN(minutes)) minutes = 0;
    if (isNaN(seconds)) seconds = 0;
    return (hours * 3600) + (minutes * 60) + seconds;
}

// Переводить секунди в години/хвилини/секунди. Функція з попередньої домашки.
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

// Вивід результату
function resultVw(task, fn, def=true) {
    const result = document.querySelector(`.result-form${task}`);
    if(def) {
        result.innerHTML = `<div class="inline-box"><h3 class="h-inline">${fn}</h3></div>`;
    } else {
        result.innerHTML = `${fn}`;
    }
}

// Task 3.1

const showTime = document.querySelector('.btn-show-time');
const hideTime = document.querySelector('.btn-hide-time');

showTime.addEventListener('click', function() {
    resultVw('3', time.showTime());
    showTime.style.display = 'none';
    hideTime.style.display = 'block';
});

hideTime.addEventListener('click', function() {
    resultVw('3', '', false);
    showTime.style.display = 'block';
    hideTime.style.display = 'none';
});


// Task 3.2

form32.addEventListener('submit', function(event) {
    event.preventDefault();
    const seconds = +form32.seconds.value;
    resultVw('3-2', time.changeTimeSeconds(seconds));
});


// Task 3.3

form33.addEventListener('submit', function(event) {
    event.preventDefault();
    const minutes = +form33.minutes.value;
    resultVw('3-3', time.changeTimeMinutes(minutes));
});


// Task 3.4

form34.addEventListener('submit', function(event) {
    event.preventDefault();
    const hours = +form34.hours.value;
    resultVw('3-4', time.changeTimeHours(hours));
});