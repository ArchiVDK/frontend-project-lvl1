import { cons } from '@hexlet/pairs';
import { random, randomElement, gameLaunch } from '../index.js';

const calculate = (operator, num1, num2) => {
  switch (operator) {
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
    const operators = ['+', '-', '*'];
    const operator = randomElement(operators);
    const question = `${number1} ${operator} ${number2}`;
    const answer = calculate(operator, number1, number2);
    return cons(question, answer);
  };
  return gameLaunch(description, createData);
};
