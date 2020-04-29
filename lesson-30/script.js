
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

function sortingText(list, field) {
    list.sort((a, b) => {
        let nameA = a[field].toLowerCase();
        let nameB = b[field].toLowerCase();
        if (nameA < nameB)
            return -1
        if (nameA > nameB)
            return 1
        return 0
    });
}

function sortingNumber(list, field) {
    list.sort((a, b) => {
        return a[field] - b[field];
    });
}

function showTable(list) {
    let table = '<table>';

    table += `<tr>
                  <th class="sort-name">Ім'я</th>
                  <th class="sort-age">Вік</th>
                  <th class="sort-department">Відділ</th>
              </tr>`;

    for(item of list) {
        table += `<tr>
                      <td>${item.fullName}</td>
                      <td>${item.age}</td>
                      <td>${item.department}</td>
                  </tr>`;
    }

    return table += '</table>';
}



const table = document.querySelector('.table');
table.innerHTML = showTable(tableList);



const sortName = document.querySelector('.sort-name');

sortName.addEventListener('click', () => {
    sortingText(tableList, 'fullName');
    table.innerHTML = showTable(tableList);
    // console.log(1);
});



const sortAge = document.querySelector('.sort-age');

sortAge.addEventListener('click', () => {
    sortingNumber(tableList, 'age');
    table.innerHTML = showTable(tableList);
    // console.log(2);
});



const sortDepartment = document.querySelector('.sort-department');

sortDepartment.addEventListener('click', () => {
    sortingText(tableList, 'department');
    table.innerHTML = showTable(tableList);
    // console.log(3);
});

// Task 3. Создать HTML-страницу с блоком текста в рамочке.
// Реализовать возможность изменять размер блока,
// если зажать мышку в правом нижнем углу и тянуть ее дальше.