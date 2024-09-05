function doublelt(number) {
    const total = number * 2;
    console.log(number,total)

}
console.log('i will call the function')
doublelt(15);
console.log('---------');
doublelt(88);
console.log('---------');

// 
const num = 55;
doublelt(num);
const money = 110;
doublelt(money);


// 2nd function
function difference(text1, text2){
    const differ = text1 - text2;
    console.log(text1, text2,'age-difer', differ);
}
const fatherAge = 40;
const myAge = 10;
difference(fatherAge, myAge);
difference(90, 50)