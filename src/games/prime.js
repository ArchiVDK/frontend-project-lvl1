import { cons } from '@hexlet/pairs';
import { random, gameLaunch } from '../index.js';

const isPrime = (num) => {
  const iter = (divisor) => {
    if (divisor > Math.sqrt(num)) {
      return true;
    }
    if (num % divisor === 0) {
      return false;
    }
    return iter(divisor + 1);
  };
  return iter(2);
};

export default () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const createData = () => {
    const question = random();
    const answer = isPrime(question) ? 'yes' : 'no';
    return cons(question, answer);
  };
  return gameLaunch(task, createData);
};
