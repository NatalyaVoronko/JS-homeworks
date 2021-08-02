// https://learn.javascript.ru/task/get-date-ago
// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.


const getDateAgo = (date, days) => {
    date.setDate(date.getDate() - days);
    return date.getDate();
}

const date = new Date(2021, 6, 28);

console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 2));
console.log(getDateAgo(date, 365));
