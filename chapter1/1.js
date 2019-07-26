//Using additional data structure
let hasUniqueChars = function(str) {
    let mySet = new Set();

    for(let i = 0; i< str.length; i++) {
        if(mySet.has(str[i])) {
            return false;
        }
        mySet.add(str[i]);
    }

    return true;
}

//Not using additional data structure

let hasUniqueChars2 = function(str) {
    for(let i = 0; i< str.length; i++) {
        for(let j = i+1; j< str.length; j++) {
            if(str[i] === str[j]) {
                return false;
            }
        }
    }

    return true;
}



//Test cases

console.log(hasUniqueChars(''));
console.log(hasUniqueChars('sreenivas'));
console.log(hasUniqueChars('sri'));

console.log(hasUniqueChars2(''));
console.log(hasUniqueChars2('sreenivas'));
console.log(hasUniqueChars2('sri'));