//console.log("hello world")   //just create hello world using console.log

let num = 300;                // 
//console.log(num + 200)

num=400;                       
//console.log(num -200)

userName = "kamali"
//console.log(userName)

//  1. var keyword(Old version) declared as local and global variable

//global variable
  var num1=10;         
   function add(){
     console.log(num1)
   }
   add()
   console.log( "Global variable : "+num1)    //num1 is GV, it can accessible anywhere in this program
   
// local variable

function f(){

    var num2 = 20;      //num2 is accessible for only within this function
    console.log("Local Variable : " +num2)
}
f();
//console.log(num2)   // it can't accessible for outside the function

// 2. Let keyword (Improved version of var)

let a = 15;    // let a access anywhere in this code
function f1() {
    let b = 9
    console.log("let access with in the block : "+b);   
}
f1();
//console.log(b)  // let b variable access with block , cant access out this function

// using let same name but different blocks and its updates the value

let num3 = 20;

if(true){
    let num3 = 5;
    console.log("let variable : " + num3)
}
console.log("let same varible : "+num3)

// using const keyword
//The user cannot update the const variable once it is declared. 
const name = "kamali";        //We are changing the value of the const variable so that it returns an error
function names() {
    name1 = "kamalisk";        // user cannot  update the value once it declared.
    console.log("Constant keyword : "+name1)  
}                       
names();