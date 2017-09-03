const readline = require("readline");
const alexa = require("alexa-app");
const chatskills = require("chatskills");

// Create a skill.
const hello = chatskills.app("hello");

// Create a launch
hello.launch((req, res) => {
  res.session('trips-remaining', 5);

  res.say("Ask me to say hi!");

  // Keep session open
  res.shouldEndSession(false);
});

// Create a dictionary
hello.dictionary = { locations: [ "beach", "mountain", "train", "plane", "couch" ] };

// Create an intent.
hello.intent(
  "hello",
  {
    slots: {
      Location: 'LOCATION'
    },
    utterances: [
      "{to |}{say|speak|tell me} {hi|hello|howdy|hi there|hiya|hi ya|hey|hay|heya}",
      "{please |}{say aloha}",
      "{sex |}{on the }{-|Location}"
    ]
  },
  function(req, res) {
    const location = req.slot('Location');
    let num = req.session('trips-remaining');

    num--;

    res.session('trips-remaining', num);

    res.say(`Hello, World (from the ${location})!`);
    res.say(`${num} trips remaining...`);

    if (num === 0) {
      res.shouldEndSession(true);
    }
    else {
      res.shouldEndSession(false);
    }
  }
);

module.exports = hello;

// Console client
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   prompt: "HELLO-ALEXA> "
// });

// chatskills.launch(hello);
//
// console.log(hello.utterances());
//
// rl.prompt();
//
// rl
//   .on("line", line => {
//     chatskills.respond(line, response => {
//       if (response) {
//         console.log(response);
//       } else {
//         console.log("Sorry, I don't understand.");
//       }
//       rl.prompt();
//     });
//   })
//   .on("close", () => {
//     console.log("Have a great day!");
//     process.exit(0);
//   });
