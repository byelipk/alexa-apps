const readline = require("readline");
const alexa = require("alexa-app");
const chatskills = require("chatskills");

// Create a skill.
const hello = chatskills.app("hello");

// Create a launch
hello.launch((req, res) => {
  res.say("Ask me to say hi!");

  // Keep session open
  res.shouldEndSession(false);
});

// Create an intent.
hello.intent(
  "hello",
  {
    slots: {},
    utterances: [
      "{to |}{say|speak|tell me} {hi|hello|howdy|hi there|hiya|hi ya|hey|hay|heya}"
    ]
  },
  function(req, res) {
    res.say("Hello, World!");
    res.shouldEndSession(false);
  }
);

module.exports = hello;

// Console client
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "HELLO-ALEXA> "
});

chatskills.launch(hello);

rl.prompt();

rl
  .on("line", line => {
    chatskills.respond(line, response => {
      if (response) {
        console.log(response);
      } else {
        console.log("Sorry, I don't understand.");
      }
      rl.prompt();
    });
  })
  .on("close", () => {
    console.log("Have a great day!");
    process.exit(0);
  });
