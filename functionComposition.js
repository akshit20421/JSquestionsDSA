var compose = function(functions) {
    return function(x) {
        // Apply functions from right to left
        return functions.reduceRight((result, fn) => fn(result), x);
    };
};
