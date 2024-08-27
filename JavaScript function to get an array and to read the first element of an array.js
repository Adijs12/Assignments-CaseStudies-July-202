function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= (num/2); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function checkFirst(a) {
    if (a.length === 0) {
        return "Array is empty";
    }
    const first = a[0];
    if (typeof first !== 'number' || !Number.isInteger(first)) {
        return "First element is not an integer";
    }
    if (isPrime(first)) {
        return `${first} is prime`;
    } else {
        return `${first} is not prime`;
    }
}
function Input() {
    const size = parseInt(prompt("Enter the number of elements:"));
    let a = [];
    for (let i = 0; i < size; i++) {
        let element = prompt(`Enter element ${i + 1}:`);
        a.push(Number(element));
    }
    return a;
}
const userArray = Input();
console.log("Your array:", userArray);
console.log(checkFirst(userArray));
