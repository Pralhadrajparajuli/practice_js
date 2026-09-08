let a="helooo"
a=12345
console.log(a);

//bigint
let Bignumber=1234446756875876876967n

console.log(Bignumber)
//string
const name="pral"
address="ktm"
number=12345

console.log(`my name is ${name} and address is ${address} and number is ${number}`)
//boolean
let age=20
console.log(age>18)
if (age>18)
{
    console.log(`my name is pral`)
}
else 
{
    console.log(`bye`)
}
//boolean
let nameFieldChecked = true; 
let ageFieldChecked = false;
console.log(nameFieldChecked);
console.log(ageFieldChecked);
 
//null
let money=null;
console.log(money)

//object
let person = {
    name: "Pral",
    age: 20,
    address: "KTM"
};
console.log(person.age)

console.log(person.name,person.age,person.address);
//type of
console.log(typeof name);
//symbol
let id = Symbol("id");

console.log(id);
let aa = Symbol("id");
let bb = Symbol("id");

console.log(aa === bb);
let namee = prompt("What is your name?");

alert("Hello " + namee);

let answer = confirm("Do you like JavaScript?");

console.log(answer);
//type conversion
let agee=Number(prompt("enter a age"));
console.log(agee+55)