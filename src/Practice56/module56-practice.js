// const users = [
//   {
//     id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     id: "249b6175-5c30-44c6-b154-f120923736f5",
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     id: "150b00fb-dd82-427d-9faf-2879ea87c695",
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     id: "e1bf46ab-7168-491e-925e-f01e21394812",
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];
// Task 1

// Отримати масив імен усіх користувачів (поле name).
// console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
// зробити функцію універсальною, щоб вона повертала
// масив будь-якої заданої властивості

// function getUserNames(array) {
//   return array.map((element) => element.name);
// }

// function getUserProps(array, prop) {
//   return array.map((element) => element[prop]);
// }
// console.log(getUserProps(users, "gender"));

// Task 2

// Отримати масив користувачів віком від min до max
// console.log(getUsersWithAge(users, 20, 30));
// [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]
// console.log(getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]

// function getUsersWithAge(array, minAge, maxAge) {
//   return array.filter(
//     (element) => element.age >= minAge && element.age <= maxAge
//   );
// }

// Task 4

// Отримати масив всіх навичок усіх користувачів (поле skills), при цьому не повинно бути
// повторювань навичок і вони мають бути відсортовані в алфавітному порядку.
// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// function getSortedUniqueSkills(array) {
//   return array
//     .flatMap((element) => element.skills)
//     .filter((element, index, array) => array.indexOf(element) === index)
//     .toSorted((a, b) => a.localeCompare(b));
// }

// Task 3

// Отримати масив імен користувачів по полю (поле gender)

// function getUsersWithGender(arr, gender) {
//   // return arr.filter(elem => elem.gender === gender)
//   //   .map(elem => elem.name);
//   return arr.reduce((accum, elem) => elem.gender === gender ? [...accum, elem.name] : accum, [])
// };
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


// Task 6

//Створити статистику - об'єкт, у якому вказується кількість тегів

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const statObj = {};

// tweets.flatMap(elem => elem.tags)
//   .forEach(tag => {
//     if (statObj[tag]) {
//       statObj[tag] += 1;
//     }
//     else {
//       statObj[tag] = 1;
//     }
//     console.log(statObj);
// })

// console.log(statObj);

//1. Створи клас User для створення користувача з такими властивостями:
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. конструктор очікує 1 параметр - об'єкт налаштувань з однойменними властивостями
//Додай метод getInfo(), який повертає рядок:
//`Користувачеві <name> <age> років і в нього <posts> публікацій.`

// class User {
//     constructor(userName, age, numbersOfPost) {
//         this.userName = userName;
//         this.age = age;
//         this.numbersOfPost = numbersOfPost;
//     }
//     getInfo() {
//         return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`;
//     }
    
// }

// const user = new User("Alice", 25, 15);
// console.log(user.getInfo());


//3. Напиши класс Notes який управляє коллекцієй нотаток у
//властивості items.
//Нотатка це  об'єкт з властивостями text, priority
//Додай класу статичну властивість Priority,
//в якій буде зберігатись об'єкт з пріорітетами ("hight", "middle", "low").
//Додай методи addNote(note), removeNote(noteText)
//updatePriority(noteText, newPriority)


// class Notes {
//     static Priority = {HIGHT: "hight", MIDDLE: "middle", LOW: "low"}
//     constructor() {
//         this.items = [];
     
//     }
//     addNote(note) {this.items.push(note)}

//     removeNote(noteText) {this.items = this.items.filter(note => note.text !== noteText)}

//     updatePriority(noteText, newPriority) {
//         const note = this.items.find(({text}) => text === noteText) 
//         if (note) {
//             note.priority = newPriority
//         }
//     }
// }

// const notes = new Notes()
// notes.addNote({text: "lorem loremlorem", priority: Notes.Priority.MIDDLE})
// notes.addNote({text: "lorem 1212551251", priority: Notes.Priority.HIGHT})
// notes.addNote({text: "lorem sdfghliutyrterwert", priority: Notes.Priority.LOW})
// notes.removeNote("lorem sdfghliutyrterwert")
// notes.updatePriority("lorem loremlorem", Notes.Priority.LOW)
// console.log(notes);


// 4. Створити клас Worker, у якого є властивості name, age, salary.
//У класу Worker є метод getSalary, який повертає повідомлення
//"Worker <name> has salary <salary> dollars"
//Створити клас TopLevelWorker, у якого є властивість position
//і який успадковує клас Worker, додаючи метод getPosition
// який повертає повідомлення "<name> works as <position>"

// class Worker {
//   constructor(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }
//   getSalary() {
//     return `Worker ${this.name} has salary ${this.salary} dollars`
//   }
// }

// class TopLevelWorker extends Worker {
//   constructor(name, age, salary, position) {
//     super(name, age, salary);
//     this.position = position;
//   }
//   getPosition() {
//     return `${this.name} works as ${this.position}`;
//   }
// }

// const topLevelWorker = new TopLevelWorker('Alex', 19, 5000, 'Fullstack_Dev');
// const enotherWorker = new TopLevelWorker('Milana', 18, 5500, 'Backend_Dev');

// console.log(topLevelWorker);
// console.log(enotherWorker);



//----Home work

// Ex.1
//2. Напиши класс Client який створює об'єкт
//із властивостями login, email
//Об'яви приватні властивості #login і #email,
//доступ до яких зроби через геттер и сеттер:
// get getClientData() має повертати об'єкт з переліченими властивостями
// set changeEmail(newEmail) перезаписує пошту користувача

// class Client {
//     #login;
//     #email;
//     constructor (login, email) {
//         this.#login = login;
//         this.#email = email;
//     }
//     get getClientData() {
//         return {
//             login: this.#login,
//             email: this.#email};
//     }
//     set changeEmail(newEmail) {
//         if(!this.#checkEmailValid(newEmail)) {
//            console.log( `Wrong email. Must include @`);
//         }
//         this.#email = newEmail;
//         console.log(this.#email);
//     } 
//     #checkEmailValid (newEmail) {
//         return newEmail.includes('@');
//     }

// }

// const client = new Client('Alex', 'alex@gmail.com');
// console.log(client.getClientData);
// client.login = 'Endy'
// console.log(client.login);
// client.changeEmail = 'newEmail@gmail.com';
// console.log();



// Ex.2
//Напиши клас Storage який створює об'єкти
//Для управління складом товарів.
//При виклику отримуватиме один агрумент - початковий масив товарів,
//і записувати їх у властивість items.
//Додай методи класу:
//getItems() - повертайте масив товарів
//addItems(item) - отримує новий товар та додає його до поточних
//removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних

class Storage {
    constructor(array) {
        this.items = array;
    }
    getItems() {
        return this.items;
    }
    addItams(newItem) {
        if(!newItem) {
            return `Wrong item`;
        }
        this.items.push(newItem);
    }
    removeItem(item) {
        const delItem = this.items.find(elem=>elem === item);
        console.log(delItem);
        if(!delItem) {
            console.log(`Item ${item} not found`);
        }
        this.items = this.items.filter(elem => elem !== item);
    }
}
const itemsArray = ['iPhoneX', 'iPhone11', 'iPhone12', 'iPhone13'];
const storage = new Storage(itemsArray);
console.log(storage.getItems());
storage.addItams('iPhone13pro');
console.log(storage.getItems());
storage.removeItem('iPhone');
console.log(storage.getItems());


// Ex.3
//  Написати клас, який буде представляти зоопарк тварин.
//  Створити загальний клас Animal для тварин.
// У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// Кожен тип тварин повинен мати свої властивості та методи, наприклад,
//  методи для отримання інформації про тварину та для годівлі тварин.
//  Крім того, зоопарк повинен мати метод для додавання тварин до списку та
// метод для виведення списку всіх тварин у зоопарку.