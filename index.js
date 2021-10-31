// Greetings and their language
let greetings = [['Hello', 'english'], ['Dzień dobry', 'polish'], ['Hallo', 'german'], ['Привет', 'russian']];

// Declare function
let exportFunction = (name) => {
    let index = Math.floor(Math.random()*greetings.length);
    return `${greetings[index][0]} ${name}! You should study more ${greetings[index][1]} 😊👍`;
}

// Export function
module.exports = exportFunction;
