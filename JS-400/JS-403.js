const zagrade = function(s) {
    let stog = [];
    let rjecnik = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    for (let i=0; i<s.length; i++){
        if(rjecnik.hasOwnProperty(s[i]))
            stog.unshift(s[i]); 
        else if(s[i] == rjecnik[stog[0]])
            stog.shift(); 
        else return false;
    }
    if (!stog.length)
        return true;
    return false;
};

console.log(zagrade("[()]()()"));
console.log(zagrade("{[((()))]}"));
console.log(zagrade("({)}"));
console.log(zagrade("([{{}}]())"));
console.log(zagrade("}()()()()"))

