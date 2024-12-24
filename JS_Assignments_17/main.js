// Spread Operator Task 1
const array1 = [10, 20, 30];
const array2 = [40, 50, 60];
let combinedArray = [...array1, ...array2];
console.log(combinedArray);
document.getElementById("para-1").innerHTML = combinedArray.join(", ");

// Spread Operator Task 2
const student = { name: 'Aliyan', age: 25, course: 'JavaScript' };
const studentCopy = {...student};
studentCopy.course = "Node.js"
console.log(student);
console.log(studentCopy);
document.getElementById("para-2").innerHTML = JSON.stringify(student);
document.getElementById("para-3").innerHTML = JSON.stringify(studentCopy);

// Arrow Function Task 1
let double = (num) => {
    return num * 2
};
console.log(double(7));
document.getElementById("para-4").innerHTML = double(7);

// Arrow Function Task 2
let multiply = (a, b) => {
    return a * b
};
console.log(multiply(4, 5));
document.getElementById("para-5").innerHTML = multiply(4, 5);

// Arrow Function Task 3
let greet = () => {
    return "Hello, World!"
};
console.log(greet());
document.getElementById("para-6").innerHTML = greet();

// Rest Parameters Task 1
let sumAll = (...numbers) => {
    return numbers.reduce((prevalue, currentvalue) => prevalue * currentvalue)
}
console.log(sumAll(1, 2, 3, 4));
document.getElementById("para-7").innerHTML = sumAll(1, 2, 3, 4);

// Rest Parameters Task 2
let concatStrings = (...strings) => {
    return strings.join(" ")
}
console.log(concatStrings("I", "am", "learning", "JavaScript"));
document.getElementById("para-8").innerHTML = concatStrings("I", "am", "learning", "JavaScript");
