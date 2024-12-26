"use strict";
// //Inheritance
// // 1 
// class Animal {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     makeSound() {
//         console.log("Some generic sound...");
//     }
// }
// class Dog extends Animal {
//     makeSound() {
//         console.log("Woof woof!");
//     }
// }
// const myDog = new Dog("Buddy");
// console.log(myDog.name); 
// myDog.makeSound(); 
// // 2
// class Vehicle {
//     start() {
//         console.log("The vehicle starts moving.");
//     }
// }
// class Car extends Vehicle {
//     start() {
//         super.start();
//         console.log("The car is now driving.");
//     }
// }
// const myCar = new Car();
// myCar.start();
// // 3
// class Person {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     greet() {
//         console.log(`Hello, my name is ${this.name}.`);
//     }
// }
// class Student extends Person {
//     grade: number;
//     constructor(name: string, grade: number) {
//         super(name);
//         this.grade = grade;
//     }
//     study() {
//         console.log(`${this.name} is studying in grade ${this.grade}.`);
//     }
// }
// const student = new Student("Khojiakbar", 9);
// student.greet(); 
// student.study();
// //Encapsulation
// // 1
// class User {
//     private password: string;
//     constructor(password: string) {
//         this.password = password;
//     }
//     getPassword(): string {
//         return "Access Denied";
//     }
//     setPassword(newPassword: string): void {
//         if (newPassword.length >= 8) {
//             this.password = newPassword;
//         } else {
//             console.log("Password must be at least 8 characters long.");
//         }
//     }
// }
// const user = new User("mypassword123");
// console.log(user.getPassword()); 
// user.setPassword("newpass"); 
// user.setPassword("newpassword123");
// // 2
// class BankAccount {
//     protected balance: number;
//     constructor(initialBalance: number) {
//         this.balance = initialBalance;
//     }
//     getBalance(): number {
//         return this.balance;
//     }
// }
// class SavingsAccount extends BankAccount {
//     addInterest(rate: number): void {
//         this.balance += this.balance * rate;
//     }
// }
// const account = new SavingsAccount(1000);
// account.addInterest(0.05);
// console.log(account.getBalance()); 
// // 3
// class Product {
//     readonly id: number;
//     name: string;
//     constructor(id: number, name: string) {
//         this.id = id;
//         this.name = name;
//     }
//     updateName(newName: string): void {
//         this.name = newName;
//     }
// }
// const product = new Product(1, "Laptop");
// console.log(product.id); 
// product.updateName("Gaming Laptop");
// console.log(product.name); 
// //Polymorphism
// // 1
// class Shape {
//     area(): void {
//         console.log("Calculating area...");
//     }
// }
// class Circle extends Shape {
//     radius: number;
//     constructor(radius: number) {
//         super();
//         this.radius = radius;
//     }
//     area(): void {
//         console.log(`Circle area: ${Math.PI * this.radius ** 2}`);
//     }
// }
// class Rectangle extends Shape {
//     width: number;
//     height: number;
//     constructor(width: number, height: number) {
//         super();
//         this.width = width;
//         this.height = height;
//     }
//     area(): void {
//         console.log(`Rectangle area: ${this.width * this.height}`);
//     }
// }
// const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)];
// shapes.forEach((shape) => shape.area());
// // 2
// interface Animal {
//     makeSound(): void;
// }
// class Dog implements Animal {
//     makeSound(): void {
//         console.log("Woof woof!");
//     }
// }
// class Cat implements Animal {
//     makeSound(): void {
//         console.log("Meow!");
//     }
// }
// function animalSound(animal: Animal): void {
//     animal.makeSound();
// }
// const dog = new Dog();
// const cat = new Cat();
// animalSound(dog); 
// animalSound(cat); 
// // 3
// class Calculator {
//     calculate(a: number, b: number): number;
//     calculate(a: string, b: string): string;
//     calculate(a: number | string, b: number | string): number | string {
//         if (typeof a === "number" && typeof b === "number") {
//             return a + b; 
//         } else if (typeof a === "string" && typeof b === "string") {
//             return a.concat(b); 
//         }
//         throw new Error("Invalid arguments");
//     }
// }
// const calc = new Calculator();
// console.log(calc.calculate(5, 10));
// console.log(calc.calculate("Hello, ", "World!")); 
