// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b
const a = prompt ('Введите число a:');
const b = prompt ('Введите число b:');
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
alert (min(a,b));

// ИЛИ
//const min = (a, b) => a < b ? a : b;
// alert( min(3, 2) );