var brain = [
  { key: "hello", value: "Hi, nice to meet you!" },
  { key: "bye", value: "See ya later."},
  { key: "name", value: "My name is simple bot. How old are you?" },
  { key: "old", value: "Oh, that's not very old at all." },
  { key: "years", value: "I'm only 1 year old." },
  { key: "joke", value: "What did the spider do on the computer?" },
  { key: "what", value: "Made a website!" },
  { key: "weather", value: "Today will be -60C, windy, and hazy on Mars."}
];

function respond(input) {
  var result = "Sorry, I don't understand.";

  input = input.toLowerCase();

  for (var i in brain) {
    var response = brain[i];
    if (input.indexOf(response.key.toLowerCase()) != -1) {
      // Found a match!
      result = response.value;
      break;
    }
  }

  return result;
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'CHAT-IN-THE-BOT> '
});

rl.prompt();

rl.on('line', (line) => {
  console.log(respond(line));
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
