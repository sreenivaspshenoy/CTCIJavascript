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


//Ideal solution if has only ASCII characters.

let uniqueCharsPresent = function(str) {
    let duplicatePresent = 0;

    for(let i = 0; i< str.length; i++) {

        let j = str[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if(duplicatePresent & (1 << j) > 0) {
            return false;
        } else {
            duplicatePresent |= (1<<j);
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

console.log(uniqueCharsPresent(''));
console.log(uniqueCharsPresent('sreenivas'));
console.log(uniqueCharsPresent('sri'));