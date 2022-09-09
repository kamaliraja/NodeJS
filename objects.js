let school = {
    name: 'SVM Higher secondary school',
    location : 'chennai',
    established : '1995',
    displayInfo : function(){
        console.log(`${school.name} was established
              in ${school.established} at ${school.location}`);
    }
}
school.displayInfo();  