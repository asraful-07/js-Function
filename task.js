/**
 * Task-1
Take four parameters. Multiply the four numbers
 and then return the result
 * 
 */
// Ans 
function numbers(num1,num2, num3, num4){
    const multiply = num1 * num2 * num3 * num4;
    console.log('total:' ,multiply);
}

// numbers(4, 4, 4, 4);

/**
 * Task-2
Take a number if the number is odd multiply it 
by 2 and return the result. If the number is even 
divide it by two and return the result.
*
*/

// Ans 
function oddOfEven(text1){
    if(text1 % 2 === 1){
        const result = text1 * 2;
        return result;
    }
    else{
        const result = text1 / 2;
        return result;
    }
}

// console.log(oddOfEven('result:',10));

/**
 * Task-5
Write a function called odd_even() which takes an 
integer value and tells whether this value is even 
or odd. If even return Even. If odd return Odd
 * 
 */
// ans
function even_or_odd(number){
    if(number % 2 === 0){
        console.log('number is even');
        return number;
    }
    else{
       console.log('number is odd');
       return number;
    }
}

const num = (7);
const number = even_or_odd(num);
// console.log(number)