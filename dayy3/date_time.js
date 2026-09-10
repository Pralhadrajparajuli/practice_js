let date = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let Day=days[date.getDay()];
// console.log(days[date.getDay()]);

let hour = date.getHours();
let minute = String(date.getMinutes()).padStart(2, "0");
let sec=date.getSeconds();
let ampm = hour >= 12 ? "PM" : "AM";

hour = hour % 12;
hour = hour || 12;

console.log("today is : " + Day);

console.log(hour +" "+ ampm + ":" + minute + ":" +sec);


// console.log(date.getDay()+ 1);
// console.log(date.getFullYear());
// console.log(date.getMinutes());