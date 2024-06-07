function transformString(input) {
    const length = input.length;
    
    if (length % 15 === 0) {
       
        return input.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
       
        return input.split('').reverse().join('');
    } else if (length % 5 === 0) {

        return input.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
     
        return input;
    }
}

console.log(transformString("Hamburger")); 
console.log(transformString("Pizza")); 
console.log(transformString("Chocolate Chip Cookie")); //Output: regrubmaH
                                                       //Output: 80 105 122 122 97
                                                       //Output: eikooC pihC etalocohC


