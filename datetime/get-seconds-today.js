// https://learn.javascript.ru/task/get-seconds-today
// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
//
// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
// // getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

const getSecondsToday = () => {
    const d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

console.log(getSecondsToday());