//USING STRING AND STRING FUNCTIONS

var x = " Welcome to Indium Software ";
var y = 'Learn New Technologies';       
var z = ['Node', 'JS', 'Tutorial'];  

/* In NodeJS , a variable as string by assigning a value either by 
using single (”) or double (“”) quotes  */
   
console.log(x)
console.log(y);
console.log("Concat Using (+) :", (x + y));
console.log("Concat Using Function :", (x.concat(y)));
   
console.log("Split string: ", x.split(' '));
   
console.log("Join string: ", z.join('_ '));
   
console.log("Char At Index 5: ", x.charAt(7) );