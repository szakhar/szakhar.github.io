
// Task 1. Создать HTML-страницу для отображения/редактирования текста.
// При открытии страницы текст отображается с помощью тега div.
// При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом,
// который теперь можно редактировать. При нажатии Ctrl + ,
// вместо textarea появляется div с уже измененным текстом.
// Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.

const resultText = document.querySelector('.result-text');
const editorText = document.querySelector('.editor-text');

window.addEventListener('keydown', event => {
    if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        editorText.classList.remove('hide');
        resultText.classList.add('hide');
        editorText.innerText = resultText.innerText;
    }

    if (event.code == 'Equal' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        editorText.classList.add('hide');
        resultText.classList.remove('hide');
        resultText.innerText = editorText.value;
    }
});




// Task 2. Создать HTML-страницу с большой таблицей.
// При клике по заголовку колонки, необходимо отсортировать
// данные по этой колонке. Учтите, что числовые значения
// должны сортироваться как числа, а не как строки.

const tableList = [
    {
        fullName: 'John Butler',
        age: 30,
        department: 'Marketing'
    },
    {
        fullName: 'Emma Gray',
        age: 24,
        department: 'Design'
    },
    {
        fullName: 'James Hart',
        age: 34,
        department: 'Management'
    },
    {
        fullName: 'Lucas Hall',
        age: 29,
        department: 'Production'
    },
    {
        fullName: 'Henry Brown',
        age: 38,
        department: 'Finance'
    },
    {
        fullName: 'Olivia Baker',
        age: 21,
        department: 'Marketing'
    },
];

function sortingText(list, field, reverse = false) {
    const arr = list.sort((a, b) => {
        let nameA = a[field].toLowerCase();
        let nameB = b[field].toLowerCase();
        if (nameA < nameB)
            return -1
        if (nameA > nameB)
            return 1
        return 0
    });
    
    (reverse) ? arr.reverse() : arr;
}

function sortingNumber(list, field, reverse = false) {
    const arr = list.sort((a, b) => {
        return a[field] - b[field];
    });

    (reverse) ? arr.reverse() : arr;
}

function showTable(list) {
    let table = '';

    for(item of list) {
        table += `<tr>
                      <td>${item.fullName}</td>
                      <td class="col-age">${item.age}</td>
                      <td>${item.department}</td>
                  </tr>`;
    }

    return table;
}

function checkSort (classSort, listSort, rowSort, type = 'text') {
    const sort = document.querySelector(`.${classSort}`);
    
    // Видаляє всі стрілки перед тим як додати нову
    const spanArrowAll = document.querySelectorAll(`.sort-h span`);
    for (let i=0; i < spanArrowAll.length; i++) {
        spanArrowAll[i].classList.remove('arrow');
    }

    if (type == 'text') {
        if (sort.classList.contains('sort')) {
            addArrow(type, listSort, rowSort, classSort, true, 180);
        } else {
            addArrow(type, listSort, rowSort, classSort);
        }
    } else {
        if (sort.classList.contains('sort')) {
            addArrow(type, listSort, rowSort, classSort, true, 180);
        } else {
            addArrow(type, listSort, rowSort, classSort);
        }
    }
}

function addArrow(type, list, row, classSort, reverse = false, deg = 0) {
    const sort = document.querySelector(`.${classSort}`);
    const spanArrow = document.querySelector(`.${classSort} span`);

    if (type === 'text') {
        sortingText(list, row, reverse);
    } else {
        sortingNumber(list, row, reverse);
    }
    
    sort.classList.toggle('sort');
    spanArrow.classList.add('arrow');
    const arrow = document.querySelector(`.arrow`);
    arrow.style.transform = `rotate(${deg}deg)`;
}


const table = document.querySelector('.table');
table.innerHTML = showTable(tableList);



const sortTable = document.querySelector('.sort-table');

sortTable.addEventListener('click', event => {
    const className = event.target.classList[0];

    if (className === 'sort-department') {
        checkSort('sort-department', tableList, 'department');
    } else if (className === 'sort-age') {
        checkSort('sort-age', tableList, 'age', 'number');
    } else {
        checkSort('sort-name', tableList, 'fullName');
    }

    table.innerHTML = showTable(tableList);
});




// Task 3. Создать HTML-страницу с блоком текста в рамочке.
// Реализовать возможность изменять размер блока,
// если зажать мышку в правом нижнем углу и тянуть ее дальше.

const resizeTable = document.querySelector('.resize-table');
const resizeBtn = document.querySelector('.resize-btn');

function resize(event) {
    resizeTable.style.width = event.clientX - resizeTable.getBoundingClientRect().left + 'px'
    resizeTable.style.height = event.clientY - resizeTable.getBoundingClientRect().top + 'px'
}

function stopResize() {
    document.removeEventListener('mousemove', resize)
}

resizeBtn.addEventListener('mousedown', () => {
    document.addEventListener('mousemove', resize);
    
});
document.addEventListener('mouseup', stopResize);