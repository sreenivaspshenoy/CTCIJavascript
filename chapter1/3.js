let arePermutations = function(str1, str2) {
    
    let map = new Map();

    for(let i = 0; i< str1.length; i++) {
        if(map.has(str1[i])){
            map.set(str1[i], map.get(str1[i]) + 1);
        } else {
            map.set(str1[i], 1);
        }
    }

    for(let i = 0; i< str2.length; i++) {
        if(map.has(str2[i])){
            map.set(str2[i], map.get(str1[i]) - 1);
        } else {
            return false;
        }
    }

    let isPermutation = true;
    map.forEach((val, key) => {
        if(val !== 0){
            isPermutation = false;
        }
    });

    return isPermutation;

}

//Test cases
// console.log(arePermutations('sreen','sr'));
// console.log(arePermutations('sreen','sreen'));
console.log(arePermutations('sreen','sreee'));

