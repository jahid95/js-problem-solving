function getReverse(text){

    for(var i =text.length-1; i>=0; i-- ){
        const element = text[i];
        const sentense = element.join(' ');
    }
    return sentense;
}
const myText ='My name is anwar Jahid';
const output = getReverse(myText);
console.log(output);