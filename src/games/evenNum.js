import { cons } from '@hexlet/pairs';
import { random, gameLaunch } from '../index';

const isEven = (number) => number % 2 === 0;

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const createData = () => {
    const number = random();
    const question = number;
    const answer = isEven(number) ? 'yes' : 'no';
    return cons(question, answer);
  };
  return gameLaunch(description, createData);
};
