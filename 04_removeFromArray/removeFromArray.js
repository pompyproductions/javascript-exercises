const removeFromArray = function(array, ...items) {
    let newArray = [];
    for (let element of array) {
        items.includes(element) ? console.log("skipping " + element) : newArray.push(element);
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
