# quizz.Me

Your personalized trivia game for every occasion.

## Description

With quizz.Me you can test your trivia knowledge with multiple choice questions.
You can add questions for all users or create a totally unique and private set with a passcode, e.g. with funny details about the bride and groom.
Your creativity and quizz.Me's multiplayer mode will be the highlight at any party!

## Motivation

This project is my final work for the intensive Web Development Course [@neuefische](http://neuefische.de/) in Cologne. We had one month time to complete it.

## Tech/framework highlights

<b>Built mainly with the help of</b>

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

Just run:

```
 npm install
```

The script should automatically install the client. If something goes wrong:

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

and in the other:

```
npm run client
```

The app should start in your browers (usually on http://localhost:3000)

## How to use?

To try out the full functionality please use the following URL, where this app has been deployed:

https://quizzme2020.herokuapp.com/

Otherwise you need to deploy your own server (e.g. a JSON Server.)

The datastructe of the two collections should look like this:

{
"\_id" : ObjectId("5e206675e63bec3db479c2cb"),
"question" : "What is considered the rarist form of color blindness?",
"correctAnswer" : "Blue",
"incorrectAnswer1" : "Red",
"incorrectAnswer2" : "Green",
"incorrectAnswer3" : "Purple",
"privateCode" : "",
"status" : "active"
}

{
"\_id" : ObjectId("5e1e3b2bf5c116fb6c24810c"),
"name" : "Ernie",
"score" : 3,
"questionsPlayed" : 5
}

## License

MIT © aruppert
