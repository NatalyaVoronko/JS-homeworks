//Напишите функцию pow(x,n), которая возвращает x в степени n.
// Иначе говоря, умножает x на себя n раз и возвращает результат.const x = prompt ('x');

const x = prompt ('x');
const n = prompt ('n');
function pow(a,b) {
    if (b>=1){
        return (a**b);
    } else { return ('Incorrect n');
    }
}
alert (pow(x,n));
