function mostf(arr) {
    if (arr.length === 0) 
    return null;
    let frequency = {};
    let max = 0;
    let most;

    for (let item of arr) {
        frequency[item] = (frequency[item] || 0) + 1;
        if (frequency[item] > max) {
            max = frequency[item];
            most = item;
        }
    }
    return most;
}
function Input() {
    const size = parseInt(prompt("Enter the number of elements: "));
    let arr = [];
    for (let i = 0; i < size; i++) {
        let element = prompt(`Enter element ${i + 1}:`);
        arr.push(isNaN(element) ? element : Number(element));
    }
    return arr;
}
const uArray =Input();
console.log("Most frequent item:", mostf(uArray));
