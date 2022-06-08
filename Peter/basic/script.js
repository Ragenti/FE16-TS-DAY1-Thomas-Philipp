"use strict";
// Basic 1 multiplaction 1to10 * i of array
// let numberArray: Array<number> = [1,2,3,4,5,6,7,8,9,10];
// let multiArray: Array<number> = [1,2,3,4,5,6,7,8,9,10];
//
// for (let i=0; i<numberArray.length;i++){
//     let result = 1 * numberArray[i];
//     console.log(result);
// }
// numberArray.forEach(function(value){ 
//     let result = 2 * value;
//     console.log(result);
// })
// const resultArr: Array<number> =[];
// const partResult: Array<number>=[];
// function multiMulti(i: number,j: number){
//     for (let i=0; i<numberArray.length;i++){
//         let result = 1 * numberArray[i];
//         partResult.push(result);
//         console.log(partResult);
//     }
//     resultArr.push(partResult);
//     console.log(resultArr);
// }
// multiMulti()
// for (let i=0, j=0; i<numberArray.length, j <multiArray.length;i++,j++){
//     let result = multiArray[j] * numberArray[i]
//     console.log(result);
// }
// Basic 2
const nameArray = ["Peter", "Aigner"];
const domElement1 = document.querySelector(".basic-ex2");
// domElement1.innerHTML = nameArray[0] + " " + nameArray[1];
const nameArray2 = [];
const nameArray3 = [];
for (let i = 0; i < 10; i++) {
    nameArray2.push("Peter");
}
for (let i = 0; i < 10; i++) {
    nameArray3.push("Aigner");
}
setTimeout(() => {
    nameArray3.forEach(function (value) {
        domElement1.innerHTML += `${value}<br>`;
    });
}, 2000);
// nameArray2.forEach(function(value){
//     domElement1.innerHTML += `${value}<br>`
// })
