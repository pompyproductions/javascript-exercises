const reverseString = function(str) {
    let revStr = "";
    for (let i = 1; i <= str.length; i++) {
        revStr = revStr.concat(str.substr(-i).charAt(0));
    }
    return revStr

};

// Do not edit below this line
module.exports = reverseString;
