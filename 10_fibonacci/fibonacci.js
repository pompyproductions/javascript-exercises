const fibonacci = function(pos) {
    if (pos < 1) return "OOPS";
    if (pos <= 2) return 1;
    return fibonacci(pos-1) + fibonacci(pos-2);
};

// Do not edit below this line
module.exports = fibonacci;
