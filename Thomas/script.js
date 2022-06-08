"use strict";
let text = "Hello world! 42";
console.log(text);
//ex 1
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var value = 0;
var box = document.getElementById("b1");
var product = 0;
function create() {
    for (let i = 0; i < array.length; i++) {
        for (let x = 0; x < array.length; x++) {
            product = array[i] * array[x];
            box.innerHTML += `<p>${array[x]} X ${array[i]} = ${product}</p>`;
        }
        box.innerHTML += `<hr>`;
    }
}
create();
//ex 2
var Name = {
    fName: "Thomas",
    lName: "Schiefer"
};
var box2 = document.getElementById("b2");
box2.innerHTML = `<hr><hr><p>${Name.fName} ${Name.lName}</p><hr>`;
function innerRepeat() {
    array.forEach(element => {
        box2.innerHTML += `<p>${Name.fName}<p>`;
    });
}
;
innerRepeat();
function consoleRepeat() {
    array.forEach(element => {
        console.log(Name.lName);
    });
}
;
window.onload = function () {
    setTimeout(consoleRepeat, 5000);
};
//or
window.addEventListener("load", function () {
    setTimeout(consoleRepeat, 5000);
}, false);
//ex 3
var arrayNames = ["Tom", "Max", "Carl", "Claus", "Clementine"];
var box3 = document.getElementsByClassName("values");
function NamePrinter9000() {
    box3[0].innerHTML += `<hr><hr>`;
    arrayNames.forEach((val, Ind) => {
        box3[0].innerHTML += `<p>${val}</p>`;
        box3[1].innerHTML += `<p>${val} : ${Ind}</p>`;
    });
    box3[0].innerHTML += `<hr>`;
    box3[1].innerHTML += `<hr>`;
}
NamePrinter9000();
