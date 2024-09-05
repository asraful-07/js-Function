/**
 * 
 * for a given string tell me whether it has even number of character or not
 * 
 */

function evenSizedString(str){
    const size = str.length;
    console.log(str, size);
    if(size % 2 === 0){
        console.log('even size');
        return true;
    }
    else{
        console.log('odd size');
        return false;
    }
}

evenSizedString('Rajshahi');
evenSizedString('dhaka');



// 2nd true false function
function doubleOrTriple(num1, num2){
    if(num2 === true){
        const result = num1 * 2;
        return result;
    }
    else{
        const result = num1 * 3;
        return result;
    }
}
console.log(doubleOrTriple(5, true));
console.log(doubleOrTriple(9, false));