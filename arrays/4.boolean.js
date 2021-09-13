// 4. Преобразовать числовой массив в boolean

let arr = [1, 3, 0, 24];

for (let i = 0; i < arr.length; i++) {
    arr[i] = Boolean(arr[i]);
}

console.log(typeof (arr[2]));
console.log(Boolean(arr[2]));
console.log(Boolean(arr[0]));

// variant 2

// let arr = [0, 1, 2, 3];
//
//arr.forEach((index) => {
//        arr[index] = Boolean(arr[index]);
//    }
//);
//console.log(Boolean(arr[0]));
//console.log(Boolean(arr[1]));

// variant 3

//let arr = [8, 0, 12, 6, 3];

//let arrBoolean = arr.map(item => !!item);

//console.log(Boolean(arrBoolean[0]));
//console.log(Boolean(arrBoolean[1]));
//console.log(arrBoolean);