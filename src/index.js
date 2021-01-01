import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const random = () => Math.floor(Math.random() * 100);

export const randomElement = (array) => array[Math.floor(Math.random() * array.length)];

export const gameLaunch = (discription, gameData) => {
  console.log(`Welcome to the Brain Games!\n${discription}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < 3; i += 1) {
    const generateData = gameData();
    console.log(`Question: ${car(generateData)}`);
    const userAnswer = readlineSync.question('Your answer:  ');
    const expectedAnswer = `${cdr(generateData)}`;
    if (userAnswer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
