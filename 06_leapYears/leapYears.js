const leapYears = function(year) {
    if (!(year % 100)) {
        return !(year % 400);
    } else {
        return !(year % 4);
    }

};

// Do not edit below this line
module.exports = leapYears;
