//Closure
function fun()  
{  
var a = 5;               // 'a' is the local variable, created by the fun()  
function innerfun()     // the innerfun() is the inner function, or a closure  
{  
return a;  
}  
return innerfun;  
}  
var output = fun(); 
console.log(output());  
console.log(" ");  
console.log(output());  

//another example of closure
function demo() {
    var value = 'Nodejsera'; 		//It is a Local Variable
    function demoInner() { 	       // inner function or Closure
      console.log(value); 		   // use variable declared in the parent function    
    }
    demoInner();    
  }
  demo();

  //Basic example of closure
  function add(x, y) {
    //var x=10, y=5;
        var data ="The Sum is ";
        //This inner function has access to the outer function's variables, including parameters.
        function sum() {
            console.log(data + (x + y));
        }
     sum();

  }
  add(10, 6);  // Prints: the sum is 16