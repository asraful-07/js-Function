function evenNumberOnly(numbers){
    let evens = [];
    for(const number of numbers){
       if(number % 2 === 0){
        console.log(number)
        evens.push(number)
       }
    }
    return evens
}

const num = [4, 8, 11, 2, 5, 1];
const total = evenNumberOnly(num);
console.log(total)




