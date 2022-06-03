// Code your solutions in this file
function writeCards(names, events){
    const newmessage=[];

    for(let i = 0; i < names.length; i++){
    const thankyoumessage=`Thank you, ${names[i]}, for the wonderful ${events} gift!`;
    newmessage.push(thankyoumessage);
    }

    return newmessage
}
console.log(writeCards([names],events))

const numbers= []

function countDown(numbers){
    let i=10;
    while(i>=0){
    console.log(i--);
    }
    return (numbers);
}
console.log(countDown())