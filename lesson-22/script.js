
// Завдання 1
const age = prompt('Скільки тобі років?');

if (age >= 0 && age <=2) {
    alert('Ти малюк');
} else if (age >= 12 && age < 18) {
    alert('Ти підліток');
} else if (age >= 18 && age < 60) {
    alert('Ти дорослий');
} else if (age >= 60) {
    alert('Ти бабулька або дідулька');
} else {
    alert('Ти щось невідоме. Бо в Бітрут порахували, що твій вік належить до ніякої категорії.');
}



// Завдання 2
const num = prompt('Вкажіть число від 0 до 9');
const symbolText = 'Символ на цій клавіші';

switch(Number(num)) {
    case 0:
        alert(`${symbolText} - )`);
        break;
    case 1:
        alert(`${symbolText} - !`);
        break;
    case 2:
        alert(`${symbolText} - @`);
        break;
    case 3:
        alert(`${symbolText} - #`);
        break;
    case 4:
        alert(`${symbolText} - $`);
        break;
    case 5:
        alert(`${symbolText} - %`);
        break;
    case 6:
        alert(`${symbolText} - ^`);
        break;
    case 7:
        alert(`${symbolText} - &`);
        break;
    case 8:
        alert(`${symbolText} - *`);
        break;
    case 9:
        alert(`${symbolText} - (`);
        break;
    default:
        alert(`Ти ввів щось не те.`);
}



// Завдання 3
const number = prompt('Введи трьохзначне число, а я провірю чи є однакові цифри.');

if(number[0] == number[1] && number[1] == number[2]) {
    alert('Всі цифри однакові.');
} else if(number[0] == number[1]) {
    alert(`Перша і друга цифра однакові. Ось твоє число ${number}`);
} else if (number[1] == number[2]) {
    alert(`Друга і третя цифра однакові. Ось твоє число ${number}`);
} else if (number[0] == number[2]) {
    alert(`Перша і третя цифра однакові. Ось твоє число ${number}`);
} else {
    alert('Нема однакових цифр.');
}



// Завдання 4
const year = prompt('Введіть рік, щоб визначити чи він являється високосним.');

if (year >= 1000 && year <= 9999) {
    const whatYear = year % 4;

    if (whatYear === 0) {
        alert('Цей рік високосний.');
    } else {
        alert('Цей рік не являється високосним.');
    }
} else {
    alert('Введіть корректно рік.');
}



// Завдання 5
const p = prompt(`Введіть п'ятизначне число, щоб визначити чи являється воно паліндромом.`);

if ((p > 9999) && (p < 100000))
{
    // const reverse = p[4] + '' + p[3] + '' + p[2] + '' + p[1] + '' + p[0];
    const reverse = p.split('').reverse().join('');

    if (p == reverse) {
        alert('Це число паліндром');
    } else {
        alert('Це число не паліндромом');
    }
} else {
    alert(`Ви ввели не п'ятизначне число.`);
}


// Завдання 6
const dollars = Number(prompt(`Введіть скільки доларів потрібно конвертувати.`));
let currency = prompt(`Введіть у яку валюту потрібно конвертувати (EUR, UAN, AZN).`);
currency = currency.toUpperCase();

const rateEur = .91;
const rateUan = 27.15;
const rateAzn = 1.69;

if (!isNaN(dollars)) {
    switch(currency) {
        case 'EUR':
            alert(`Вийшло ${dollars * rateEur} ${currency}.`);
            break;
        case 'UAN':
            alert(`Вийшло ${dollars * rateUan} ${currency}.`);
            break;
        case 'AZN':
            alert(`Вийшло ${dollars * rateAzn} ${currency}.`);
            break;
        default:
            alert('Ви ввели не вірну валюту.');
    }
} else {
    alert('Ви ввели не число. Введіть число.');
}



// Завдання 7
const amount = Number(prompt(`Введіть суму покупки.`));

if (amount >= 200 && amount < 300) {
    alert(`Сума до оплати ${amount - (amount * .03)} грн. Ваша знижка становить 3% (${amount * .03} грн)`);
} else if (amount >= 300 && amount < 500) {
    alert(`Сума до оплати ${amount - (amount * .05)} грн. Ваша знижка становить 5% (${amount * .05} грн)`);
} else if (amount >= 500) {
    alert(`Сума до оплати ${amount - (amount * .07)} грн. Ваша знижка становить 7% (${amount * .07} грн)`);
} else {
    alert(`Сума до оплати ${amount} грн. У вас немає знижки.`);
}



// Завдання 8
const lengthCircle = Number(prompt(`Введіть довжину окружності.`));
const pSquare = Number(prompt(`Введіть периметр квадрата.`));

const circle = Math.pow(lengthCircle, 2) / (Math.PI * 4);

alert(circle <= pSquare ? `Коло вписується в квадрат. (Квадрат: ${pSquare}. Коло: ${circle})` : `Коло завелике і не вписується в квадрат. (Квадрат: ${pSquare}. Коло: ${circle})`);



// Завдання 9
let result = 0;

function checkQuestion(question, answer) {
    if (question == answer) {
        alert('Відповідь вірна');
        result += 2;
    } else {
        alert('Відповідь не вірна');
    }
}

const q1 = prompt(`Що виведе alert? let arr = [1, 2, 3]; arr.something = 5; alert(arr.something);     Відповіді: 1 - 5; 2 - undefined; 3 - буде помилка`); // 5
checkQuestion(q1, 1);

const q2 = prompt(`Чому рівна довжина arr.length масива arr? let arr = []; arr[1] = 1; arr[3] = 33;     Відповіді: 1 - 1; 2 - 4; 3 - 3`); // 4
checkQuestion(q2, 2);

const q3 = prompt(`Правда що a == b? a = [1, 2, 3]; b = [1, 2, 3];     Відповіді: 1 - Правда; 2 - Не правда; 3 - Як повезе`); // false
checkQuestion(q3, 2);


if(result == 2 || result == 4) {
    alert(`Ви набрали ${result} бали`);
} else {
    alert(`Ви набрали ${result} балів`);
}



// Завдання 10
let date = new Date(prompt(`Введіть дату в такому форматі (2020.01.30)`));

date.setDate(date.getDate() + 3);
alert(date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear());