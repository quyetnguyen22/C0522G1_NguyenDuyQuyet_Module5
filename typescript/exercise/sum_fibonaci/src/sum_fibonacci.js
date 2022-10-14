function fibonacci(inputNum) {
    if (inputNum == 1 || inputNum == 0) {
        return inputNum;
    }
    else if (inputNum > 1) {
        return fibonacci(inputNum - 1) + fibonacci(inputNum - 2);
    }
}
var sum = 0;
for (var i = 1; i < 6; i++) {
    sum += fibonacci(i);
    console.log(fibonacci(i));
}
console.log('Sum:' + sum);
