function add(a = 50, b = 20) {
    // addition
    return a + b;
  }
  
  // using greater 
  function greaterValue(x=50, y=20) {
    // if condition
    if (x > y) {
      return x;
    } else {
      return y;
    }
  }

  const greater1 = add();
  const greater2= add(20, 10);
  const greater3 = greaterValue(245, 456);
  const defaultvalue = greaterValue();
  
  console.log('Greater value1 : ', greater1, greater2);
  console.log('Greater value2 : ', greater2);
  
  console.log('Greater Value 3 : ', greater3);
  console.log('Default Greater value: ', defaultvalue);


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
  