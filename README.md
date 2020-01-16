# quizzle

A quiz to show your skills

## Project title

"Quizzle" is just a working title. Creative suggestions for a title are very welcome.

## Motivation

This project is my final work for the intensive Web Development Course [@neuefische](http://neuefische.de/) in Cologne. We had one month time to complete it.

## Tech/framework used

<b>Built with</b>
<to be added>

## Features

<to be added>

## Code Example

<to be added>

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

## Built with

- HTML
- CSS
- Javascript
- React
- emotion
- storybook
- Node.js
- express
- MongoDB Atlas

## License

MIT © aruppert
