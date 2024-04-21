// const user = {
//     name: "Kate",
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     },
//     city: "Kyiv",
//     age: 30
// }

// // console.log(user.name);
// const { name, skills, ...obj} = user;

// console.log(name);
// console.log(skills);
// console.log(obj);


// const user = {
//     name: "Kate",
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     },
//     city: "Kyiv",
//     age: 30
// }

// const { skills: {html: my, css, js, react: node = true } } = user;
// console.log(node);

/** Destructuring of array */

// const arr = [1, 2, 3, 4, 5, 6];

// const [first,, second,,,, third = 8] = arr;

// console.log(first);
// console.log(second);
// console.log(third);

// const [first, second, ...newArr] = arr;

// console.log(first);
// console.log(newArr);


// const user = {
//     name: "Kate",
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     },
//     city: "Kyiv",
//     age: 30
// }

// function getUserName({name, skills: { css, js, html }}) {
//     console.log(`Hello my name is ${name}, I know html - ${html}`);
// }

// getUserName(user);

// function foo(obj) {
//     console.log(obj);
// }

// foo();

// const users = [{ name: "Kate" }, { name: "Petya", city: "Dnipro" }, { name: "Alice", city: "Kiyv" }]


// const names = users.map(({name}) =>  name);
// console.log(names);

// const user = {
//     id: 1,
//     username: "harry_potter",
//     profile: {
//         name: "Harry",
//         surname: "Potter",
//         age: 25,
//     },
// };

// const { username, profile: { name, surname, ...tailProfile }, ...tailUser } = user;

// console.log(tailUser);
// console.log(tailProfile);

// console.log(`User name: ${name}`);
// console.log(`User name: ${surname}`);
// console.log(`User name: ${username}`);

// const product = {
//     name: "Smart TV",
//     price: 25000,
//     category: "Electronics",
//     details: {
//         brand: "Samsung",
//         color: "Black",
//         weight: "15.5",
//     },
// };

// function displayProductInfo({
//     name,
//     price,
//     category,
//     details: {
//         brand,
//         color,
//         weight
//     }
// }) {
// console.log(`${name}`);
// }

// displayProductInfo(product);

function calculateHousePerimeter({ sideA, sideB, sideC, sideD }) {
    const perimeter = sideA + sideB + sideC + sideD;
    return perimeter;
}

const house = {
    sideA: 10,
    sideB: 15,
    sideC: 10,
    sideD: 15
}

const perimeter = calculateHousePerimeter(house);
console.log(perimeter);