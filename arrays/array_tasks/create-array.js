//Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.

let arr = ['Джаз', 'Блюз'];

arr.push('Рок-н-ролл');

arr[((arr.length - 1) / 2)] = 'Классика';

console.log(arr.shift());

arr.unshift('Рэп', 'Регги');

console.log(arr);
