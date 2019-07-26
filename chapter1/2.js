let reverse = function(str) {
    let charArray = str.split('');
    let j = str.length - 1;
    let i = 0;
    let temp;
    while(i < j) {
        temp = charArray[i];
        charArray[i] = charArray[j];
        charArray[j] = temp;
        i++;
        j--;
    }
    return charArray.join('');
}


//Test cases

let str= "abc";
let reversed = reverse(str);
console.log(reversed);