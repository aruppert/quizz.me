# quizz.Me

Your personalized trivia game for every occasion. Try here: https://quizzMe.alexanderruppert.com

## Description

With quizz.Me you can test your trivia knowledge with multiple choice questions.
You can add questions for all users or create a totally unique and private set with a passcode, e.g. with funny details about the bride and groom.
Your creativity and quizz.Me's multiplayer mode will be the highlight at any party!

## Motivation

This project is my final work for the intensive Web Development Course [@neuefische GmbH](http://neuefische.de/) in Cologne. We had one month time to complete it.

## Tech/framework highlights

<b>Built mainly with </b>

- React
- React-Router
- Emotion
- PropTypes
- Storybook
- Node.js
- Express
- MongoDB (Atlas)
- npm
- Git Workflow
- JSON
- Adobe XD

## Features

General:
- Play in single player or in multi player mode (2-4 players) on one device
- Answer questions from the public domain or
- Play a private set of questions with a passcode
- Make it into the all-time high score list or just check it out

Settings:
- Decide the length of the game (3, 5, 7, 9 or 11 questions)
- Enter player’s names before starting the game
- Change the color scheme with one click (on the paint palette)

Gameplay:
- Answer questions by tapping on one of the four choices
- Get instant feedback about your answer
- See the correct answer
- Earn a point for every correct answer and lose one for an incorrect one
- No Idea? Pass a question and lose only 0.25 points
- End the game at any time
- See the result of your game at the end

Creation:
- Add questions to the public domain or
- Create a private set of questions & answers with a unique passcode

## Code Example

```
async function verifyAnswer(value) {
    setShowResult(true);
    const newAnswerIsCorrect = value === correctAnswer;
    setAnswerGivenIsCorrect(newAnswerIsCorrect);
    const isNotLastPlayer = nowPlaying < numberOfPlayers;

    if (newAnswerIsCorrect) {
      increasePointsOfCurrentPlayerByOne(nowPlaying);
      navigator.vibrate([100, 100, 100]);
    } else {
      decreasePointsOfCurrentPlayerByAmount(nowPlaying, 1);
      navigator.vibrate([500]);
    }

    if (isNotLastPlayer) {
      setTimeout(() => {
        setNowPlaying(nowPlaying + 1);
        setShowResult(false);
      }, 2400);
    } else {
      loadNextQuestionOrEndGame();
    }
}
```

## Installation

Clone the repo and just run:

```
 npm install
```

The script should automatically install the client side, too. If something goes wrong try:

```
cd client
npm install
```

## How to start

Open two terminals.
In one run:

```
npm run server
```

And in the other:

```
npm run client
```

The app should start in your browser (usually on http://localhost:3000)

## How to use?

To try out the full functionality of the game please check it out on domain:

https://quizzMe.alexanderruppert.com


Otherwise you need to deploy your own server (e.g. a JSON Server.) and create a database...

The data structure of the two collections should look like this:

Questions & Answers database:
```
{
"\_id" : ObjectId("5e206675e63bec3db479c2cb"),
"question" : "What is considered the rarest form of color blindness?",
"correctAnswer" : "Blue",
"incorrectAnswer1" : "Red",
"incorrectAnswer2" : "Green",
"incorrectAnswer3" : "Purple",
"privateCode" : "",
"status" : "active"
}
```

High score database:
```
{
"\_id" : ObjectId("5e1e3b2bf5c116fb6c24810c"),
"name" : "Ernie",
"score" : 3,
"questionsPlayed" : 5
}
```

## License

MIT © Alexander Ruppert
