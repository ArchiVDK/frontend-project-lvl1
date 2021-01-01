import { cons } from '@hexlet/pairs';
import { random, gameLaunch } from '../index';

const findGcd = (number1, number2) => {
  if ((number2 - number1) === 0) {
    return number2;
  }
  return findGcd(number2, Math.abs(number1 - number2));
};

export default () => {
  const discription = 'Find the greatest common divisor of given numbers.';

  const createData = () => {
    const number1 = random();
    const number2 = random();
    const question = `${number1} ${number2}`;
    const answer = findGcd(number1, number2);
    return cons(question, answer);
  };
  return gameLaunch(discription, createData);
};
