const users = ["David Jonhnson", "Tim Lindholm", "David Beckham", "Johnny Depp" ];
const sorted = users.slice().sort(function(firstUser, secondUser) { 
 const firstLastName = firstUser.split(" ")[1];
 const secondLastName = secondUser.split(" ")[1];
 if(firstLastName < secondLastName) return -1;
 if(firstLastName > secondLastName) return 1;
 return 0;
});

console.log(users); // ["David Jonhnson", "Tim Lindholm", "David Beckham", "Johnny Depp"]
console.log(sorted); // ["David Beckham", "Johnny Depp", "David Jonhnson", "Tim Lindholm"]