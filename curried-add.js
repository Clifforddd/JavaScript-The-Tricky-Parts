function curriedAdd(total) {
    if (total === undefined) return 0;

    return function closure(num) {
        if (num === undefined) return total; 
        total += num;

        return closure;
    };
}

/*
let firstAdder = curriedAdd();
let secondAdder = curriedAdd(1)(2)(); 
let thirdAdder = curriedAdd(2)(8)(5)(1)(); 

firstAdder; // 0
secondAdder; // 3
thirdAdder; // 16
*/

module.exports = { curriedAdd };
