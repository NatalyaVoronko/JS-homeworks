// Следующая функция возвращает true, если параметр age больше 18.
//
// В ином случае она задаёт вопрос confirm и возвращает его результат.
//
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
//
// Сделайте два варианта функции checkAge:
//
// Используя оператор ||
const user1Age = 15;
const user2Age = 19;
function checkAge(age) {
    return (age > 18) || console.log('Родители разрешили?');
}
console.log (checkAge(user1Age));
console.log(checkAge(user2Age));