function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] ** 2;
  }
  return sum;
}
function uInput() {
  const size = parseInt(prompt("Enter the number of elements:"));
  let arr = [];
  for (let i = 0; i < size; i++) {
    let element = parseFloat(prompt(`Enter element ${i + 1}:`));
    arr.push(element);
  }
  return arr;
}
const numbers = uInput();
const result = sum(numbers);
console.log(`Sum of squares is: ${result}`);
