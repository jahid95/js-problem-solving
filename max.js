function findMaxNumber (numbers){
let lowest = numbers[0];
for(let i =0; i<numbers.length; i++){
    const index =i;
    const number = numbers[index];
    if(number<lowest){
        lowest = number;
    }
}
return lowest;
}

const inputNumbers =[11,30,54,908,4,99];
const output = findMaxNumber(inputNumbers);
console.log(output);