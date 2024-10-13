"use strict";
//basic types:
let id = 5;
console.log("id : ", id);
let company = "hello world";
let isPublished = true;
//can be set to any
let address = "bangalore";
address = 123;
let age;
age = 70;
// array type depends on the content type
// if you try to push a string value to the above array, it will throw an error , since its type is defined as number
let ids = [1, 2, 3, 5, 6];
// when you dont know the content of the array,you can declare as array
let arr = [1, "hello", 3, 4, true];
// Tuple
// This will throw an error when you try to change last element to a number, it will say number cant be assigned to type string
//note that the elements should be in same order as declaration in Tuple
let person = [1, false, "shiny"];
// Tuple Array
let employee;
employee = [
    [1, "shiny"],
    [2, "john"],
    [3, "April"],
];
// Union - one variable need to hold more than one type
let pid = 22;
// Enums  allow to define a set of constants - either number or string
//default numbers from 0,1,2,3 but if you change first element as 1 ,rest follows 2,3,4
var Directions;
(function (Directions) {
    Directions[Directions["up"] = 0] = "up";
    Directions[Directions["down"] = 1] = "down";
    Directions[Directions["left"] = 2] = "left";
    Directions["right"] = "right";
})(Directions || (Directions = {}));
console.log("directions", Directions.up); // expected out put is 0
console.log("directions", Directions.left); // if up is 1 then output is 3 else 2
console.log("directions", Directions.right); //output is right if values are given as string 
const user = {
    id: 1,
    name: 'john',
};
//Type Assertion
//cid has type as any but customer id is eId with number as type
//two ways to declare it given below
let eId = 1;
//let customerId = <number>eId;
let customerId = eId;
// Functions
//implicitany - as false wont require x and y type declaration - not recomended
//function return value type is also declared
function addNum(x, y) {
    return x + y;
}
console.log("sum  = ", addNum(5, 7));
// when function doesnt have any return the return type will be void,example below
// Void 
function log(message) {
    console.log(message);
}
log(1);
log("hello shiny");
const user1 = {
    id: 1,
    name: 'john',
};
//both functions below uses same interface but creates two differenct functions to do two different operations
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(pid, name) {
        this.id = pid;
        this.name = name;
        console.log(123);
    }
    //custom method inside class 
    register() {
        return `${this.name} is now registered`;
    }
}
const shiny = new Person(123, 'shiny joseph');
console.log(shiny);
console.log(shiny.register()); //shiny joseph is now registered
//console.log(shiny.id) // throws error if id is set as private and accessed out side the class
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "john", "developer");
console.log(emp.name);
console.log(emp.register()); //register comes from person class which is extended 
//employee class is known as subclasses 
// Generics - used to build reusable components 
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['shiny', 'john', 'hello']);
numArray.push('hello'); //this works
//so tp prevent this from happening
//generic <T> is defined and type is defined in specific numArray1 and stringArray1
function getArray1(items) {
    return new Array().concat(items);
}
let numArray1 = getArray1([1, 2, 3, 4]);
let stringArray1 = getArray1(['shiny', 'john', "hello"]);
//numArray1.push('hello')  will throw type error 
