
//array using array literal
var emp=["Meenu","Kamali","Ramya"];  
for (i=0;i<emp.length;i++){  
console.log(emp[i] + " ");  
}  

// array constructor using new keyword

 function empName() {
var emp = new Array("Meena","Kamali","Ramya");  
for (i=0;i<emp.length;i++){  
console.log(" "+emp[i] + " ");  
}  
}

empName();

//Access elements of an array
   
   //array using indices
   const myArray =[ 'k','a','m','a','l','i'];

   console.log(myArray[2]);   // prints m

   //using push()
  let myArr = ['laptop','mobile'];

  myArr.push('hp');
  console.log(myArr);        // prints [ 'laptop', 'mobile', 'hp' ]
  
  myArr.unshift('work');    //unshift() method adds an element at the beginning of the array
  console.log(myArr);       //prints [ 'work', 'laptop', 'mobile', 'hp' ]

  myArr.pop();             //pop() method to remove the last element from an array.
  console.log(myArr);      //prints[ 'work', 'laptop', 'mobile' ]

  // shift() remove the first element
myArr.shift();
console.log(myArr);      // prints [ 'laptop', 'mobile' ]

let arr =["maths","physics","Chemistry"];
let arr1 = ["tamil", "english"];

arr.sort();             // arr elements are sorted like alphabetical order
console.log(arr);       //prints [ 'Chemistry', 'maths', 'physics' ]

const result =arr.concat(arr1);   // using concat method
console.log("Using concat() : "+result);      //prints [ 'Chemistry', 'maths', 'physics', 'tamil', 'english' ]

const a = ['1', '2', '3', '5','2'];
const b =['6','4'];
 //let result1 = a.length;
 let result1 = arr1.sort();
 console.log("Using sort() : "+result1);
 
 const arr3 =["English","Tamil","Maths"]
 arr3.splice(1,0,"Computerscience", "Bio");
 
 console.log("Using Splice() : "+arr3);

 