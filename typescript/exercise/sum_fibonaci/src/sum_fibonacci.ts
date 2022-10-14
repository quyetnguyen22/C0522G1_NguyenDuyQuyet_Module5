function fibonacci(inputNum: number): number {
    if (inputNum == 1 || inputNum == 0) {
        return inputNum;
    } else if (inputNum > 1) {
        return fibonacci(inputNum - 1) + fibonacci(inputNum - 2)
    }
}

let sum: number = 0;
for (let i = 1; i < 6; i++) {
    sum += fibonacci(i);
    console.log(fibonacci(i));
}
console.log('Sum:' + sum);

