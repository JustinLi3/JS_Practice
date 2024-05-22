//arrow functions are used to write functions, good for only simple functions that you use only once
//ex 1
const hello = () => console.log("Hello"); 
let smart = (name, age) =>  console.log("Hello I am " + name + " and I am " + age + " years old!");

hello(); 

//ex 2
setTimeout(() =>  console.log("Hello, this message will load after " + 3 + " seconds!"), 3000); 

const nums = [1,2,3,4,5]; 
//.map function creates a new array with a function attached to each element
//.reduce reduces arraylist into single value
const squares = nums.map((element)=> Math.pow(element,2)); 
const cubes = nums.map((element)=> Math.pow(element,3));  
const evenNums = nums.filter((element)=> element%2 === 0); 
const oddNums = nums.filter((element)=> element%2 === 1);  
const total = nums.reduce((test, element) => test + element);


console.log(squares);  
console.log(cubes);  
console.log(evenNums);  
console.log(oddNums);  
console.log(total);




