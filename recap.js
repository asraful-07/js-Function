function add(price1, price2){
    const total = price1 + price2;
    return total;
}


const bill = add (80, 20);
console.log('total-bill:', bill);


// 2nd function return shot cut
function add(price1, price2){
    return price1 + price2;
}

const bill2 = add(80, 20);
console.log(bill2);


// 3rd function
function doMath(num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const maltply = sum * diff;
    const result = maltply / 2;
    return result;
}
const mot = doMath(100, 23)
console.log('our ruselt:', mot);