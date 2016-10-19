"use strict";
exports.nominate = function (name, fn) {
    return new Function('fn', "return function " + name + "() {return fn.apply(this, arguments)}")(fn);
};
//# sourceMappingURL=nominate.js.map