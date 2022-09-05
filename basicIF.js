  
  // sample if statements
  var age=15;
  function ifsamples(){
   
    if(age>=18){
      return("Eligible to drive");
    }
    
      return("Below age 18 is not eligible to drive");
  
  }
  const ifsample =ifsamples();
  console.log('If satement example: ', ifsample);
  
  
  // if else statement
var age=25;
  function ifsamples(){
   
    if(age>=18){
      return("Eligible to drive");
    }
    else {
      return("Below age 18 is not eligible to drive");
    }

  }
  const ifsample1 =ifsamples();
  console.log('If else satement example: ', ifsample1);

  // if else if statement

  var book = "Computer Science";
  function ifelseif(){
  if( book == "history" ) {
     return("History Book");
  } else if( book == "Computer Science" ) {
     return("Computer Science Book");
  } else if( book == "economics" ) {
     return("Economics Book");
  } else {
     return("Unknown Book");
  }
}

const book1 = ifelseif();
console.log('Set the variable to different value and then try(IF Else IF Statement) : ', book1);


