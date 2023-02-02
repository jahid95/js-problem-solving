function getFibonacci(number){
    const fibo = [0,1];
    for(let i=2; i<= number; i++){
        fibo[i] = fibo[i-1]+fibo[i-2];
    }
    return fibo;
}
const inputNumber = 20;
const output = getFibonacci(inputNumber);
console.log(output)