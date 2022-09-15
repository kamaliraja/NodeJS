//usng let keyword
  //variable declared as main or outside function, it access anywhere in this program, 
let x =20;     
console.log("Outside the function x = " + x); 

function show(){ 
       //y access within function , so its function scope
    let y = 10;     
       // x is global variable
    console.log(" Inside the function x = " + x);  
} 
show(); 
function show1(){
  // console.log("Outside function of y : "+y);   
  //y variable cannot access outside function or method.
}
show1();

//using const keyword

    //const variable cannot be hoisted.
    z = 16;  
    console.log(z);  
    //const z;     //Syntax Error because redeclaration of a variable is not allowed.

//using arrow function

 let sum = (a, b) => {
    let result = a + b;
    return result;
}

let result1 = sum(16,4);
console.log(result1);    // prints 20

//using for in statements used in properties of array

const person = {firstName:"kamali", lastName:"raja", msg: "welcome to Indium Software"}; 

let txt = " Hello, ";
for (let msg in person) {
  txt += person[msg] + " ";
}
console.log(txt);

//create map and using methods

const emp = new Map();
emp.set("kamali", 427);
emp.set("Sk", 422);              //using set()
emp.set("raja", 451);
emp.set("meenu", 433);

console.log("Using Map methods..");
console.log(emp.get("Sk"));            //using get()
console.log(emp.size);                 //using size()
console.log(emp.delete("meenu"));      //using delete()
console.log(emp);
console.log(emp.has("kamaliraja"));    //using has() it returns true if exists in map

//The forEach() method invokes a callback for each key/value pair in a Map:
let text = "";
emp.forEach (function(value, key) {
  text += key + ' = ' + value + "  "
})
console.log(text);

//using key and value
let text1 = "";
for (const x of emp.keys()) {
  text1 += x + "  ";
}
console.log("Map using key  : "+ text1);

let text2 = "";
for (const x of emp.values()) {
  text2 += x + "  ";
}
console.log("Map using Values : "+text2);