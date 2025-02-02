let numbers = [];

for (let i = -10; i <= 10; i++) {
    numbers.push(i);
}
console.log(numbers);

for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] < 0) {
        numbers.splice(i, 1);
    }
}

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] ** 2;
}

numbers.sort((a, b) => b - a);

console.log(numbers);
