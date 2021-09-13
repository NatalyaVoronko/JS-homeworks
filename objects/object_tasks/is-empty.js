// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// https://learn.javascript.ru/task/is-empty

const schedule = {};
const user = {name: "John", surname: "Smith"};

function isEmpty(obj) {
    for (let key in obj) {
        return "false";
    }
    return "true";
}

console.log(isEmpty(schedule));
console.log(isEmpty(user));
