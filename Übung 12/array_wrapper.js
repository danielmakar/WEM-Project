function arrayWrapper() {
    var array;
    return {
        get: function (pos) {
            return array[pos];
        },
        set: function (pos, value) {
            if (isFunction(pos) || isFunction(value)) {
                console.log('Es wurde ein eventueller Exploit festgestellt');
                return;
            } else {
                array[pos] = value;
            }
        },
        append: function (value) {
            if (isFunction(value)) {
                console.log('Es wurde ein eventueller Exploit festgestellt');
                return;
            } else {
                array.push(value);
            }
        },
    }
    // https://stackoverflow.com/questions/5999998/check-if-a-variable-is-of-function-type
    function isFunction(functionToCheck) {
        return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
    }
}