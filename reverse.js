function getReverse(text){

    for(var i =text.length-1; i>=0; i-- ){
        const element = text[i];
        console.log(element);
    }
}
const myText ='My name is anwar Jahid';
const output = getReverse(myText);
// console.log(output);