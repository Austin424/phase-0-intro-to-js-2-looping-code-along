// For Loop (Thank You Cards)
const cards = ["Guadalupe","Ollie", "Aki"];
const event = "birthday"
const messageArray = writeCards(cards, event);

function writeCards(names, eventName) {

    let thankYouMessages = []

    for (let i = 0; i < names.length; i++) {

        let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;

        thankYouMessages.push(message);
    }
    return thankYouMessages;
}

// While Loop (Countdown)

function countDown(startingNumber) {
    let currentNumber = 10;

    while (currentNumber >= 0) {
        console.log(currentNumber);
        currentNumber--;
    }    
}
