// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * Counter 1:
 *  - Will increment each time it is invoked / stores each increment in the memory of the counter1 variable.
 *  - Uses a callback function, where invoking the first function counterMaker returns the invocation of the function nested inside it.
 *  - Lexical environment is INSIDE the function.
 * 
 * Counter 2: 
 *  - Lexical environment is OUTSIDE the function. 
 * 
 * Both: 
 *  - Both counter 1 and counter 2 code will return the same result.
 * 
 * 
 * 
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 *  - Counter 1 code uses a closure. We can tell because:
 *    a) We have a function that returns a second function.
 *    b) We have a variable that invokes the first function (const counter1 = counterMaker();). 
 *    c) Invoking counter1 invokes the first function, which invokes the second function.
 * 
 * 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * - Counter 1 is preferable if we want to save memory space. 
 * - Counter 2 is preferable if we don't care about saving memory space and want to write the code faster / using fewer lines.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  return Math.floor(Math.random()* 3);
}



/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inningScore, numInnings){
  //invoke inningScore function to generate random inning score for each team
  let AwayInningScores = [inningScore(), inningScore(), inningScore(), inningScore(), inningScore(), inningScore(), inningScore(), inningScore(), inningScore()];
  let HomeInningScores = [inningScore(), inningScore(), inningScore(), inningScore(), inningScore(), inningScore(), inningScore(), inningScore(), inningScore()];

  //Set initial value to final score at 0. Store in variable so that memory of changes can be stored.
  let finalAwayScore = 0;
  let finalHomeScore = 0;

  //Use loop to tally inning scores for each team
  for (let i = 0; i < numInnings; i++){
    finalAwayScore += AwayInningScores[i];
    finalHomeScore += HomeInningScores[i];
  }

  //Log final scores to console inside of an object
  return {
    Home: finalHomeScore,
    Away: finalAwayScore,
  };
}

console.log(finalScore(inning, 9));



/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function scoreboard(inningScore, numInnings,) {

  //invoke inningScore function to generate random inning score for each team
  let AwayInningScores = [inningScore(), inningScore(), inningScore(), inningScore(), inningScore(), inningScore(), inningScore(), inningScore(), inningScore()];
  let HomeInningScores = [inningScore(), inningScore(), inningScore(), inningScore(), inningScore(), inningScore(), inningScore(), inningScore(), inningScore()];

  //Set initial value to final score at 0. Store in variable so that memory of changes can be stored.
  let finalAwayScore = 0;
  let finalHomeScore = 0;

  //Use loop to tally inning scores for each team
  for (let i = 0; i < numInnings; i++){
    finalAwayScore += AwayInningScores[i];
    finalHomeScore += HomeInningScores[i];
  }

  //log entire game scores to console in specified format
  console.log(`
  1st inning: ${AwayInningScores[0]} - ${HomeInningScores[0]}
    2nd inning: ${AwayInningScores[1]} - ${HomeInningScores[1]}
    3rd inning: ${AwayInningScores[2]} - ${HomeInningScores[2]}
    4th inning: ${AwayInningScores[3]} - ${HomeInningScores[3]}
    5th inning: ${AwayInningScores[4]} - ${HomeInningScores[4]}
    6th inning: ${AwayInningScores[5]} - ${HomeInningScores[5]}
    7th inning: ${AwayInningScores[6]} - ${HomeInningScores[6]}
    8th inning: ${AwayInningScores[7]} - ${HomeInningScores[7]}
    9th inning: ${AwayInningScores[8]} - ${HomeInningScores[8]}

    Final Score: ${finalAwayScore} - ${finalHomeScore}`);
};

console.log(scoreboard(inning, 9));
  

