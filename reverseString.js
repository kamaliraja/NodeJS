
const str = 'My name is kamali';
const reverseWords = (str = '') => {
   const strArr = str.split(' ');
   for(let i = 0; i < strArr.length; i++){
      let str1 = strArr[i];
      strArr[i] = str1
      .split('')
      
      .reverse()
      
      .join('');
      
   };
   return strArr.join(' ');
};
console.log(reverseWords(str));   


/* let str ="My name is kamali";
let str2 = str.split(' ');
let str3 ="";
for(let i=0 ; i<str2.length;i++){
   str2[i] = str2[i].split('').reverse().join('');
   str3 = str3 +" "+str2[i];

}
console.log(str3);
//console.log(str2);
//console.log(str);  */