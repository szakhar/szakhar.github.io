
// Завдання 1
const name = prompt(`Як тебе звати?`);
alert(`Привіт, ${name}! Круто правда? То я твоє ім'я вгадав. Чесно.`);


// Завдання 2
const yearOfBirth = prompt(`Який рік твого народження?`);
alert(`Тобі от стільки років ${2020 - yearOfBirth}. Не знав? Тепер будеш знати :)`);


// Завдання 3
const sideSquare = prompt(`Введіть довжину сторони квадрата`);
alert(`Ось такий от периметр квадрата получився ${4 * sideSquare}. А якщо нє ну то нічо :)`);


// Завдання 4
const radiusCircle = prompt(`Вкажи радіус кола, щоб я міг порахувати для тебе площу цієї окружності`);
alert(`Ось такево от получилось. Площа твоєї окружності ${Math.PI * (radiusCircle * radiusCircle)}.`);


// Завдання 5
const distance = prompt(`Вкажи будь ласка відстань між містами в км`);
const time = prompt(`Вкажи за скільки часу хочеш долетіти. Вказувати в годинах.`);
alert(`Я от туткаво для тебе порахував як тобі треба буде летіти, щоб встигнути за цей час, але це без урахування зупинок, тому прийдеться потерпіти. Ось ${distance / time} км/год.`);


// Завдання 6
const exchangeRate = .92;
const dollars = prompt(`Кіко долярів вам потрібно поміняти?`);
alert(`Ось тримайте ${dollars * exchangeRate}€.`);


// Завдання 7
const gb = prompt(`Скільки Гб у вас флешка?`);
const shon = Math.floor((gb * 1024) / 820);
alert(`У вас влізе лише ${shon} серій баранчика Шона. Так, одна серія займає багато а ж 820 Мб, але якість дуже хороша.`);


// Завдання 7
const money = prompt(`Скільки у вас є грошиків на чукуляди?`);
const chokoPrice = prompt(`А кіко коштує чукуляда?`);
const buy = Math.floor(money / chokoPrice);
alert(`Ви можете купити ${buy} чукуляд.`);
alert(`У вас залишилось ${money - (buy * chokoPrice)} грошиків.`);


// Завдання 8
let number = 0, result = 0;
number = prompt(`Введіть трьохзначне число.`);

while (number > 0) {
    result = result * 10 + number % 10;
    number = Math.floor(number / 10);
}

alert(`Твоє число задом наперед ${result}.`);


// Завдання 9
const totalMoney = prompt(`Яка сума вкладу на 2 місяці? (Процентна ставка 5% річних)`);
const yearPercent = (totalMoney / 100) * 5;
const twoMonthPercent = (yearPercent / 12) * 2;
alert(`Ви заробите ${twoMonthPercent} грошиків`);