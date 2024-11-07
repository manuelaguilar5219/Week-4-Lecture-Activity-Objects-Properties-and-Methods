// 1.
let myArray = [25, 30, 35, 40, 45]
console.log(myArray[0]); // Output: 25
console.log(myArray[4]); // Output: 45
// 2.
// Using a for loop to output each of the values in the Array
for (let i= 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
// 3.
myArray.push(50, 55, 60, 65, 70);
console.log(myArray);
// Output: (10) [25, 30, 35, 40, 45, 50, 55, 60, 65, 70]
myArray.pop();
myArray.pop();
myArray.pop();
console.log(myArray)
// Output: (7) [25, 30, 35, 40, 45, 50, 55]
// 4. 
let myString = "Hello World!";
console.log(myString.length) 
// Output: 12