"use strict";

// современные возможности JS

// основная проблема переменной var была в хостинге, переменная создается ещё до того как запускается скрипт
// в основном исполбзуется const везде, где не нужно использовать let

// стрелочные функции не имеют своего собственного контекста вызова this и берут данные у своего родителя

// методы map и filter это методы перебора массивов. они перебирают массив и возвращают новый в зависимости от того колбека, который я передал в них

let names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

let shortNames = names.filter((name) => {
    return name.length < 5 // это условие будет проверять каждое имя на количество символов
});

console.log(shortNames);

//метод map служит для того что бы трансформировать каждый элемент массива и сформировать новый массив с результатами его действий

let answers = ['IvAn', 'AnnA', 'HeLLo'];
// эту же переменную можно перезаписать на новую 
answers = answers.map((item) => item.toLowerCase());

console.log(answers);

// интерполяция

console.log(`Пользователь ${name}, ${age} лет`); // можно динамически формировать URL пути

function fetchData(data, count = 0) {
    console.log(`Данные: ${data} в количестве ${count}`)
}
fetchData('Something');

function max (a, b, ...numbers) { // объединение набора значений в один массив. В данном случае оператор работает как "rest"
    console.log(numbers);
} // эта функция принимает значения и возвращает самые максимальные из них

max(3, 4, 67, 97);

const arr1 = [1, 2, 5],
      arr2 = [43, 2, 6];

const res = Math.max(...arr1, ...arr2); // ... При использовании в любом итерируемом объекте (iterable), данный оператор "разбивает" ("spread") его на индивидуальные элементы 

// в стандарте es8 был добавлен метод objectSpread оператор

const user = { 
    name: 'default',
    pass: 'qwerty',
    rights:'user'
};

const admin = {
    name: 'admin',
    pass: 'root'
};
const res = Object.assign({}, user, admin); // ES6 стандарт
const res = {...user, ...admin}; // ES8 сандарт
console.log(res); // { name: 'admin', pass: 'root', rights: 'user' }

const x = 25, y = 10;
const coords = {
    x: x,
    y: y
}

console.log(coords); //{ x: 25, y: 10 }

const x = 25, y = 10;
const coords = {x,y} // эта запись эквивалентна записи выше

console.log(coords); //{ x: 25, y: 10 }

// ДЕСТРУКТУРИЗАЦИЯ - применяется как к объектам так и к массивам

const user = { 
    name: 'default',
    pass: 'qwerty',
    rights: 'user'
};

const userName = user.name; 
const userPass = user.pass; // для того, что бы не создавать множетво таких переменных нужно Деструтиризировать объект
//пример 
const user = { 
    name: 'default',
    pass: 'qwerty',
    rights: 'user'
};

const {name, pass, rights} = user;

console.log(name, rights); // default user

const user = { 
    name: {
        first: 'Sam',
        second: 'Smith'
    },
    pass: 'qwerty',
    rights: 'user'
};

const {name: {first, second}, pass, rights} = user;

console.log(first, second); // Sam Smith


//типичный патерн в JS
function connect(options) {
    // В стандартном синтексесе мне пришлось бы проверять каждую опцию на то, является ли она undefined или нет, присваивать ей значение по усолчанию и тд.
    // вместо этого можно поместить объект вместо options и записать в нем параметры по умолчанию 
}

connect({
    host: 'localhost',
    port: '3000',
    user: 'default' // в этой функции использовано Деструктуризаюцию и параметры по умолч.
})

function connect({
    host = 'localhost', // в этой функции использовано Деструктуризаюцию и параметры по умолч., это избавляет от нескольких проблем, например:
    port = 3000,        // пользователь может передавать эти параметры не в том порядке либо вообще некоторые не ввести 
    user = 'default' }) {
        console.log(`host: ${host}, port: ${port}, user: ${user}`)
}

connect({
    port: 232 // host: localhost, port: 232, user: default
})

// вынос значений из массива в отдельную переменную определенные значения с помощью Деструктуризации 
const numbers = [3, 5, 6, 6];

const [a, b, c] = numbers;
console.log(a, b, c) // 3 5 6

const numbers = [3, 5, 6, 6];

const [, , c] = numbers; // если нужно получить любую переменную например - третью 
console.log(c) // 6

const numbers = [[3, 5], [6, 6]];
// numbers[0][0] // старый вариант что бы получить 3 
const [[a, b], [c, d]] = numbers; // если нужно получить переменную в массиве
console.log(a, b, c, d) // 3 5 6 6

const country = {
    name: 'England',
    population: 2000000,
    gender: {
        male: ['15%', '40%'],
        female: ['16%', '29%']
    }
}

// country.gender.male[0] // старый способ

const {gender: {male: [maleUnder18, maleAdult], female: [femUnder18, femAdult]}} = country;

console.log(maleUnder18, femAdult); // 15% 29%