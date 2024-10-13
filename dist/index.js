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
