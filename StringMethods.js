//using string methods

let str = "Hello guys,";
let str2 ="  Learn Javascript ";
let str3 =str2.indexOf("ar");
let string = "welcome to Indium software...";
console.log("USing charAt() :" +str.charAt(1));
console.log("Using concat() : "+str.concat(str2));
console.log("Using indexof() :" +str3);

let str4 = str.lastIndexOf("s");
console.log("Using LastIndexof() : "+str4);

let str5 =str.toLowerCase();
console.log("Using tolowercase() : "+str5);

let str6 = str.toUpperCase();
console.log("Using toUpperCase() : "+str6);

let str7 = str2.slice(3,9);
console.log("Using slice() : " +str7);

let str8 = str2.trimStart();
console.log("Using trim() : " + str8);

let str9 = string.slice(-12);
console.log("Using slice() negative count : " + str9);

let str10 = string.replace("Indium","indium");

console.log("Using replace() : " + str10);

let num ="6";
let str11  = num.padStart(4,"a");
console.log("Using padStrart() : " + str11);

let str12 = num.padEnd(5,"1");
console.log("USing padEnd() : " + str12);

let str13 = str.charCodeAt(0);
console.log("Using charCodeAt() : " + str13);
