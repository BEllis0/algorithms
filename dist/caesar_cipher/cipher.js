"use strict";
module.exports = cipher = function (str, shiftNum) {
    if (shiftNum === void 0) { shiftNum = 13; }
    var shiftStr = '';
    str = str.toUpperCase();
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        var charCode = char.charCodeAt();
        var newCode = charCode < 65 || charCode > 90 ? charCode : charCode + shiftNum;
        if (newCode - 1 >= 90)
            newCode = ((newCode - 1) % 90) + 65;
        shiftStr += String.fromCharCode(newCode);
    }
    return shiftStr;
};
// console.log(cipher('SERR PBQR PNZC', 2));
