const sumAll = function(from, to) {
    let start = 0
      , end = 0;
    if (from < 0 || to < 0 || 
        typeof(from) != "number" || typeof(to) != "number") {
    return "ERROR";
    } else if (from < to) {
        start = from;
        end = to;
    } else {
        start = to;
        end = from;
    }
    let total = 0;
    while (start <= end) {
        total += start;
        start += 1;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
