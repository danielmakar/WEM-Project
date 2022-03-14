//a1.1
function identity_function(arg) {
    return function() {
        return arg;
    }
}

//a1.2
function addf(x) {
    return function(y) {
        return x + y;
    }
}

//a1.3
function applyf(func) {
    return function(arg1) {
        return function(arg2) {
            return func(arg1,arg2);
        }
    }
}

//a1.4
function curry(func, arg1) {
    return function(arg2) {
        return func(arg1, arg2);
    }
}

//a1.5
function inc(arg) {
    return addf(arg)(1);
}

//a1.6
function methodize(func) {
    return function(y) {
        return func(this,y);
    }
}

//a1.7
function demethodize(func) {
    return function(arg1, arg2) {
        return func.call(arg1, arg2);
    }
}

//a1.8
function twice(func) {
    return function(arg) {
        return func(arg,arg);
    }
}

//a1.9
function composeu(func1, func2) {
    return function(arg) {
        return func2(func1(arg));
    }
}

//a1.10
function composeb(func1, func2) {
    return function(x, y, z) {
        return func2(func1(x, y), z);
    }
}

//a1.11
function once(func) {
    return function(arg1, arg2) {
        let result = func(arg1, arg2);
        func = null;
        return result;
    }
}

//a1.12
function counterf(arg) {
    let counter = {value: arg};
    counter.inc = function() {
        this.value++;
        console.log(this.value);
    }
    counter.dec = function() {
        this.value--;
        console.log(this.value);
    }
    return counter;
}

//a1.13
function revocable(func) {
    let method = {func: func}
    method.invoke = function(arg) {
        this.func(arg);
    }
    method.revoke = function() {
        this.func = null;
    }
    return method;
}

//a1.14
function vector() {
    let array = new Array();
    array.append = function(arg) {
        this.push(arg);
    }
    array.store = function(arg1, arg2) {
        this[arg1] = arg2;
    }
    array.get = function(arg) {
        return this[arg];
    }
    return array;
}

//a2.1 
function pubsub() {
    let method;
    method.subscribe = function(func) {
        this.method = func;
    }
    method.publish = function(arg) {
        this.method(arg);
    }
    return method;
}

//a2.2
function gensymf(arg) {
    let x = arg;
    let y = 0;
    let symbol = function() {
        let res = x+''+y;
        y++;
        return res;
    }
    return symbol;
}

//a2.3
function fibonaccif(arg1, arg2) {
    let x = arg1;
    let y = arg2;
    let fib = function() {
        let tmp1 = x;
        x = y;
        y = tmp1+y;
        return tmp1;
    }
    return fib;
}

//a2.4
function addg(arg1) {
    function next(arg2) {
        if(!arg2) {
            return arg1;
        } else {
            arg1 += arg2;
            return next;
        }
    }
    if(arg1) {
        return next;
    }
}

//a2.5
function applyg(func) {
    return function(arg1) {
        if(!arg1) {
            return arg1;
        } else {
            return function next(arg2) {
                if(!arg2) {
                    return arg1;
                } else {
                    arg1 = func(arg1,arg2)
                    return next;
                }
            }
        }
    }
}

//a2.6
function m(arg1, arg2) {
    if(!arg2) {
        return {"value": arg1};
    } else {
        return {"value": arg1, "source": arg2};
    }
}

//a2.7
function addm(m1, m2) {
    return m(m1.value+m2.value, `(${m1.value}+${m2.value})`);
}

//a2.8
function binarymf(func, str) {
    return function(m1, m2) {
        return m(func(m1.value, m2.value), `(${m1.value}${str}${m2.value})`);
    }
}

//a2.9
function binarymf(func, str) {
    return function(m1, m2) {
        if(m1.value) {
            return m(func(m1.value, m2.value), `(${m1.value}${str}${m2.value})`);
        }
        else {
            return m(func(m1, m2), `(${m1}${str}${m2})`);
        }
    }
}

//a2.10
function unarymf(func, str) {
    return function(arg1) {
        return m(func(arg1), `(${str} ${arg1})`);
    }
}

//a2.11
function hyp(arg1, arg2) {
    return Math.sqrt(arg1*arg1+arg2*arg2);
}

//a2.12
function exp(arr) {
    if (Array.isArray(arr)) {
        return arr[0](exp(arr[1]),exp(arr[2]));
    } else {
        return arr;
    }
}

//a2.13
let variable;
function store(arg) {
    variable = eval(arg);
}

//a2.14
function quatre(binary, arg1, arg2, res) {
    let tmp = binary(arg1, arg2);
    res(tmp);
}

//a2.15
function unaryc(func) {
    return function(arg, callback) {
        return callback(func(arg));
    }
}

//a2.16
function binaryc(func) {
    return function(arg1, arg2, callback) {
        return callback(func(arg1,arg2));
    }
}