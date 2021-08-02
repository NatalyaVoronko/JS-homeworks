// https://learn.javascript.ru/task/weekday
// В Европейских странах неделя начинается с понедельника (день номер 1),
// затем идёт вторник (номер 2) и так до воскресенья (номер 7).
// Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

function getLocalDay(date) {
    const day = date.getDay();
    if (day === 0) {
        day = 7;
    }
    return day;
}

const date = new Date(2021, 6, 22);
console.log(getLocalDay(date));

// Variant 2
const getLocalDay = (date) => {
    const day = date.getDay();
    if (day === 0) {
        day = 7;
    }
    return day;
}

const date = new Date(2021, 6, 22);
console.log(getLocalDay(date));
