module.exports = cipher = (str, shiftNum = 13) => {
    let  shiftStr = '';
    str = str.toUpperCase();
    for(let char of str) {
    
        let charCode = char.charCodeAt();
        let newCode = charCode < 65 || charCode > 90 ? charCode : charCode + shiftNum;

        if(newCode - 1 >= 90) newCode = ((newCode-1) % 90) + 65;
        shiftStr += String.fromCharCode(newCode);
    }

    return shiftStr;
        
};

// console.log(cipher('SERR PBQR PNZC', 2));
