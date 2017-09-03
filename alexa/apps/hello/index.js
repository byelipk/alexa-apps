var alexa = require("alexa-app");

// Create a skill.
var hello = new alexa.app("hello");

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
  }
);

module.exports = hello;
