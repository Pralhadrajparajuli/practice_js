// const user = {
//   name: "Alice",

//   sayHello() {
//     console.log("Hello!");
//   }
// };

// user.sayHello();


// class user{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     sayhello(){
//         console.log("hello "+this.name )
//     }
// }
// const user1=new user("alice",20);
// console.log(user1.name);
// user1.sayhello();


// function user(name,age)
// {
//     this.name=name;
//     this.age=age;

// }

// const user1=new user("alice",20);
// console.log(user1.name);



// const user={
//     name:"alice",
//     age:20,
//     address:{
//         city:"pokhara"
//     }

// };
// const admin=user;
// admin.name="bob";
// console.log(admin.name);

// const copy=structuredClone(user);
// copy.name="bob";
// console.log(copy.name,copy.age);
// console.log(user.name);
// copy.address.city="ktm";
// console.log(user.address.city);
// console.log(copy.address.city);

const user = {
  [Symbol.toPrimitive](hint) {

    if (hint === "string") {
      return "alice";
    }

    if (hint === "number") {
      return 150;
    }

    return 80;
  }
};

console.log(user + 20);
console.log(String(user));
console.log(Number(user));


