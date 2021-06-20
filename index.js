// Code your solutions in this file
//const name = []
//const event = 'surprise'

function writeCards(names, event) {
    let newArray = []
    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return newArray;
}

function countDown() {
    let i = 10;
    while (i >= 0) {
        console.log(i--)
    }
}