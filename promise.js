//using promise
const myPromise = new Promise((resolve, reject) => {    
    let condition=24;    
      
    if(condition>=18) {      
        resolve('Promise: Eligible to drive ...');    
    } else {      
        reject('Promise: Not Eligible to drive');    
    }  
});  
    
  myPromise.then((message) => {   
    console.log(message);  
}).catch((message) => {   
    console.log(message);  
});  

