console.log('Hello World');  
//to declare a variable, use the let keyword  
let isTired = false;
const interestRate = 0.3;  //Just like final in java, immutable 
console.log(interestRate); 
console.log(typeof(interestRate)); 
  

//setting object vvv
let person = {
    name: "Justin Li", 
    age: 20,
};  

person.age = 21;

console.log(person.name); //access with dot notation, just like in java  
console.log(person['age']); //access with bracket notation  

//Arrays 
let school = ['Jerry','Kong','Paul'];  //unlike java, length in javascript arrays are dynamic
school[1] = 'Lea';  
school[3] = 4;
school[4] = "Mike";
console.log(school); 

function greet(name, age){
    console.log("Hello I am " + name + " and I am " + age + " years old!");
}

greet("Justin", 20);