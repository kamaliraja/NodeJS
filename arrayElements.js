 let colors =["blue","green","yellow"];
let color = "orange";
const addElement = (...args)=>{
    let result = [];
    for (const iterator of args) {
    
        result.push(iterator);
    }
    return result;
}
console.log(addElement(...colors,color));  

//using a push method 
/* let colors =["blue","green","yellow"];
colors.push("orange");
console.log(colors);  */