// let numbers = [1, 2, 3, 4, 5];

// let even = numbers.filter(number => number % 2 === 0);

// console.log(even);


let names = ["Ram", "Sita", "Hari"];
// let result = names.map(name => name.toUpperCase());


// let result=names.filter(name=> name.length>3);

// let result=names.find(name => name.length>2)

// names.forEach(name => console.log(name));
let result=names.every(name => name.length>=2)

console.log(result);


let users = [
    { name: "Ram", age: 20 },
    { name: "Sita", age: 17 },
    { name: "Hari", age: 25 }
];

// let answer=users.map(user=>user.name.toUpperCase();


let answer=users.filter(user=>user.age>18);

 console.log(answer);