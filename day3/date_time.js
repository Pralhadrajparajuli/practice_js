let date = new Date();


// console.log(date);


let hour = date.getHours();
let minute = String(date.getMinutes()).padStart(2, "0");

let ampm = hour >= 12 ? "PM" : "AM";

hour = hour % 12;
hour = hour || 12;

console.log(hour + ":" + minute + " " + ampm);


console.log(date.getDay()+ 1);
console.log(date.getFullYear());
console.log(date.getMinutes());