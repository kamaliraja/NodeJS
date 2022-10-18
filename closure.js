function fun()  
{  
var a = 5; // 'a' is the local variable, created by the fun()  
function innerfun() // the innerfun() is the inner function, or a closure  
{  
return a;  
}  
return innerfun;  
}  
var output = fun(); 
console.log(output());  
console.log(" ");  
console.log(output());  