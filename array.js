function sumOfNumber(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
  return sum;
}

const numbs = [12, 32, 54, 65,];
const total = sumOfNumber(numbs);
console.log('total sum:', total)
