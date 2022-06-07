const findTheOldest = function(array) {
    let oldest = array.pop();
    array.forEach(element => {
        if (getAge(element) > getAge(oldest)) oldest = element;
    });
    return oldest;    
};

// returns NEGATIVE BIRTH DATE
const getAge = function(item) {
    let today = new Date()
    today = today.getFullYear();
    return (item.hasOwnProperty("yearOfDeath")) 
        ? item.yearOfDeath - item.yearOfBirth 
        : today - item.yearOfBirth;
};

// Do not edit below this line
module.exports = findTheOldest;
