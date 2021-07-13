//3. Функция вычисления типа аргумента и вывод в консоль
const a = 3;
const b = 'some text';
function getType(argument){
    return typeof argument;
}
console.log(getType(a));
console.log(getType(b));
