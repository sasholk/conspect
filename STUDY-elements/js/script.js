'use strict';

// 29 ДЕЙСТВИЯ С ЭЛЕМЕНТАМИ НА СТРАНИЦЕ

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

console.dir(box); // получение эелемента в качестве объекта

// внесение изменений в inline-стили (в основном с ними работать не нужно, альтернатива - работа с css классами)
box.style.backgroundColor = 'blue'; 
box.style.width = '500px';

// внесение нескольких изменений в inline-стили
box.style.cssText = 'background-color: blue; width: 500px';

// внесение изменений сразу для нескольких элементов (старый вариант использования)
for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
}

// внесение изменений сразу для нескольких элементов
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

// методы для работы с эдементами на странице
const div = document.createElement('div'); // эта команда сохраняет только внутри JS-файла
const text = document.createTextNode('Тут был я'); // создание текста на странице (практически не испотльзуется)

// classList - через точку можно писать действия с нашим классом: удаление, добавление, переключение, проверка на содержание или определение количества определенных классов к элементу
div.classList.add('black');

// метод append вставляет элемент в конец родителя 
document.body.append(div); // в этом случае я взял тег бади в качестве родителя и добавил ему див
wrapper.append(div); // добавил к вреперу

// метод prepend вставляет в начало 
wrapper.prepend(div);

hearts[0].before(div); // Вставляет перед сердечком
hearts[0].after(div); // наоборот 

circles[0].remove();

hearts[0].replaceWith(circles[0]); // позволяет заменять элементы между собой 

// добавление текста или HTML код прямо в элементы 
div.innerHTML = "<h1>Hello World</h1>"; 

div.textContent = "Hello"; // работает только с текстом и сюда html-структура уже не подойдет. Обычно используется для работы с клиентом 

// вставка html-кода перед или после определенных тегов с помощью метода insertAdjacentHTML. 
// Этот метод принимает два аргумента 1-й это специальное слово а 2-й это html, который нужно вставить
// beforebegin - вставляет данные перед началом элемента. afterbegin - вставляет данные в начало элемента. 
// beforeend - вставляет данные в конец элемента. afterend - вставляет данные после конца элемента
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');