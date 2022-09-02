function add(a = 50, b = 20) {
    // addition
    return a + b;
  }
  
  function greaterValue(x=543, y=203) {
    // if condition
    if (x > y) {
      return x;
    } else {
      return y;
    }
  }
  
  const result = add();
  const result2 = add(20, 10);
  const bigValue = greaterValue(245, 456);
  const bigValue2 = greaterValue();
  
  console.log('result : ', result, result2);
  console.log('result2 : ', result2);
  
  console.log('bigValue : ', bigValue);
  console.log('bigValue2 : ', bigValue2);

  var age=25;
  function ifsamples(){
   
    if(age>=18){
      return("Eligible to drive");
    }
    else {
      return("Below age 18 is not eligible to drive");
    }

  }
  const ifsample =ifsamples();
  console.log('If satement example: ', ifsample);
  