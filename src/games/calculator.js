import { cons } from '@hexlet/pairs';
import { random, randomElement, gameLaunch } from '../index.js';

const calculate = (operation, num1, num2) => {
  switch (operation) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default:
      return null;
  }
};

export default () => {
  const description = 'What is the result of the expression?';
  const createData = () => {
    const number1 = random();
    const number2 = random();
    const operations = ['+', '-', '*'];
    const operation = randomElement(operations);
    const question = `${number1} ${operation} ${number2}`;
    const answer = calculate(operation, number1, number2);
    return cons(question, answer);
  };
  return gameLaunch(description, createData);
};
