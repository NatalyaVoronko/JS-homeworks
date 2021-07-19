// 2. Перобразовать массив в строку и обратно в массив

const fruit = ['orange', 'banana', 'apple', 'pear', 'peach'];

const stringFruit = fruit.join(',');
console.log (stringFruit);

const arrayFruit = stringFruit.split(',');
console.log (arrayFruit);
