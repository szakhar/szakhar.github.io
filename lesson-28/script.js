
function resultSel(task) {
    return document.querySelector(`.result-form${task}`);
}

// Оновлює список
function resultVw(desc, fn) {
    return `<div class="inline-box">${desc}<h3 class="h-inline">${fn}</h3></div>`;
}

// Task 1. Реализовать класс, описывающий окружность.
// Task 1.1 поле, хранящее радиус окружности;

class Circle {
    radius = 4;

    get getRadius() {
        return this.radius;
    }

    set setRadius(radius) {
        this.radius = radius;
    }

    get getDiameter() {
        return this.calcLength() / Math.PI;
    }

    // Не знаю чи нормально коли функція яка не get робить return?
    calcArea() {
        return Math.PI * (this.radius * this.radius);
    }

    calcLength() {
        return 2 * Math.PI * this.radius;
    }
}

const circle = new Circle();

// circle.setRadius = 18;
// console.log(circle.getRadius);
// console.log(circle.calcArea());
// console.log(circle.calcLength());
// console.log(circle.getDiameter);



// Task 1.2 get-свойство, возвращающее радиус окружности;

const btnShowRadius = document.querySelector('.btn-show-radius');
const btnHideRadius = document.querySelector('.btn-hide-radius');
const result12 = resultSel(12);

btnShowRadius.addEventListener('click', function() {
    result12.innerHTML = resultVw('Радіус: ', circle.getRadius);
    btnShowRadius.style.display = 'none';
    btnHideRadius.style.display = 'block';
});

btnHideRadius.addEventListener('click', function() {
    result12.innerHTML = '';
    btnShowRadius.style.display = 'block';
    btnHideRadius.style.display = 'none';
});



// Task 1.3 set-свойство, устанавливающее радиус окружности;

form13.addEventListener('submit', function(e) {
    e.preventDefault();

    const radius = form13.radius.value;
    
    circle.setRadius = radius;

    // Update data
    result12.innerHTML = resultVw('Радіус: ', circle.getRadius);
    result14.innerHTML = resultVw('Діаметр: ', circle.getDiameter);
    result15.innerHTML = resultVw('Площа: ', circle.calcArea());
    result16.innerHTML = resultVw('Довжина: ', circle.calcLength());
});



// Task 1.4 get-свойство, возвращающее диаметр окружности;
const result14 = resultSel(14);
result14.innerHTML = resultVw('Діаметр: ', circle.getDiameter);

// Task 1.5 метод, вычисляющий площадь окружности;
const result15 = resultSel(15);
result15.innerHTML = resultVw('Площа: ', circle.calcArea());

// Task 1.6 метод, вычисляющий длину окружности.
const result16 = resultSel(16);
result16.innerHTML = resultVw('Довжина: ', circle.calcLength());






// Task 2. Реализовать класс, описывающий простой маркер.
// Task 2.1 поле, которое хранит цвет маркера;
// Task 2.2 поле, которое хранит количество чернил в маркере (в процентах);
// Task 2.3 метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).

class Marker {
    color = 'goldenrod';
    tank = 13;

    print(text) {
        this.tankTmp = this.tank * 2;
        this.result = '';

        if(this.tank !== 0) {
            // Виводить тільки танк символів кольором мінус пробіли
            this.result += `<span style="color:${this.color}">`;
            for(let i = 0; i < this.tankTmp && i < text.length; i++) {
                if(text[i] === ' ') {
                    this.tankTmp += 1;
                    this.tank += .5;
                }
                this.result += text[i];
                this.tank -= .5;
            }
            this.result += `</span>`;

            // Виводить решту тексту звичайним кольором
            for(let i = this.tankTmp; i < text.length; i++) {
                this.result += text[i];
            }
        } else {
            this.result += text;
        }

        // }

        return this.result;
    }
}

const marker = new Marker();
// console.log(marker.print('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.'));
// console.log(marker.tank);

const result2 = resultSel(2);
result2.innerHTML = resultVw('Маркер заправлено на ', marker.tank + '%');

form2.addEventListener('submit', e => {
    e.preventDefault();

    const text = form2.text.value;
    
    const result21 = resultSel(21);
    result21.innerHTML = resultVw('', marker.print(text));

    // Update Tank
    result2.innerHTML = resultVw('Маркер заправлено на ', marker.tank + '%');
});



// Task 2.4 Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.

class MarkerRefill extends Marker {
    
    refill(markerGas) {
        this.tank += markerGas;
        this.tank > 100 ? this.tank = 100 : this.tank;
        return `Маркер заправлено на ${markerGas}%. Зараз він заправлений на ${this.tank}%`;
    }

}

const markerRef = new MarkerRefill();


const result24 = resultSel(24);
result24.innerHTML = resultVw('Маркер заправлено на ', markerRef.tank + '%');

form24.addEventListener('submit', e => {
    e.preventDefault();

    const tankRefill = +form24.tank.value;
    
    markerRef.refill(tankRefill);

    // Update Tank
    result24.innerHTML = resultVw('Маркер заправлено на ', markerRef.tank + '%');
});

// console.log(markerRef.refill(83));
// console.log(markerRef.print('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.'));




// Task 3. Реализовать класс Employee, описывающий работника, и создать массив работников банка.
// Task 3.1 Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().
// Task 3.2 Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().

// class Employee {
//     firstName = '';
//     lastName = '';
//     age = '';
//     department = '';
// }

// let employeesBank = []

// class EmpTable {

//     constructor(arr) {

//     }

//     get getHtml() {

//     }

// }