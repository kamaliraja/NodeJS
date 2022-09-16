//Spread Operator with Object
const obj = { x :"abc" , Y : "asd" };
const obj1 = {c : "awertsq"};
const obj2 = {...obj, ...obj1};
console.log(obj2);

//use the spread operator with Array Destructuring.
const numbers = [5,10,25,15,"abc",'kamali'];

    // Here we assign a,b and c with 5,10 and 25,
    // the rest of the elements will all go to others

    const [a,b,c,...others] = numbers;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(others);