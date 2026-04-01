// var a = 10 ;
// console.log(`First a = ${a}`) ;
// var a = 20 ;
// console.log(`Redeclared a = ${a}`) ;

// let b = 50 ;
// console.log(`b = ${b}`) ;
// b = 40 ;
// console.log(`b = ${b}`) ;

// const num = 500 ;
// console.log(`Num = ${num}`) ;
// num = 600 ;

// console.log(x) ;
// var x = 100 ;
// function text(){
//     console.log(x) ;
//     var x = 20 ;
// }
// text() ;

// console.log("100" == 100) ;
// console.log("100" === 100) ;


const getEvens = (arr) =>  arr.filter(n => n % 2 === 0) ;
const nums = [1,2,3,4,5,6];
const result = getEvens(nums) ;
console.log(`Even Numbers : ${result}`) ;

const getOdds = (arr) => arr.filter(n => n % 2 !== 0) ;
const resultOdd = getOdds(nums) ;
console.log(`Odd Numbers : ${resultOdd}`) ;