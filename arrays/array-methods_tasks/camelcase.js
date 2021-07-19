//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
//
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
//
// Примеры:
//
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов,
// потом переделайте всё как нужно и методом join соедините обратно.


function camelize(string) {

    let string = "my-short-string";
    let arr = string.split(",");

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase();
    }
;
alert(camelize(string));

