let isSubstring = function(s1, s2) {
    return s2.indexOf(s1) !== -1;
}

let isRotated = function(s1, s2) {

    if(!s1 && s2 || s1 && !s2) {
        return false;
    }

    if(!s1 && !s2) {
        return true;
    }
    return isSubstring(s1, s2+s2);
}

console.log(isRotated('waterbottle', 'terbttlewa'));

console.log(isRotated('waterbottle', 'terbottlewa'));