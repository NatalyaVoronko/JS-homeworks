// 3. Добавить к каждому элементу массива слова hello

let users = ['Viktor', 'Olga', 'Vitaliy', 'Oleg', 'Svetlana'];

for (let i = 0; i < users.length; i++) {
    users[i] = ('hello, ' + users[i]);
}

console.log(users);


// variant 2
// let users = ['Viktor', 'Olga', 'Vitaliy', 'Oleg', 'Svetlana'];

//users.forEach((item, index) => {
//    users[index] = 'Hello, ' + item;
//})

//console.log(users);
