// First
let cars = ['audi', 'bmw', 'lexus', 'volkswagen', 'porsche', 'audi'];

for (let i=1; i < cars.length; i++) {
    console.log(cars[i]);
}

// Second
let names = ['Nana', 'Yasu', 'Ren', 'Takumi', 'Reira'];
for (let i=0; i < names.length; i++) {
    if(names[i].length > 3) {
        console.log(names[i]);
    }
}

// Third
let number = [12, 7, 3, 9, 102, 2305, 36777];
for (let i=0; i < number.length; i++) {
    if(number[i] % 2 == 0) {
        console.log('Even number: ' + number[i])
    } else {
        console.log('Odd number: ' + number[i]);
    }
}

// Fourth
let numbers = [15, 67, 100, 5, 7, [80, 500]];
console.log(numbers[5][1]);

// Fifth
var person = {
    firstname: "john",
    lastname: "doe",
    age: 50,
    eyecolor: "blue"
};

console.log(person.eyecolor);

// Sixth
let my_array = [19, 'july', 2021];
for (let i=0; i < my_array.length; i++) {
    console.log(my_array[i]);
}

// Seventh
let name = ['sandro', 'soso', 'salome', 'nene', 'nia', 'nino', 'nika'];
if (name.length == 5 && name[name.length - 1] == 'Nika') {
    console.log("მასივის რაოდენობა: 5 და ბოლო ელემენტია ნიკა");
}

if (name.length == 7 || name[0] == 'sandro') {
    console.log("მასივის რაოდენობა: 7 და პირველი ელემენტია სანდრო");
}

// Eighth 
// 6 === “6”
// false, რადგან არ ხდება ცვლადების ტიპების კონვერტაცია.