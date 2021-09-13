// 1. Есть объект a с набором свойств, объект b должен унаследовать свойства a

class User {
    name = "Иван";
    surname = "Иванов";
}

class FiredEmployees extends User {
    personDetails() {
        console.log(`${this.name} ${this.surname} уволен.`);
    }
}

const fired = new FiredEmployees();

fired.personDetails();

// В задании сказано объект, но в статьях было про наследование классов в основном. Если все же наследование объекта:
const fruit = {
    name: "banana"
};
const food = {
    __proto__: fruit,
    vegetable: "potato"
};

console.log(food.vegetable);
console.log(food.name);
