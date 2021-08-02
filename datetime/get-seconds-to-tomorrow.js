// https://learn.javascript.ru/task/get-seconds-to-tomorrow
// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
// Например, если сейчас 23:00, то:
// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

const getSecondsToTomorrow  = () => {
    const d = new Date();
    return 86400 -(d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds());
}

console.log(getSecondsToTomorrow());
